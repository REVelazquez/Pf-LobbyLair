import React from "react";

import Style from "./Home.css"; 
import { useNavigate } from 'react-router-dom';
import GamesBar from "../../Components/GamesBar/GamesBar";


const Home = () => {
    const navigate = useNavigate();
    const handleJoinChat = () => {
       navigate('/chat');
      };
    
  return (
    <div className={Style.container}>
    <GamesBar/>
    <div>
        <h1>Posteos irian aqui</h1>
        <h2>Saque el chat, pero iria en la derecha</h2>
    </div>   

    </div>
  );
};



export default Home;
