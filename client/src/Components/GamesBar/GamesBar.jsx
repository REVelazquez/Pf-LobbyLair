import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink} from "react-router-dom";
import { getGamesWithPagination } from "../../Redux/actions";
import Style from './GamesBar.module.css'

const GamesBar = ()=>{
    const dispatch = useDispatch()

///paginacion de juegos por pantalla
    
    const [currentPage, setCurrentPage]= useState(1)
    const [btnUp, setBtnUp]= useState(true)
    const [btnDown, setBtnDown]=useState(false)

    useEffect(()=>{
        dispatch(getGamesWithPagination(currentPage))
    }, [currentPage, dispatch])

    let games=useSelector(state=>state.pageGames)
    console.log(games);
    let gamesInPages= games.games

    useEffect(()=>{
        if(currentPage === 1){
            setBtnUp(true);
            setBtnDown(false)
        }else if(currentPage === games.totalPages){
            setBtnDown(true)
            setBtnUp(false)
        }else{
            setBtnDown(false)
            setBtnUp(false)
        }
    })

    const handleDown= (event)=>{
        if(currentPage !== games.totalPages){
            const nextPage = currentPage +1;
            setCurrentPage(nextPage)
        }
    }
    const handleUp= (event)=>{
        if(currentPage>1){
            const nextPage=currentPage-1;
            setCurrentPage(nextPage)
        }
    }
    return (
        <div className={Style.container}>
            <button onClick={handleUp} className={Style.btn} disabled={btnUp} >^</button>
            {gamesInPages?.map(({id, thumbnail})=>{
                return(
                    <button key={id}>
                    <NavLink to={`/game/${id}`} >
                    <img className={Style.imag} src={thumbnail} alt="" />
                    </NavLink>
                </button>)}
                )}
            <button onClick={handleDown} className={Style.btn} disabled={btnDown}>v</button>
        </div>
    )
}

export default GamesBar