import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { getAllGames } from "../../Redux/actions";

const GamesBar = ()=>{
    const dispatch = useDispatch()
    const navigate = useNavigate()

///paginacion de juegos por pantalla
    useEffect(()=>{
        dispatch(getAllGames())
    })

    let allGames=useSelector(state=>state.games)

    const [currentPage, setCurrentPage]= useState(1)
    const gamesPerPage=5

    let initialLastIndex= currentPage*gamesPerPage
    const [indexOfLastGame, setIndexOfLastGame]=useState(initialLastIndex)
    
    let initialFirstIndex= indexOfLastGame-gamesPerPage
    const [indexOfFirstGame, setIndexOfFirstGame] = useState(initialFirstIndex)

    const currentGames=allGames.slice(indexOfFirstGame, Math.min(indexOfLastGame))

    const maxPage=Math.ceil(allGames.length/gamesPerPage)

 //botones para mostrar juegos anteriores o siguientes

    const [upButton, setUpButton]=useState(true)
    const [downButton, setDownButton]=useState(false)

    useEffect(()=>{
        if(currentPage === 1){
            setUpButton(true);
            setDownButton(false);
        }else if(currentPage === maxPage){
            setDownButton(true);
            setUpButton(false)
        }else{
            setDownButton(false);
            setUpButton(false)
        }
    }, [currentPage, maxPage])
    
    return(
        <div>
            <button disabled={upButton}>^</button>
           {currentGames?.map(({id, thumbnail, name})=>{
            return(
                <button key={id}>
                    <NavLink to={`/game/${id}`} >
                    <img src={thumbnail} alt="" />
                    </NavLink>
                </button>
            )
        })}     
        <button>v</button>
        </div>
    )
}

export default GamesBar