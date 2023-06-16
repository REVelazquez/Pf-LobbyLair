import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams} from 'react-router-dom'
import { getGameById } from "../../Redux/actions"
import GamesBar from "../GamesBar/GamesBar"
import Style from './GameDetail.module.css'

const GameDetail= ()=>{

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { detail } = useParams()

    useEffect(()=>{
        dispatch(getGameById(detail))
    }, [detail])


    let game = useSelector(state=>state.game)

    const gameModes=game.GameModes

    const handleOnClick = ( id) => {
        let gameId = detail
        let gameModeId = id
        navigate(`/post?gameId=${gameId}&gameModeId=${gameModeId}`)
    }

    return(
        <div className={Style.container} >
            <GamesBar/>
            <div style={{display:"flex", flexDirection:'row'}}>
            <img src={game.thumbnail} style={{maxHeight:'10em'}} alt="" />
            <h1 style={{marginTop:'5em'}}>Name:{game.name}</h1>
            </div>
            {gameModes?.map(({id, name})=>{
                
                return(
                    <button onClick={() => handleOnClick(id)} key={'gameMode' + id}>
                       New post of {name}
                    </button>
                )
            })}
        </div>
    )
}

export default GameDetail
