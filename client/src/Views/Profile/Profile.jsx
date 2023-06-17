import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const userDetail = useSelector(state=>state.user)

  return (
    <div>
      <div className="container mx-auto mt-8">
        <div className="flex flex-col items-start">
          <div className="flex items-center mb-2">
            <div className="rounded-full w-50 h-50 overflow-hidden">
              <img
                src="https://source.unsplash.com/120x120/?person"
                alt=""
                className="rounded-full w-full h-full cursor-pointer"
              />
            </div>
          </div>
          <button style={{ color: "white", fontSize: "0.8rem", fontWeight: "300", textDecoration: "none", hover: "gray", backgroundColor: "#1f2937", padding: "0.1rem" }}>
            Editar
          </button>
        <div className="ml-6">
          <div className="mb-1" >
            <h3 className="text-6xl font-bold text-gray-800 text-left mt-2">{userDetail.name}</h3>
          </div>
          <div className="mb-1">
            <h1 className="text-1xl text-gray-600 text-left">@{userDetail.email}</h1>
          </div>
          <div className="mb-1">
            <h1 className="text-1xl text-gray-600 text-left">Fecha de creación: {userDetail.createdAt}</h1>
          </div>
        </div>
        <div className="my-4 border-t border-gray-400"></div>
        <div className=" text-rights">
          Aquí supongo que colocaremos otros componentes
        </div>
      </div>
      <div className="my-4 border-t border-gray-400"> Posiblemente agregaremos post aca o alguna otra información</div>
    </div>
    </div>
  );
   
};


export default Profile;
