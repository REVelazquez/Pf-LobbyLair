import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BiShareAlt } from "react-icons/bi";
import { motion } from "framer-motion";

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
    <>

    <div className="flex md:flex-row w-full h-full">
      
<div className="w-[60%]">
<div class="post-container mx-auto  overflow-y-auto mt-[1rem] justify-start items-start  border-r-2 border-gray-200">
        <div className="">
          <div className=" items-center text">
            </div>
            <div className ="">
            <h1 className="text-sm font-bold mr-2">Order:</h1>
            
            <div className="relative inline-flex">
              <select
                name="Creation Order"
                key="Order"
                onChange={handlerOrder}
                className="appearance-none bg-gray-900 border text-white border-gray-300 rounded-md px-4 py-2 pr-8 leading-tight focus:outline-none focus:border-blue-500 text-sm"
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
          </div>
        </div>
        {prueba.map((post) => {
          if (post && post.id) {
            return (
              <div className=" ">
              <div
                key={post.id}
                className="w-[80%]  mx-auto mt-4 border-2 border-crimson p-5 flex justify-between items-start mb-3 ml-auto"
              >
                <div className="bg-slate-100  flex flex-col  items-center shadow-md">
                  <img
                    src="https://source.unsplash.com/120x120/?person"
                    alt=""
                    className="rounded-[1rem] w-[100%] h-full cursor-pointer p-3"
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
                    <p className="text-sm text-black font-bold mb-2 ">
                      Created:{" "}
                      {post.createdAt
                        .slice(0, 10)
                        .split("-")
                        .reverse()
                        .join("-")}
                    </p>
                  </div>
                </div>
                <div className=" w-[80%]">
                  <div className="flex justify-end">
                    <BiShareAlt className=" text-2xl " />
                  </div>

                  <h1 className=" w-[100%] mt-3 p-4 flex flex-col items-start text-left">
                    {post.text}
                  </h1>
                </div>
              </div>
              </div>
            );
          }
        })}
      </div>
    </div>
    <div className="w-[40%] flex-col items-center ">
        <motion.div
          drag
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
          className="bg-gray-800 p-9 w-[69%] h-[11rem] rounded-[3rem] shadow-xl justify-center items-center mt-6 mx-[5rem]"
        >
          <h1 className="text-white text-lg font-bold">Get verified</h1>
          <p className="text-white">Subscribe to unlock new features</p>
          <button className="bg-black text-white rounded-[5rem] px-4 py-2 mt-4">
            Subscribe
          </button>
        </motion.div>

        <motion.div
          drag
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
          className="bg-gray-800 p-9 w-[69%] h-[11rem] rounded-[3rem] shadow-xl items-center justify-center mt-6 mx-[5rem]"
        >
          <h1 className="text-white text-lg font-bold">Favorite Games</h1>
          {/* Aquí puedes agregar el contenido de los juegos favoritos */}
        </motion.div>
      </div>
    </div>
    </>
  );
};

export default Home;