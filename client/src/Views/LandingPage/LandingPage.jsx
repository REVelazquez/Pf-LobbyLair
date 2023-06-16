import { NavLink, useNavigate } from "react-router-dom"
import {Login }from '../../Views/index'

const LandingPage = ()=>{
    const navigate=useNavigate()

    return(
        <div>
            <Login/>

        </div>
    )
}

export default LandingPage