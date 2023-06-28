<<<<<<< HEAD
import React from 'react'
import { PrettyChatWindow } from 'react-chat-engine-pretty';
const Chat = () => {
  return (
    <div style={{ height: '100vh' }}>
      <PrettyChatWindow
      projectId="f390f109-520d-4265-9316-21c8428c65e4"
      username="john_smith"
      secret="pass1234"
      style={{ height: '100vh' }}
    />
    </div>
  )
}

export default Chat
=======
import { PrettyChatWindow } from "react-chat-engine-pretty";
import axios from "axios";
import { useSelector } from "react-redux";

const ChatsPage = async (props) => {
  const user = useSelector((state) => state.user);

  const res = await axios.get(`http://localhost:3001/user/password/${user.id}`);
  const pass = res.data;

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <PrettyChatWindow
        projectId={process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID}
        username={user.name}
        secret={pass}
        style={{ height: "100%" }}
      />
    </div>
  );
};

export default ChatsPage;
>>>>>>> 8e73529745af6abdfe5e8fe48c0bac8a190f63d2
