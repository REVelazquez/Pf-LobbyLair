import { NavLink } from "react-router-dom";

const NavBar = () =>{

    return (
         <nav>
            <div>
                <button>
                    <NavLink to='/'>INICIO</NavLink>
                </button>

                <button>
                    <NavLink to='/payment'>PAGOS</NavLink>
                </button>

                <button>
                    <NavLink to='/profile'>PERFIL</NavLink>
                </button>

                <button>
                    <NavLink to='/Login'>INGRESAR</NavLink>
                </button>

                <button>
                    <NavLink to='/logout'>SALIR</NavLink>
                </button>

            </div>
         </nav>
    )
}

export default NavBar;