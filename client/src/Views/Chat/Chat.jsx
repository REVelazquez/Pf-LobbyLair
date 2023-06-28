import { PrettyChatWindow } from "react-chat-engine-pretty";
import axios from "axios";
import { useSelector } from "react-redux";

const ChatsPage = (props) => {
  const user = useSelector((state) => state.user);

  const res = axios.get(`http://localhost:3001/user/password/${user.id}`);
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
