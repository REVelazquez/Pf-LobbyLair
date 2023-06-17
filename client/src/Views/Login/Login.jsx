import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
<<<<<<< Updated upstream
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, signInWithEmailAndPassword } from '../../firebase/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { getUserByEmail } from '../../Redux/actions';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FcGoogle } from 'react-icons/fc';
=======
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../Redux/actions";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FcGoogle } from "react-icons/fc";
import LobbyLogo from "../../Multimedia/Logo Lobbylair.gif";
import { NavLink } from "react-router-dom";
>>>>>>> Stashed changes
import Modal from 'react-modal';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 9999,
  },
  content: {
    width: '300px',
    height: '200px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '2rem',
    borderRadius: '0.5rem',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.25)',
  },
};

<<<<<<< Updated upstream
  const Login = () => {
=======

const Login = () => {
>>>>>>> Stashed changes
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const [showModal, setShowModal] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

<<<<<<< Updated upstream
  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      navigate('/');
    }
  }, [navigate]);

=======
>>>>>>> Stashed changes
  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

<<<<<<< Updated upstream

  const handleLogin = async (values) => {
    try {
      const user_Db = await dispatch(getUserByEmail(values.email));
      if (user_Db.payload.length === 0 || user_Db.payload[0].password !== values.password) {
      openModal()
        return;
      }else{
        navigate('/home');
      }
    } catch (err) {
      console.log(err);
=======
  const gotoRegister = ()=>{
    setModalIsOpen(false);
    navigate("/register");
  }

  const handleLogin = async (values) => {
    try {
      const validateUser = await dispatch(logIn(values));
       navigate("/home");
    } catch (error) {
      openModal()
>>>>>>> Stashed changes
    }
  };

  const handleSignInWithGoogle = async () => {
    const googleProvider = new GoogleAuthProvider();
    
    try {
      const res = await signInWithPopup(auth, googleProvider);
      console.log(res);
    } catch (error) {
      openModal()
    }
  };

  return (


    <section className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="w-72 p-4 bg-white rounded shadow-md">
   
      <div className="max-w-180 mx-auto text-center flex items-center justify-center">

       </div>
       <Modal 
        style={customStyles}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="User Does Not Exist Modal"
              >
          <h2 className="text-xl font-bold mb-4 text-gray-800 text-center">User Does Not Exist</h2>
             <button onClick={closeModal} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-auto "
>Close</button>
            </Modal>
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
              const errors = {};

              if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
                errors.email = 'Invalid email format';
            }

            if (!/(?=.*[A-Z])(?=.*[!@#$%^&*])/.test(values.password)) {
                errors.password = 'Password must contain at least one uppercase letter and one symbol';
              }

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
<<<<<<< Updated upstream
      </div>
    </section>
=======
        <Modal 
        style={customStyles}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="User Does Not Exist Modal"
              >
          <h2 className="text-xl font-bold mb-4 text-gray-800 text-center">Wrong username/password</h2>
             <button onClick={closeModal} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-auto "
             >Close</button>
             <button onClick={gotoRegister} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-auto "
             >Go to Register</button>
            </Modal>
        <div className="w-72 p-4 bg-white rounded-[1rem] shadow-md mt-4">
          <div className="max-w-180 mx-auto text-center flex items-center justify-center"></div>
          <div>
            <h1 className="text-xl font-bold mb-4 text-gray-800">
              Sign in to your account
            </h1>
            <Formik 
              initialValues={{
                email: "",
                password: "",
              }}
              validate={(values) => {
                const errors = {};

                if (!values.email) {
                  errors.email = "Email is required";
                }
                if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
                  errors.email = 'Invalid email format';
              }
  
              if (!/(?=.*[A-Z])(?=.*[!@#$%^&*])/.test(values.password)) {
                  errors.password = 'Password must contain at least one uppercase letter and one symbol';
                }

                if (!values.password) {
                  errors.password = "Password is required";
                }

                return errors;
              }}
              onSubmit={handleLogin}>
                <Form>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="mb-1 text-sm font-bold text-gray-800">
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
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="mb-1 text-sm font-bold text-gray-800">
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
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-black text-white border-none rounded-[5rem] p-3 text-l font-bold cursor-pointer">
                  Sign in
                </button>
                <p className="mt-3 text-sm text-gray-800">
                  Don’t have an account yet?{" "}
                  <a href="/register" className="font-bold text-black">
                    Sign up
                  </a>
                </p>
              </Form>
            </Formik>
            <p className="text-sm text-gray-800 mt-1">Or sign in with</p>
            <button
              onClick={handleSignInWithGoogle}
              className="w-full bg-black text-white border-none rounded-[5rem] p-3 text-xl font-bold cursor-pointer hover:bg-white hover:text-black hover:shadow-md">
              <FcGoogle className="inline-block mr-2" />
              Sign in with Google
            </button>
          </div>
        </div>
      </section>
    </>
>>>>>>> Stashed changes
  );
};

export default Login;