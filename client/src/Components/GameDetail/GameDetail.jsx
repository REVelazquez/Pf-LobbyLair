import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getGameById } from "../../Redux/actions";
import GamesBar from "../GamesBar/GamesBar";

const GameDetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { detail } = useParams();

  useEffect(() => {
    dispatch(getGameById(detail));
  }, [detail]);

  let game = useSelector((state) => state.game);

  const gameModes = game.GameModes;

  const handleOnClick = (id) => {
    let gameId = detail;
    let gameModeId = id;
    navigate(`/post?gameId=${gameId}&gameModeId=${gameModeId}`);
  };

  return (
    <div className="flex">
      <div className="ml-auto">
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
    </div>
  );
};

export default GameDetail;
