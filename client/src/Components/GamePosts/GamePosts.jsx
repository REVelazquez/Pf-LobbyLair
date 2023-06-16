import GamesBar from "../GamesBar/GamesBar"
import Style from './GamePosts.module.css'
const GamePosts= ()=>{


    return(
    <div className={Style.container} >
        <GamesBar/>

        <p> POST DE JUEGOS ACA</p>

    </div>
    )
}

export default GamePosts