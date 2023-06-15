import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { getAllGames } from "../../Redux/actions";
import Style from './GamesBar.module.css'

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
    
    const handleDown= (event)=>{
        if (currentPage !== maxPage){
            const nextPage=currentPage+1;
            const newIndex=nextPage*gamesPerPage
            setCurrentPage(nextPage);
            setIndexOfFirstGame(newIndex)
            setIndexOfLastGame(newIndex+gamesPerPage)
        }
    }
    const handleUp= (event)=>{
        if(currentPage>1){
            const prevPage=currentPage-1;
            const newIndex=(prevPage-1)*gamesPerPage;
            setCurrentPage(prevPage)
            setIndexOfFirstGame(newIndex)
            setIndexOfLastGame(newIndex+gamesPerPage)
        }
    }

    return(
        <div className={Style.container}>
            <button className={Style.btn} onClick={handleUp} disabled={upButton}>^</button>
           {currentGames?.map(({id, thumbnail, name})=>{
            return(
                <button key={id}>
                    <NavLink to={`/game/${id}`} >
                    <img className={Style.imag} src={thumbnail} alt="" />
                    </NavLink>
                </button>
            )
        })}     
        <button className={Style.bt} onClick={handleDown} disabled={downButton} >v</button>
        </div>
    )
}

export default GamesBar