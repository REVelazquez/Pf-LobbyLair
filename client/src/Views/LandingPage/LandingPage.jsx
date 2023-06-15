import { NavLink, useNavigate } from "react-router-dom"


const LandingPage = ()=>{
    const navigate=useNavigate()

    return(
        <div>
            <button><NavLink to={'/home'}>Join to the lair!</NavLink> </button>
        </div>
    )
}

export default LandingPage