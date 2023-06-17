import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, signInWithEmailAndPassword } from '../../firebase/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { getUserByEmail } from '../../Redux/actions';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FcGoogle } from 'react-icons/fc';


const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      navigate('/');
    }
  }, [navigate]);

  const handleLogin = async (values) => {
    try {
      const user_Db = await dispatch(getUserByEmail(values.email));
      if (user_Db.payload.length === 0 || user_Db.payload[0].password !== values.password) {
        alert('Email does not exist');
        return;
      } else {
        navigate('/home');
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleSignInWithGoogle = async () => {
    const googleProvider = new GoogleAuthProvider();

    try {
      const res = await signInWithPopup(auth, googleProvider);
      console.log(res);
    } catch (error) {
      alert(error)
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      return 'Email is required';
    } else if (!emailRegex.test(email)) {
      return 'Invalid email format';
    }
    return '';
  };

  const validatePassword = (password) => {
    if (!password) {
      return 'Password is required';
    } else if (!/(?=.*[A-Z])(?=.*[!@#$%^&*])/.test(password)) {
      return 'Password must contain at least one uppercase letter and one symbol';
    }
    return '';
  };

  return (
    <section className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="w-72 p-4 bg-white rounded shadow-md">
        <div className="max-w-180 mx-auto text-center flex items-center justify-center">
        </div>
        <div>
          <h1 className="text-xl font-bold mb-4 text-gray-800">
            Sign in to your account
          </h1>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validate={(values) => {
                const errors = {
                  email: validateEmail(values.email),
                  password: validatePassword(values.password),
                };
                setEmailError(errors.email);
                setPasswordError(errors.password);
                return errors;
              }}
              onSubmit={handleLogin}
            >
            <Form>
              <div className="mb-4">
                <label htmlFor="email" className="mb-1 text-sm font-bold text-gray-800">
                  Your email
                </label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  placeholder="name@company.com"
                  className="w-full p-2 border border-gray-300 rounded-[5rem]"
                  required
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="mb-1 text-sm font-bold text-gray-800">
                  Password
                </label>
                <Field
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Write your password"
                  className="w-full p-2 border border-gray-300 rounded-[5rem]"
                  required
                />
                <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
              </div>
              <button type="submit" className="w-full bg-black text-white border-none rounded-[5rem] p-3 text-l font-bold cursor-pointer">
                Sign in
              </button>
              <p className="mt-3 text-sm text-gray-800">
                Don’t have an account yet?{' '}
                <a href="/register" className="font-bold text-black">
                  Sign up
                </a>
              </p>
            </Form>
          </Formik>
          <p className="text-sm text-gray-800 mt-1">Or sign in with</p>
          <button onClick={handleSignInWithGoogle} className="w-full bg-black text-white border-none rounded-[5rem] p-3 text-xl font-bold cursor-pointer hover:bg-white hover:text-black hover:shadow-md">
            <FcGoogle className="inline-block mr-2" />
            Sign in with Google
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;