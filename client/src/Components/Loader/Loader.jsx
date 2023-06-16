import LobbyLogo from "../../Multimedia/Flight lobbylair.gif"
import Style from './Loader.module.css'


const Loader = ()=>{
    return(
        <img src={LobbyLogo} alt="lobbylogo"  className={Style.animation} />
    )
}

export default Loader