import GamesBar from "../../Components/GamesBar/GamesBar"

const Favorites = ()=>{
    return(
        <div style={{display: 'flex', flexDirection: "row"}}>
            <GamesBar/>

            <p>Los juegos favoritos del usuario...o seran los jugadores?, lo veran en el proximo episodio</p>
        </div>
    )
}

export default Favorites