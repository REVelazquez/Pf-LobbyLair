import { useState } from "react";
import axios from 'axios';
import glass from '../../magnifying-glass-search.png';

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
        <input placeholder="Search game..." type='search' value={searchName.name} onChange={handleChange}  className="rounded-full mr-2 text-center placeholder-center font-semibold"/>
        <button className="text-white text-lg font-semibold no-underline hover:text-gray-500"><img src={glass} alt=""/></button>
        {searchName.name.length !== 0 && (<div className="absolute w-full top-8 right-14.2 bg-white bg-opacity-6 rounded-lg grid grid-cols-1 gap-x-1">
        {game ? (
              game.map((match) => (
              <button className="text-black italic font-bold text-sm pr-4 pt-4 hover:bg-black hover:text-white text-center">
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