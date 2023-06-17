import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams} from 'react-router-dom'
import { getGameById } from "../../Redux/actions"
import GamesBar from "../GamesBar/GamesBar"

const GameDetail= ()=>{

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { detail } = useParams()

    useEffect(() => {
        dispatch(getGameById(detail));
      }, [detail]);


    let game = useSelector(state=>state.game)

    const gameModes=game.GameModes

    const handleOnClick = ( id) => {
        let gameId = detail
        let gameModeId = id
        navigate(`/post?gameId=${gameId}&gameModeId=${gameModeId}`)
    }

    return(
        <div className="flex">
            <GamesBar/>
            <div className="flex flex-col items-center justify-center max-w-lg mx-auto my-10 bg-gray-200 rounded-lg shadow-md p-5">
            <img src={game.thumbnail} className="mx-auto w-15 h-15" alt="" />
            <h1 className="text-center text-2xl font-bold mt-12 p-6 text-3xl text-gray-900 cursor-default"> Name: {game.name} </h1>
            
            {gameModes?.map(({id, name})=>{
                
                return(
                    <button onClick={() => handleOnClick(id)} key={'gameMode' + id}  className="text-gray-200 block rounded-lg text-center font-medium px-6 py-3 bg-gray-900 hover:bg-black hover:text-white m-3">
                       New post of {name}
                    </button>
                )
            })}
            </div>
        </div>
    )
}

export default GameDetail
