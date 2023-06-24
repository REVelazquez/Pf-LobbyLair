import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteGame, getAllGames } from "../../Redux/actions";
import Draggable from "react-draggable";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const DeleteGame = () => {
  const dispatch = useDispatch();
  const allGames = useSelector((state) => state.games);

  useEffect(() => {
    dispatch(getAllGames());
  }, [dispatch]);

  const handleButton = (game) => {
    const gameId = game.id;
    dispatch(deleteGame(gameId))
      .then(() => {
        toast.success(`${game.name} has been deleted`);
        dispatch(getAllGames());
      })
      .catch((error) => {
        toast.error("An error occurred while deleting the game");
        console.error(error);
      });
  };

  const handleDrag = (gameId) => (e, { x, y }) => {
    console.log(gameId, x, y);
  };

  return (
    <>
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {allGames.map((game) => (
          <Draggable key={game.id.toString()} onStop={handleDrag(game.id)}>
            <div className="bg-gray-300 rounded p-4 shadow-3xl border-l-black">
              <label htmlFor={`game-name-${game.id}`} className="block font-semibold">
                {game.name}
              </label>
              <button onClick={() => handleButton(game)} className="mt-2 text-red-700">
                Delete
              </button>
            </div>
          </Draggable>
        ))}
      </div>
      <ToastContainer />
    </>
  );
};

export default DeleteGame;
