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
    <div className="flex">
      <div className="mt-auto">
        <GamesBar />
      </div>
      
    </div>
  );
};

 


export default Home;
