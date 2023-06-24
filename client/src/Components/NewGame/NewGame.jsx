import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGenres, getGameModes, postGames } from "../../Redux/actions";

const NewGame = ({ handleOnNewGame }) => {
  const dispatch = useDispatch();
  let z = 1;
  let x = 1;

  const [genres, setGenres] = useState([]);
  const [gameModes, setGameModes] = useState([]);
  const [error, setError] = useState({
    name: "",
  });

  const [data, setData] = useState({
    name: "",
    thumbnail: "",
    genres: [],
    gameModes: [],
  });

  useEffect(() => {
    dispatch(getGenres());
    dispatch(getGameModes());
  }, []);

  const allGenres = useSelector((state) => state.genre);
  const allGameModes = useSelector((state) => state.gameMode);

  const handleOnChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleGameModesChanges = (event) => {
    if (event.target.checked) {
      setGameModes([...gameModes, event.target.value]);
      setData({ ...data, gameModes: [...gameModes, event.target.value] });
    } else {
      const updatedGameModes = gameModes.filter((g) => g !== gameModes);
      setGameModes(updatedGameModes);
      setData({ ...data, gameModes: updatedGameModes });
    }
  };

  const handleGenresChange = (event) => {
    if (event.target.checked) {
      setGenres([...genres, event.target.value]);
      setData({ ...data, genres: [...genres, event.target.value] });
    } else {
      const updatedGenres = gameModes.filter((g) => g !== genres);
      setGameModes(updatedGenres);
      setData({ ...data, genre: updatedGenres });
    }
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    dispatch(postGames(data));
    setData({
      name: "",
      thumbnail: "",
      gameModes: [],
      genres: [],
    });
    handleOnNewGame();
  };

  return (
    <form key="New Game Form" onSubmit={handleOnSubmit}>
      <label htmlFor="Name">Game Name</label>
      <input
        type="text"
        placeholder="Introduce a game name"
        name="name"
        className="ml-8"
        value={data.name}
        onChange={handleOnChange}
      />
      <hr />
      <label htmlFor="thumbnail">Thumbnail</label>
      <input
        type="text"
        placeholder="Introduce an Url"
        name="thumbnail"
        value={data.thumbnail}
        onChange={handleOnChange}
      />
      <hr />
      <label htmlFor="">Game modes</label>
      <div className="flex flex-row place-content-center">
        {allGameModes.map((gnr) => (
          <div>
            <ul>
              <li>
                <input
                  onChange={handleGameModesChanges}
                  type="checkbox"
                  value={gnr.name}
                  key={"a" + z++}
                  name="name"
                />
                <label htmlFor={"a" + z++}>{gnr.name}</label>
              </li>
            </ul>
          </div>
        ))}
      </div>
      <hr />

      <label htmlFor="">Genres</label>
      <div style={{ display: "grid", gridTemplateColumns: "Repeat(6, 1fr)" }}>
        {allGenres.map((gnr) => (
          <div>
            <ul>
              <li>
                <input
                  type="checkbox"
                  onChange={handleGenresChange}
                  value={gnr.name}
                  key={"a" + x++}
                />
                <label htmlFor={"a" + x++}>{gnr.name}</label>
              </li>
            </ul>
          </div>
        ))}
      </div>

      <hr />
      <button type="submit">New Game</button>
    </form>
  );
};

export default NewGame;
