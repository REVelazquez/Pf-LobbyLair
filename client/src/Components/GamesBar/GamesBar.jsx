import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getGamesWithPagination } from "../../Redux/actions";
import { HiArrowCircleDown, HiArrowCircleUp} from "react-icons/hi";
import Loader from "../Loader/Loader";
import { NavLink } from "react-router-dom";

const ImagePreloader = ({ src }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setIsLoaded(true);
    };
    return () => {
      img.onload = null;
    };
  }, [src]);

  return isLoaded ? <img src={src} alt="" className="w-[8rem] h-[8rem]"/> : <Loader />;
};

const GamesBar = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [btnUp, setBtnUp] = useState(true);
  const [btnDown, setBtnDown] = useState(false);

  useEffect(() => {
    setLoading(true);
    dispatch(getGamesWithPagination(currentPage));
  }, [currentPage, dispatch]);

  const navigate = useNavigate();

  let games = useSelector((state) => state.pageGames);
  let gamesInPages = games.games;

  useEffect(() => {
    if (currentPage === 1) {
      setBtnUp(true);
      setBtnDown(false);
    } else if (currentPage === games.totalPages) {
      setBtnDown(true);
      setBtnUp(false);
    } else {
      setBtnDown(false);
      setBtnUp(false);
    }
  });

  const handleDown = (event) => {
    if (currentPage !== games.totalPages) {
      const nextPage = currentPage + 1;
      setCurrentPage(nextPage);
    }
  };
  const handleUp = (event) => {
    if (currentPage > 1) {
      const nextPage = currentPage - 1;
      setCurrentPage(nextPage);
    }
  };
  
  return (
    <div className="flex justify-end mt-4">
      <div style={{position:'sticky'}} className="flex flex-col h-full">
        <div className="flex justify-center">
        <NavLink
          onClick={handleUp}
          className=" border-gray-400 rounded-lg disabled:bg-gray-300 hover:text-blue-500 mt-2"
          disabled={btnUp}

        >
          <HiArrowCircleUp className="w-6 h-6" />
        </NavLink>
        </div>
        {gamesInPages?.map(({ id, thumbnail }) => {
          return(
            <button
              key={id}
              onClick={() => navigate(`/games/${id}`) }
              className="flex items-center justify-center"
            >
              <ImagePreloader src={thumbnail} />
            </button>
          ) 
        })}
        <div className="flex justify-center">
          <NavLink
            onClick={handleDown}
            className=" border-gray-400 rounded-lg disabled:bg-gray-300 hover:text-blue-500 mt-2"
            disabled={btnDown}
          >
            <HiArrowCircleDown className="w-6 h-6" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default GamesBar;
