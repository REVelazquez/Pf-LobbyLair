import { useState } from "react";
import { auth, createUserWithEmailAndPassword } from "../../firebase/firebase";
import { createUser } from "../../Redux/actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import LobbyLogo from "../../Multimedia/Logo Lobbylair.gif";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [ setUser ] = useState(null);
  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
  });
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      dispatch(createUser(data));
      if (user) { 
        navigate("/");
      }
    } catch (error) {
      alert(error);
    }

  };

  return (
    <section className="bg-gray-100 min-h-screen w-[100%] pt-14 flex flex-col items-center justify-center">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
          height: "100vh",
        }}
      >
        <a
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "1.5rem",
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "#111827",
          }}
        >
          <img src={LobbyLogo} alt="LOBBYL" className="w-20 h-auto mt-4" />
        </a>
        <div
          style={{
            width: "100%",
            backgroundColor: "#fff",
            borderRadius: "0.375rem",
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            maxWidth: "20rem",
            padding: "1.5rem",
          }}
        >
          <div
            style={{
              padding: "1rem",
              marginBottom: "1.5rem",
            }}
          >
            <h1
               className="text-xl font-bold mb-4 text-gray-800"
            >
              Create an account
            </h1>
            <form onSubmit={handleRegister} style={{ marginTop: "1.5rem" }}>
            <div style={{ marginBottom: "1rem" }}>
                <label
                  htmlFor="name"
                  className="mb-1 text-sm font-bold text-gray-800"
                >
                  Your name
                </label>
                <input
                  type="name"
                  name="name"
                  id="name"
                  className="w-full p-2 border border-gray-300 rounded-[5rem]"
                  placeholder="name"
                  required
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                  value={data.name}
                />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label
                  htmlFor="email"
                  className="mb-1 text-sm font-bold text-gray-800"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full p-2 border border-gray-300 rounded-[5rem]"
                  placeholder="name@company.com"
                  required
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                  value={data.email}
                />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label
                  htmlFor="password"
                  className="mb-1 text-sm font-bold text-gray-800"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="w-full p-2 border border-gray-300 rounded-[5rem]"
                  placeholder="••••••••"
                  required
                  onChange={(e) => setData({ ...data, password: e.target.value })}
                  value={data.password}
                />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label
                  htmlFor="confirm-password"
                  className="mb-1 text-sm font-bold text-gray-800"
                >
                  Confirm password
                </label>
                <input
                  type="password"
                  name="confirm-password"
                  id="confirm-password"
                  className="w-full p-2 border border-gray-300 rounded-[5rem]"
                  placeholder="••••••••"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white border-none rounded-[5rem] p-3 text-l font-bold cursor-pointer"
              >
                Create an account
              </button>

              <p  className="mt-3 text-sm text-gray-800">
                Already have an account?{" "}
                <a href="/login"  className="font-bold text-black">
                  Login here
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
