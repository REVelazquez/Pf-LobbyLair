import { NavLink, useNavigate } from "react-router-dom"
import {Login }from '../../Views/index'

const LandingPage = ()=>{
    const navigate=useNavigate()

    return(
        <div>
            <Login/>

            <button><NavLink to={'/home'}>Join to the lair!</NavLink> </button>
        </div>
    )
}

export default LandingPage