import React from "react";

import "./Home.css"; 
import Games from "../../Components/Games/Games";
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const navigate = useNavigate();
    const handleJoinChat = () => {
       navigate('/chat');
      };
    
  return (
    <>
    <div className="home-container">
      <main className="content">
        <h1>Welcome to LobbyLair Game Community</h1>
        <p>
          Join us and share your passion for video games! Here you can find other players with similar interests, discuss your favorite games, get tips, and participate in exciting events. Explore our community and have fun!
        </p>
       
      </main>
      <button className="join-button" onClick={handleJoinChat}>Start Now</button>
    
    </div>
    <Games />

    </>
  );
};



export default Home;
