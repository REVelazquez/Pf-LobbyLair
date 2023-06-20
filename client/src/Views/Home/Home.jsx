import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GamesBar from "../../Components/GamesBar/GamesBar";
import { useDispatch, useSelector } from "react-redux";
import { BiShareAlt } from "react-icons/bi";

import {
  getAllPosts,
  getAllUsers,
  orderPostByCreation,
} from "../../Redux/actions";
import { NavLink } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-[12rem]">
        <GamesBar className="sticky" />
      </div>

      <div className="post-container mx-auto mt-[4rem] overflow-y-auto">
        <div className="text-left">
          <div className="flex items-center mb-4">
            <h1 className="text-sm font-bold mr-2">Order:</h1>
            <div className="relative inline-flex">
              <select
                name="Creation Order"
                key="Order"
                onChange={handlerOrder}
                className="appearance-none bg-gray-900 border text-white border-gray-300 rounded-md px-4 py-2 pr-8 leading-tight focus:outline-none focus:border-blue-500 text-sm"
              >
                <path d="M10 12L6 8h8l-4 4z" />
              </select>
            </div>
          </div>
        </div>
        {prueba.map((post) => {
          if (post && post.id) {
            return (
              <div
                key={post.id}
                className="w-[80rem] mx-auto mt- border-2 border-crimson p-6 flex justify-between items-start mb-3"
              >
                <div className="bg-slate-100 w-[20%] flex flex-col justify-center items-center shadow-md">
                  <img
                    src="https://source.unsplash.com/120x120/?person"
                    alt=""
                    className="rounded-[1rem] w-[6.9rem] h-full cursor-pointer p-3"
                  />
                  <h1 className="text-black font-bold text-sm mt-3">
                    Game mode: {post.GameMode.name}
                  </h1>
                  <div className="flex mt-2">
                    <p className="mr-2 text-black font-bold text-sm">
                      Posted by:
                    </p>
                    <NavLink to={`/user/${post.User?.id}`}>
                      <p>{post.User?.name}</p>
                    </NavLink>
                  </div>
                  <div className="flex mt-2 ">
                    <p className="text-sm text-black font-bold mb-8 ">
                      Created:{" "}
                      {post.createdAt
                        .slice(0, 10)
                        .split("-")
                        .reverse()
                        .join("-")}
                    </p>
                  </div>
                </div>
                <div className=" w-[79%]">
                  <div className="flex justify-end">
                    <BiShareAlt className="text-yellow-500 text-2xl " />
                  </div>

                  <h1 className="w-[60rem] mt-3 p-4 flex flex-col items-center text-left">
                    {post.text}
                  </h1>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Home;
