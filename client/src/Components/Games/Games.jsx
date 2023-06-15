import React, { useState } from 'react';
import "./Games.css";
const Games = () => {
  
    const allGames = [
        {
          id: "csgo",
          name: "Counter-Strike: Global Offensive",
          gameMode: ["PvP", "Team PvP"],
          genres: ["FPS", "Competitive"],
          thumbnail: "https://firebasestorage.googleapis.com/v0/b/lobbylair-pf.appspot.com/o/CsGo.png?alt=media&token=9df0b6c6-de88-45a7-97ee-da025ce18d1b"
        },
        {
          id: "lol",
          name: "League of Legends",
          gameMode: ["PvP", "Team PvP"],
          genres: ["MOBA", "Competitive"],
          thumbnail: "https://firebasestorage.googleapis.com/v0/b/lobbylair-pf.appspot.com/o/LoL.png?alt=media&token=f7be6c10-5966-43cb-b63b-358469640e4f"
        },
        {
          id: "dota2",
          name: "Dota 2",
          gameMode: ["PvP", "Team PvP"],
          genres: ["MOBA","Competitive"],
          thumbnail: "https://firebasestorage.googleapis.com/v0/b/lobbylair-pf.appspot.com/o/Dota2.png?alt=media&token=f5fdbb60-9e2a-4c17-bdcf-996d423ca01f"
        },
        {
          id: "lostark",
          name: "Lost Ark",
          gameMode: ["PvP", "Co-op"],
          genres: ["MMORPG", "Action"],
          thumbnail: "https://firebasestorage.googleapis.com/v0/b/lobbylair-pf.appspot.com/o/Lostark.png?alt=media&token=62efb370-962d-4a96-88a7-284cfd7e1f85"
        },
        {
          id: "apexlegends",
          name: "Apex Legends",
          gameMode: ["PvP", "Co-op"],
          genres: ["FPS", "Battle Royale"],
          thumbnail: "https://firebasestorage.googleapis.com/v0/b/lobbylair-pf.appspot.com/o/apexLegends.png?alt=media&token=7c50a006-bde8-4601-916f-968063769e2d"
        },
        {
          id: "codwarfare2",
          name: "Call of Duty: Modern Warfare® II",
          gameMode: ["PvP", "Co-op"],
          genres: ["FPS", "Action"],
          thumbnail: "https://firebasestorage.googleapis.com/v0/b/lobbylair-pf.appspot.com/o/codMw2.png?alt=media&token=12f8d4b7-a6f4-4e31-9738-979f3044eea0"
        },
        {
          id: "fortnite",
          name: "Fortnite",
          gameMode: ["PvP", "Team PvP"],
          genres: ["FPS", "Battle Royale"],
          thumbnail: "https://firebasestorage.googleapis.com/v0/b/lobbylair-pf.appspot.com/o/Fortnite.png?alt=media&token=adda157a-9de1-4551-be49-25612ae3e452"
        },
        
  ];

  const [visibleGames, setVisibleGames] = useState(5); // Número de juegos visibles inicialmente

  const showMoreGames = () => {
    setVisibleGames(prevVisibleGames => prevVisibleGames + 5); // Incrementa el número de juegos visibles al hacer clic en el botón
  };

  return (
    <div>
         <div style={{ backgroundColor: 'grey' }}>
        <h1>Favorite Games of our players community </h1>
      <div className="game-container">
        {allGames.slice(0, visibleGames).map(game => (
          <img
            key={game.id}
            src={game.thumbnail}
            alt={game.name}
            className="rounded-image"
          />
        ))}
      </div>
      {visibleGames < allGames.length && (
        <button onClick={showMoreGames} className="show-more-button">
          Mostrar más
        </button>
      )}
    </div>
    </div>
  );
};

export default Games;
