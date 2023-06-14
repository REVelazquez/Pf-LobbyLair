import React from "react";
import NavBar from '../../Components/NavBar/NavBar';
import SearchBar from '../../Components/SearchBar/Searchbar';


const Home = () => {
    return (
        <>
            <div>
               <ul>
                <li><SearchBar/></li>
                <li><NavBar/></li>
               </ul>
            </div>
        </>
    )
}

export default Home;