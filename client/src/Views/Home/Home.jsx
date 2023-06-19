import React from "react";
import { useEffect } from "react";
import GamesBar from "../../Components/GamesBar/GamesBar";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllPosts,
  getAllUsers,
  orderPostByCreation,
} from "../../Redux/actions";
import { NavLink } from "react-router-dom";

const Home = () => {
  const dispatch=useDispatch()
  useEffect(() => {
    localStorage.setItem("isAuthenticated", true);
  }, []);

  useEffect(() => {
    dispatch(getAllPosts());
    dispatch(getAllUsers());
  }, []);

  const posts = useSelector((state) => state.posts);
  const prueba = posts;

  const handlerOrder = (event) => {
    dispatch(orderPostByCreation(event.target.value));
  };

  const posts = useSelector(state => state.posts);
  const handlerOrder= (event)=>{
    dispatch(orderPostByCreation(event.target.value))
  }
      
      return (
        <div className="flex">
          <div className="flex ml-[2rem] my-[5rem]">
            <GamesBar />
          </div>
        <div className="post-container mx-auto mt-[6rem] overflow-y-auto">
          <h1 className="text-l font-bold mb-4">Order:</h1>
          <div className="relative inline-flex">
            <select
              name="Creation Order"
              key="Order"
              onChange={handlerOrder}
              className="appearance-none bg-gray-900 border text-white border-gray-300 rounded-md px-4 py-2 pr-8 leading-tight focus:outline-none focus:border-blue-500"
            >
              <option value="A" className="bg-black text-white">
                Old first
              </option>
              <option value="D">New first</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 12L6 8h8l-4 4z" />
              </svg>
            </div>
          </div>
          {posts.map((post) => {
            if (post && post.id) {
              return (
                <div className="flex">
          <div className="flex ml-[2rem] my-[5rem]">
            <GamesBar />
          </div>
        <div className="post-container mx-auto mt-[6rem] overflow-y-auto">
          <h1 className="text-l font-bold mb-4">Order:</h1>
          <div className="relative inline-flex">
            <select
              name="Creation Order"
              key="Order"
              onChange={handlerOrder}
              className="appearance-none bg-gray-900 border text-white border-gray-300 rounded-md px-4 py-2 pr-8 leading-tight focus:outline-none focus:border-blue-500"
            >
              <option value="A" className="bg-black text-white">
                Old first
              </option>
              <option value="D">New first</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 12L6 8h8l-4 4z" />
              </svg>
            </div>
          </div>
          {posts.map((post) => {
            if (post && post.id) {
              return (
                <div
                  key={post.id}
                  className="w-[50rem] mx-auto mt-4 border-2 border-crimson p-4 flex flex-col justify-center items-center"
                >
                  <h1>{post.text}</h1>
                  <div className="flex mt-2">
                    <h1 className="text-black font-bold text-sm">
                      Game mode: {post.GameMode.name}
                    </h1>
                  </div>
                  <div className="flex mt-2">
                    <h1 className="text-black font-bold text-sm">
                      Game: {post.Game.name}
                    </h1>
                  </div>
                  <div className="flex mt-2">
                    <p className="mr-2 text-black font-bold text-sm">Posted by:</p>
                    <NavLink to={`/user/${post.User.id}`}>
                      <p>{post.User.name}</p>
                    </NavLink>
                  </div>
                  <div className="flex mt-2">
                    {/* {liked  === true ? (<HiHeart onClick={handleLike} style={{cursor:'pointer', color:'crimson'}} />) : ( <HiHeart onClick={handleLike} style={{cursor:'pointer'}} />)}            */}
                    <p className="text-sm text-black font-bold">
                      Created: {post.createdAt.slice(0, 10).split("-").reverse().join("-")}
                    </p>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  );
};

export default Home;
