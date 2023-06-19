import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { getGameById, getPostsWithPagination } from "../../Redux/actions";
import GamesBar from "../GamesBar/GamesBar";

const GameDetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { detail } = useParams();

  useEffect(() => {
    dispatch(getGameById(detail));
    dispatch(getPostsWithPagination(detail))
  }, [detail]);

  let game = useSelector((state) => state.game);
  let gamePosts= useSelector(state=>state.pagePosts)

  let lastPosts= gamePosts.posts
  const gameModes = game.GameModes;

  const handleOnClick = (id) => {
    let gameId = detail;
    let gameModeId = id;
    navigate(`/post?gameId=${gameId}&gameModeId=${gameModeId}`);
  };

  return (
    <div className="flex">
      <div className="ml-2">
        <GamesBar />
      </div>

      <div
        className="flex flex-col items-center justify-center w-[300px] h-[600px] mx-auto my-[5rem] bg-gray-300 rounded-lg p-3 mt-[5rem] ml-[10rem]"
        style={{
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.25)",
        }}
      >
        <img
          src={game.thumbnail}
          className="mx-auto w-[13rem] h-[13rem]"
          alt=""
        />
        <h1 className="text-center text-2xl font-bold mt-12 p-6 text-gray-900 cursor-default">
          {game.name}
        </h1>

        {gameModes?.map(({ id, name }) => {
          return (
            <button
              onClick={() => handleOnClick(id)}
              key={"gameMode" + id}
              className="text-gray-200 block rounded-lg text-center font-medium px-6 py-3 bg-gray-900 hover:bg-black hover:text-white m-3"
            >
              New post of {name}
            </button>
          );
        })}
      </div>
      <div key='Posts in detail'>
        {lastPosts?.map(({ id, createdAt, GameMode, text, User }) => {
        if (User && GameMode) {
          return (
          <div key={id} className="items-center justify-center w-[300px] h-[110px] mx-auto my-[5rem] bg-gray-300 rounded-lg p-3 ml-[10rem]"
        style={{
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.25)",
        }}>
        <h1 className="text-black font-bold">{text}</h1>
        <h1 className="text-black font-bold">Game mode: {GameMode.name}</h1>

        <p className="text-black font-bold">Posted by:</p>
        <NavLink to={`/user/${User.id}`}>
          <p className="text-black font-bold">{User.name}</p>
        </NavLink>
        
            <div style={{display:'flex', marginLeft:'33%'}}>
              {/* {liked  === true ? (<HiHeart onClick={handleLike} style={{cursor:'pointer', color:'crimson'}} />) : ( <HiHeart onClick={handleLike} style={{cursor:'pointer'}} />)}            */}

            <p style={{marginLeft:'1em'}}>Created: {createdAt.slice(0, 10).split('-').reverse().join('-')}</p>

            </div>
      </div>
    )
  } else {
    return null; // O puedes mostrar un mensaje de error
  }
})}
      </div>
    </div>
  );
};

export default GameDetail;
