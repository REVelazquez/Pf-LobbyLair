import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

const SearchBar = () => {
  const searchRef = useRef(null); // Referencia al input de búsqueda
  const [searchName, setSearchName] = useState({
    name: "",
  });
  const [game, setGame] = useState([]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      // Comprobar si se hizo clic fuera del input de búsqueda
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchName({ name: "" });
        setGame([]);
      }
    };

    window.addEventListener("click", handleOutsideClick);
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleChange = async (event) => {
    setSearchName({ name: event.target.value });
    const response = await axios.get(
      `http://localhost:3001/games/page?name=${event.target.value}` 
    );
    setGame(response.data.games);
  };

  return (
    <div className="flex relative">
      <div className="flex gap-2">
        <input
          ref={searchRef} // Agrega la referencia al input de búsqueda
          placeholder="Search game..."
          type="search"
          value={searchName.name}
          onChange={handleChange}
          className="rounded text-center h-[30px] placeholder-center font-semibold text-black focus:outline-none"
        />
        <button className="text-white text-lg font-semibold no-underline hover:text-gray-500">
          <HiOutlineMagnifyingGlass
          size={30}/>
        </button>
      </div>
      <div className="absolute w-full z-50 top-2 bg-gray-200 bg-opacity-6 rounded-lg grid grid-cols-1 gap-x-1">
        {searchName.name.length !== 0 && (
          <div className="absolute  w-full top-9 shadow-lg bg-gray-50 bg-opacity-6 rounded-lg grid grid-cols-1 gap-x-1">
            {game.length !== 0 ? (
              game.map((match) => (
                <NavLink
                  key={match.id}
                  to={`/games/${match.id}`}
                  className=" border-b border-gray-300 bg-gray-200 text-black italic font-bold text-sm p-3 hover:bg-gray-300 w-full hover:text-black text-center"
                >
                  {match.name}
                </NavLink>
              ))
            ) : (
              <button
                className="rounded-lg bg-gray-200 text-black italic font-bold text-sm p-3 cursor-default"
                style={{
                  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.25)",
                }}
              >
                No results
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
