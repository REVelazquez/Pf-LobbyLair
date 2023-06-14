import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, signInWithEmailAndPassword } from '../../firebase/firebase';

const Login = () => {
    const navigate = useNavigate();

  const [data, setData] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      navigate('/');
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      navigate('/');
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
      console.log(error);
    }
  };

  return (
    <section style={{ backgroundColor: '#F7FAFC', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ width: '300px', padding: '20px', backgroundColor: '#FFF', borderRadius: '4px', boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 2px rgba(0, 0, 0, 0.24)' }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', fontSize: '20px', fontWeight: 'bold', color: '#333' }}>
          LobbyLair
        </a>
        <div>
          <h1 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '20px', color: '#333' }}>
            Sign in to your account
          </h1>
          <form onSubmit={handleLogin}>
            <div style={{ marginBottom: '10px' }}>
              <label htmlFor="email" style={{ marginBottom: '5px', fontSize: '14px', fontWeight: 'bold', color: '#333' }}>
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="name@company.com"
                required
                style={{ width: '100%', padding: '10px', border: '1px solid #CCC', borderRadius: '4px' }}
                value={data.email}
                onChange={(e) =>
                  setData({
                    ...data,
                    email: e.target.value,
                  })
                }
              />
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label htmlFor="password" style={{ marginBottom: '5px', fontSize: '14px', fontWeight: 'bold', color: '#333' }}>
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                required
                style={{ width: '100%', padding: '10px', border: '1px solid #CCC', borderRadius: '4px' }}
                value={data.password}
                onChange={(e) =>
                  setData({
                    ...data,
                    password: e.target.value,
                  })
                }
              />
            </div>
            <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
              <div style={{ marginRight: '5px' }}>
                <input
                  id="remember"
                  aria-describedby="remember"
                  type="checkbox"
                  required
                  style={{ width: '16px', height: '16px', border: '1px solid #CCC' }}
                />
              </div>
              <div style={{ fontSize: '14px', color: '#333' }}>
                <label htmlFor="remember">
                  Remember me
                </label>
              </div>
            </div>
            <button type="submit" style={{ width: '100%', backgroundColor: '#000', color: '#FFF', border: 'none', borderRadius: '4px', padding: '10px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}>
              Sign in
            </button>
            <p style={{ marginTop: '10px', fontSize: '14px', color: '#333' }}>
              Don’t have an account yet?{' '}
              <a href="/register" style={{ fontWeight: 'bold', color: '#000' }}>
                Sign up
              </a>
            </p>
          </form>
          <button onClick={handleSignInWithGoogle} style={{ width: '100%', backgroundColor: '#4285F4', color: '#FFF', border: 'none', borderRadius: '4px', padding: '10px', fontSize: '16px', fontWeight: 'bold', marginTop: '10px', cursor: 'pointer' }}>
            Sign in with Google
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;