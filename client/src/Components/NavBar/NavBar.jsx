import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { auth, signOut } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { WiDaySunny, WiMoonAltNew } from "react-icons/wi";
import LobbyFlight from "../../Multimedia/Flight lobbylair.gif"
import LobbyLogo from '../../Multimedia/Logo Lobbylair.gif'
import { useDispatch } from "react-redux";
import { logOut } from "../../Redux/actions";
import SearchBar from '../SearchBar/SearchBar';


const NavBar = () => {
  const dispatch = useDispatch();
  const [theme, setTheme] = useState("light");
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const user = auth.currentUser;

  const handleThemeChange = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    // Realiza los cambios de estilo según el tema seleccionado
    if (newTheme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      dispatch(logOut());
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <nav style={{ backgroundColor: "#1f2937", padding: "1rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", maxWidth: "1050px", margin: "auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "2.5rem", flex: "1" }}>
        <button>
  <NavLink
    to="/"
    style={{ textDecoration: "none", display: "flex", alignItems: "center" }}
    activeClassName="text-gray-300"
    exact
  >
    <div style={{width:'50px', height:'50px', justifyContent:'center', backgroundColor:"white", borderRadius:'100%',}}>
      <img src={LobbyLogo} alt='LOBBYL' style={{ transform:'scale(1)', marginTop:'2px'}} />
    </div>
    <div
              style={{
                maxWidth: "100px",
                position: "absolute",
                top: mousePosition.y -30,
                left: mousePosition.x -30,
                transform: "translate(-50%, -50%)",
                zIndex:1,
                transition: "transform 1.2s ease" ,
                pointerEvents:"none",
              }}
            >
      <img src={LobbyFlight} alt="LOBBYF" style={{ transform:"scale(2)" }} />
    </div>
  </NavLink>
</button>
          <button>
            <NavLink
              to="/home"
              style={{ color: "white", fontSize: "1.25rem", fontWeight: "600", textDecoration: "none", hover: "gray" }}
              activeClassName="text-gray-300"
              exact
            >
              Home
            </NavLink>
          </button>
          <SearchBar/>
          <button>
            <NavLink
              to="/payment"
              style={{ color: "white", fontSize: "1.25rem", fontWeight: "600", textDecoration: "none", hover: "gray" }}
              activeClassName="text-gray-300"
            >
              Payments
            </NavLink>
          </button>
          <button>
            <NavLink
              to="/favorites"
              style={{ color: "white", fontSize: "1.25rem", fontWeight: "600", textDecoration: "none", hover: "gray" }}
              activeClassName="text-gray-300"
            >
              Favorites
            </NavLink>
          </button>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "3rem", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            {theme === "light" ? (
              <WiDaySunny size={20} color="white" onClick={handleThemeChange} style={{ cursor: "pointer" }} />
            ) : (
              <WiMoonAltNew size={20} color="white" onClick={handleThemeChange} style={{ cursor: "pointer" }} />
            )}
            <span style={{ color: "white", fontSize: "1.25rem", fontWeight: "600" }}>
              {theme === "light" ? "Light" : "Dark"}
            </span>
          </div>
              <div style={{ position: "relative" }}>
                <img
                  src="https://source.unsplash.com/64x64/?person"
                  alt=""
                  width={40}
                  height={40}
                  style={{ borderRadius: "50%", cursor: "pointer" }}
                  onClick={handleMenuToggle}
                />
                {showMenu && (
                  <ul style={{ position: "absolute", top: "100%", left: 0, backgroundColor: "white", padding: "0.5rem", borderRadius: "4px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", zIndex: 1 }}>
                    <li>
                      <NavLink
                        to="/profile"
                        style={{ color: "black", fontSize: "1.25rem", fontWeight: "600", textDecoration: "none", hover: "gray" }}
                        activeClassName="text-gray-300"
                      >
                        Profile
                      </NavLink>
                    </li>
                  </ul>
                )}
              </div>
              <button>
                <NavLink
                  to="/"
                  style={{ color: "white", fontSize: "1.25rem", fontWeight: "600", textDecoration: "none", hover: "gray" }}
                  activeClassName="text-gray-300"
                  onClick={handleLogout}>
                  Log Out
                </NavLink>
              </button>

        </div>
      </div>
    </nav>
  );
};

export default NavBar;