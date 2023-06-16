import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams} from 'react-router-dom'
import { gameMode } from "../../Redux/actions"
import GamesBar from "../GamesBar/GamesBar"
import Style from './GameDetail.module.css'
const GameDetail= ()=>{

    const dispatch = useDispatch()



    useEffect(()=>{
        dispatch(gameMode())
    }, [])

    let gameModes = useSelector(state=>state.gameMode)


    return(
    <div className={Style.container} >
        <GamesBar/>

        {gameModes?.map(({id, name})=>{
            return(
                <button key={'gameMode' + id}>
                    {name}
                </button>
            )
        })}

    </div>
    )
}

export default GameDetail