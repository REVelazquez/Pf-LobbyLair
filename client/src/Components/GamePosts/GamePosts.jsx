import React, { useState } from "react";
import GamesBar from "../GamesBar/GamesBar";
import "./GamePosts.module.css";

const GamePosts = () => {
  const [postContent, setPostContent] = useState("");
  const [posts, setPosts] = useState([]);
  const [selectedGame, setSelectedGame] = useState(null);

  const handlePostContentChange = (event) => {
    setPostContent(event.target.value);
  };

  const handlePostSubmit = (event) => {
    event.preventDefault();
    if (selectedGame) {
      const newPost = {
        id: Math.random().toString(),
        content: postContent,
        gameId: selectedGame,
      };
      setPosts((prevPosts) => [...prevPosts, newPost]);
      setPostContent("");
    }
  };

  return (
    <div className="forum-container">
      <div className="grid grid-cols-2 gap-8 mt-4">
      <div>
          <GamesBar onSelectGame={setSelectedGame} />
        </div>
        <div>
          <div className="mt-8">
            <form onSubmit={handlePostSubmit} className="flex">
              <textarea
                value={postContent}
                onChange={handlePostContentChange}
                placeholder="Escribe tu post..."
                className="border border-gray-300 rounded-lg px-4 py-2 mr-2 w-full"
              />
              <button type="submit" className="bg-gray-800 text-white font-bold py-2 px-3 rounded-[2rem]">
                Post
              </button>
            </form>
          </div>
          <div className="mt-8">
            {posts
              .filter((post) => post.gameId === selectedGame)
              .map((post) => (
                <div key={post.id} className="mb-2">
                  <div className="flex-shrink-0">
                    <img
                      src="profile-pic.jpg"
                      alt="Profile"
                      className="w-10 h-10 rounded-full"
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-800 font-bold">Username</p>
                    <div className="bg-white rounded-lg p-2 shadow-md">{post.content}</div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePosts;
