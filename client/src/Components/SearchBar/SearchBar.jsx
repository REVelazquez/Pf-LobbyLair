import { useState, useEffect, useRef } from "react";
import axios from 'axios';
import glass from '../../magnifying-glass-search.png';
import { NavLink } from 'react-router-dom';

const SearchBar = () => {
  const searchRef = useRef(null); // Referencia al input de búsqueda
  const [searchName, setSearchName] = useState({
    name: '',
  });
  const [game, setGame] = useState([])

  useEffect(() => {
    const handleOutsideClick = (event) => {
      // Comprobar si se hizo clic fuera del input de búsqueda
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchName({ name: '' });
        setGame([]);
      }
    }

    window.addEventListener('click', handleOutsideClick);
    return () => {
      window.removeEventListener('click', handleOutsideClick);
    }
  }, [])

  const handleChange = async(event) => {
    setSearchName({ name: event.target.value })
    const response = await axios.get(`http://localhost:3001/games/page?name=${event.target.value}`);
    setGame(response.data.games)
    console.log(response.data.games)
  }

  return (
    <div className="flex relative">
      <input
        ref={searchRef} // Agrega la referencia al input de búsqueda
        placeholder="Search game..."
        type="search"
        value={searchName.name}
        onChange={handleChange}
        className="rounded-full mr-2 text-center placeholder-center font-semibold"
      />
      <button className="text-white text-lg font-semibold no-underline hover:text-gray-500">
        <img src={glass} alt=""/>
      </button>
      {searchName.name.length !== 0 && (
        <div className="absolute w-full top-8 right-14.2 bg-gray-50 bg-opacity-6 rounded-lg grid grid-cols-1 gap-x-1">
          {game.length !== 0 ? (
            game.map((match) => (
              <NavLink key={match.id} to={`/games/${match.id}`}>
                <button className="rounded-lg text-black italic font-bold text-sm pr-4 pt-4 hover:bg-gray-200 w-full hover:text-black text-center">
                  {match.name}
                </button>
              </NavLink>
            ))
          ) : (
            <button className="rounded-lg text-black italic font-bold text-sm pr-4 pt-4 hover:bg-gray-200 w-full hover:text-black text-center">
              No results
            </button>
          )}
        </div>
      )}
    </div>
  )
}

export default SearchBar;