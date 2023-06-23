import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  getGameById,
  getPostsWithPagination,
  getFavorite,
} from "../../Redux/actions";
import { motion } from "framer-motion";
import axios from "axios";

const GameDetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { detail } = useParams();
  const id = detail;
  const [isFav, setIsFav] = useState(false);
  const myFavorites = useSelector((state) => state.myFavorites);

  const handleFavorite = async () => {
    if (isFav) {
      setIsFav(false);
      const user = JSON.parse(localStorage.getItem("user"));
      const token = user.token;
      await axios.delete(
        `http://localhost:3001/favorite?gameId=${id}&token=${token}`
      );
    } else {
      setIsFav(true);
      const user = JSON.parse(localStorage.getItem("user"));
      const token = user.token;
      await axios.post("http://localhost:3001/favorite", {
        token,
        id,
      });
    }
  };

  useEffect(() => {
    if (myFavorites.some((fav) => fav.id === Number(id))) {
      setIsFav(true);
    } else setIsFav(false);
  }, [id]);

  useEffect(() => {
    dispatch(getGameById(id));
    dispatch(getPostsWithPagination(id));
    dispatch(getFavorite());
  }, [id]);

  let game = useSelector((state) => state.game);
  let gamePosts = useSelector((state) => state.pagePosts);

  let lastPosts = gamePosts.posts;
  const gameModes = game.GameModes;

  const handleOnClick = (id) => {
    let gameId = id;
    let gameModeId = id;
    navigate(`/post?gameId=${gameId}&gameModeId=${gameModeId}`);
  };

  return (
    <div className="">
      <div className="md:w-[50%] ml-0 md:ml-1 "></div>

      <div className="flex justify-center ">
        <div
          className="flex flex-col items-center justify-center w-[50%] h-[600px] bg-gray-200 rounded-lg p-3 mt-[4rem] mx-[5rem] shadow-lg transform rotate-x-2 rotate-y-2 perspective-lg"
          style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)" }}
        >
          <div className="bg-gray-500 w-[3rem]">
            {isFav ? (
              <button onClick={handleFavorite} className="text-red-500">
                ❤️
              </button>
            ) : (
              <button onClick={handleFavorite} className="text-gray-500">
                🤍
              </button>
            )}
          </div>
          <motion.div
            className="flex items-center justify-center flex-col w-[45%] h-[45%] bg-gray-800 rounded-xl m-2 hover:bg-gray-500"
            whileHover={{ scale: 1.1 }}
          >
            <img
              src={game.thumbnail}
              className="mx-auto w-[13rem] h-[13rem]"
              alt=""
            />
          </motion.div>
          <h1 className="text-center text-2xl font-bold mt-[1rem] p-6 text-black cursor-default">
            {game.name}
          </h1>

          {gameModes?.map(({ id, name }) => {
            return (
              <button
                onClick={() => handleOnClick(id)}
                key={"gameMode" + id}
                className="text-gray-200 block rounded-[5rem] text-center font-medium px-6 py-3 bg-gray-900 hover:bg-black hover:text-white m-3 transition-colors duration-300 ease-in-out"
              >
                New post of {name}
              </button>
            );
          })}
        </div>
      </div>

      <div className="w-1/3">
        <div className="mt-[3rem]">
          <div key="Posts in id">
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
                        className="rounded-[1rem] w-[5.9rem] h-full cursor-pointer p-3 "
                      />
                      <h1 className="text-sm font-bold text-black">
                        <p className="text-sm text-black">
                          Game mode: {GameMode.name}
                        </p>
                      </h1>

                      <p className="text-black font-bold text-sm">Posted by:</p>
                      <motion.Link
                        to={`/user/${User.id}`}
                        whileHover={{ scale: 1.1 }}
                      >
                        <p className="text-black  text-sm">{User.name}</p>
                      </motion.Link>

                      <div className="flex items-center mt-2">
                        <p className="text-sm font-bold text-black mb-3 ">
                          Created:{" "}
                          {createdAt
                            .slice(0, 10)
                            .split("-")
                            .reverse()
                            .join("-")}
                        </p>
                      </div>
                    </div>
                    <div className="w-[68%] h-full ">
                      <h1 className="text-l mt-3 p-4 flex flex-col items-center text-left">
                        {text}
                      </h1>
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
