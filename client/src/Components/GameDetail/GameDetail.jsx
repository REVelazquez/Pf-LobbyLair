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
    dispatch(getPostsWithPagination(detail));
  }, [detail]);

  let game = useSelector((state) => state.game);
  let gamePosts = useSelector((state) => state.pagePosts);

  let lastPosts = gamePosts.posts;
  const gameModes = game.GameModes;

  const handleOnClick = (id) => {
    let gameId = detail;
    let gameModeId = id;
    navigate(`/post?gameId=${gameId}&gameModeId=${gameModeId}`);
  };

  return (
    <div className="flex ">
        <div></div>
      <div className="flex ml-[5rem] my-[1rem]">
        <GamesBar className="sticky" />
      </div>
      <div className="flex justify-start">
      <div className="flex flex-col items-center justify-center w-[300px] h-[600px] my-[8rem] bg-gray-300 rounded-lg p-3 mt-[6rem] mx-[5rem] shadow-lg transform rotate-x-2 rotate-y-2 perspective-lg" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)' }}>

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
          className="text-gray-200 block rounded-lg text-center font-medium px-6 py-3 bg-gray-900 hover:bg-black hover:text-white m-3 transition-colors duration-300 ease-in-out"
        >
          New post of {name}
        </button>
      );
    })}
  </div>
</div>

      <div className= "w-[56%]">

<div className= "mt-[3rem]"> 
      <div key="Posts in detail">
        {lastPosts?.map(({ id, createdAt, GameMode, text, User }) => {
          if (User && GameMode) {
            return (
              <div
                key={id}
                className=" items-start   my-[1rem]  border-2 border-crimsonrounded-lg shadow-md  w-[50rem] mx-auto mt-  border-crimson p-6 flex justify-between mb-[1rem]"
              >
               <div className=" bg-gray-300  w-[30%] flex flex-col justify-center items-center shadow-md">
               <img
    src="https://source.unsplash.com/120x120/?person"
    alt=""
    className="rounded-[1rem] w-[5.9rem] h-full cursor-pointer p-3"
  />
                  <h1 className="text-sm font-bold text-black">
                    <p className="text-sm text-black"> Game mode: {GameMode.name}</p>
                  </h1>

                  <p className="text-black font-bold text-sm">Posted by:</p>
                  <NavLink to={`/user/${User.id}`}>
                    <p className="text-black  text-sm">{User.name}</p>
                  </NavLink>

                  <div className="flex items-center mt-2">
                    <p className="text-sm font-bold text-black mb-3 ">
                      Created: {createdAt.slice(0, 10).split("-").reverse().join("-")}
                    </p>
                  </div>
                </div>
                <div className="w-[68%] h-full ">
                <h1 className="text-l  text-black mt-3 p-4 flex flex-col items-center text-left">{text}</h1>
                </div>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
    </div>
    </div>
  );
};

export default GameDetail;
