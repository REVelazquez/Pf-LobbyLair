import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getGamesWithPagination } from "../../Redux/actions";
import Style from './GamesBar.module.css';
import Loader from '../Loader/Loader';

const GamesBar = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [btnUp, setBtnUp] = useState(true);
  const [btnDown, setBtnDown] = useState(false);

  useEffect(() => {
    setLoading(true);
    dispatch(getGamesWithPagination(currentPage)).then(() => setLoading(false));
  }, [currentPage, dispatch]);

    const navigate=useNavigate()

    let games=useSelector(state=>state.pageGames)
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
            {loading && <Loader/>}
            {gamesInPages?.map(({id, thumbnail})=>{
                return(
                    <button onClick={()=>navigate(`/games/${id}`)} key={id}>
                    <img className={Style.imag} src={thumbnail} alt="" />

                </button>)}
                )}
            <button onClick={handleDown} className={Style.btn} disabled={btnDown}>v</button>
        </div>
    )
}

export default GamesBar