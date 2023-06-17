import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const userDetail = useSelector(state=>state.user)

  console.log(userDetail)

  return (
    <div className="container mx-auto mt-8">
      <div className="flex flex-col items-start">
        <div className="flex items-center mb-2">
          <div className="rounded-full w-60 h-60 overflow-hidden">
            <img
              src="https://source.unsplash.com/120x120/?person"
              alt=""
              className="rounded-full w-full h-full cursor-pointer"
            />
          </div>
        </div>
        <button style={{ color: "white", fontSize: "1rem", fontWeight: "400", textDecoration: "none", hover: "gray", backgroundColor: "#1f2937", padding: "0.1rem" }}>
            Editar
          </button>
        <div className="ml-6">
          <div className="mb-1" >
            <h3 className="text-6xl font-bold text-gray-800 text-left mt-2">{userDetail[0].name}</h3>
          </div>
          <div className="mb-1">
            <h1 className="text-1xl text-gray-600 text-left">@{userDetail[0].email}</h1>
          </div>
          <div className="mb-1">
            <h1 className="text-1xl text-gray-600 text-left">Fecha de creación: {userDetail[0].createdAt}</h1>
          </div>
        </div>
      </div>
      <div className="flexbox ">
       Aquí supongo que colocaremos otros componentes
      </div>
    </div>
  );
  
  
};

export default Profile;
