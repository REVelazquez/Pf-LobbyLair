import React from "react";
import NavBar from '../../Components/NavBar/NavBar';
// import SearchBar from '../../Components/SearchBar/Searchbar';


const Home = () => {
    return (
            <div>
                <h1>Aquí va el Home, con la barra de navegacion invisible</h1>
               <ul>
                {/* <li><SearchBar/></li> */}
                <li><NavBar/></li>
               </ul>
            </div>
    )
}

export default Home;