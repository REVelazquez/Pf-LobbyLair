import React from "react";

import "./Home.css"; 
import { useNavigate } from 'react-router-dom';
import GamesBar from "../../Components/GamesBar/GamesBar";


const Home = () => {
    const navigate = useNavigate();
    const handleJoinChat = () => {
       navigate('/chat');
      };
    
  return (
    <>
    <GamesBar/>
    <div className="home-container">
      <main className="content">
  
      </main>
      <button className="join-button" onClick={handleJoinChat}>Start Now</button>
    
    </div>
    

    </>
  );
};



export default Home;
