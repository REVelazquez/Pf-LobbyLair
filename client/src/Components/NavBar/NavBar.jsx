import { useLocation, NavLink } from "react-router-dom";

const NavBar = () =>{
    const location = useLocation();

    if (location.pathname === "/") {
        return null; // Retorna null si la ubicación actual es "/"
    }

    return (
         <nav>
            <div>
                <button>
                    <NavLink to='/home'>INICIO</NavLink>
                </button>

                <button>
                    <NavLink to='/payment'>PAGOS</NavLink>
                </button>

                <button>
                    <NavLink to='/profile'>PERFIL</NavLink>
                </button>

            </div>
         </nav>
    )
}

export default NavBar;