import { useState } from "react";
import axios from 'axios';

const SearchBar = () => {

    const [searchName, setSearchName] = useState({
     name: '',
    });
    const [game, setGame] = useState([])

    const handleChange = async(event) =>{
       setSearchName({name: event.target.value})
        const response = await axios.get(`http://localhost:3001/games/page?name=${event.target.value}`);
        setGame(response.data.games)
        console.log(response.data.games)
    }
   return (
    <div className="flex relative">
        <input type='search' value={searchName.name} onChange={handleChange}  className="rounded-full mr-2 text-center placeholder-center font-semibold"/>
        <button className="text-white text-lg font-semibold no-underline hover:text-gray-500">Search Game</button>
        {searchName.name.length !== 0 && (<div className="absolute w-full top-8 right-14 bg-white bg-opacity-6 rounded-lg grid grid-cols-3 gap-x-1">
        {game ? (
              game.map((match) => (
              <button className="text-black italic font-bold text-sm pr-4 pt-4">
                {match.name}
              </button>
            ))
            ):(
            <button>
              No results
            </button>
            )}
            </div>)}
    </div>
   )
}

export default SearchBar;