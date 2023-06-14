import { useState } from "react";
import { useDispatch } from 'react-redux';
import { getGameByName } from '../../Redux/actions/';

const SearchBar = () => {
    const dispatch = useDispatch();

    const [searchName, setSearchName] = useState({
     name: '',
    });
 
    const handleChange = (event) =>{
       setSearchName({name: event.target.value})
    }
    
   const handleSubmit = () => {
    const name = searchName.name
    if(name.length > 0){
        dispatch(getGameByName(name));
    }
   }
   return (
    <div>
        <input type='search' value={searchName.name} onChange={handleChange} />
        <button onChange={handleSubmit}>Search Game</button>
    </div>
   )
}

export default SearchBar;