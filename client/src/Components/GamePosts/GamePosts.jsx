import React, { useState } from "react";

import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { useSelector } from "react-redux";
import GamesBar from "../GamesBar/GamesBar";

const GamePosts = () => {
  const location = useLocation();
  const { gameId, gameModeId } = queryString.parse(location.search);
  const stateUser = useSelector((state) => state.user);

  const [userId, setUserId] = useState(stateUser.id);
  const [text, setText] = useState("");
  const [gameid, setGameid] = useState(gameId);
  const [gamemodeid, setGamemodeid] = useState(gameModeId);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text, userId, gameid, gamemodeid }),
      });

      if (response.ok) {
        // El post se creó exitosamente, puedes realizar alguna acción aquí si es necesario
        console.log("El post se creó exitosamente");
      } else {
        // Hubo un error al crear el post, puedes manejarlo de acuerdo a tus necesidades
        console.error("Error al crear el post");
      }
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
    }
  };

  return (
    <div style={{display:'flex', flexDirection:'row'}}>
      <GamesBar/>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder="Ingrese el texto del post"
        />
        <button type="submit">Crear Post</button>
      </form>
    </div>
  );
};

export default GamePosts;
