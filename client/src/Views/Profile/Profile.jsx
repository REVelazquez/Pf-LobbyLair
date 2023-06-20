import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import GamesBar from "../../Components/GamesBar/GamesBar";
import { getPostsByUserId, getUserById, updateUser } from "../../Redux/actions";

const Profile = () => {
  const location=useLocation()
  const dispatch=useDispatch()
  const userDetail = useSelector(state=>state.user)
  
  useEffect(() => {
    dispatch(getUserById(id));
  }, []);

  const pathname = location.pathname;
  const id = pathname.split('/').filter(str => !isNaN(parseInt(str)));

  if(userDetail.id == id){
    return (
<div className="m-10">
  <div
    className="bg-gray-300 rounded-lg h-[20rem]"
    style={{
      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.25)",
    }}
  >
    <div className="flex items-center">
      <img
        src="https://source.unsplash.com/120x120/?person"
        alt=""
        className="w-1/5 rounded-[25%] cursor-pointer p-5"
      />
      <div className="flex flex-col space-y-2 w-full">
        <div className="mb-1 my-10">
          <h3 className="text-4xl font-bold text-left m-2 p-3 truncate border-b border-black w-2/2">
            {userDetail.name}
          </h3>
        </div>
        <div className="inline-flex">
          <div className="m-4 space-x-2 pl-10">
            <h1 className="text-black font-bold truncate">E-mail:</h1>
            <h1 className="text-black truncate">{userDetail.email}</h1>
          </div>
          <div className="m-4 space-x-2 pl-10">
            <h1 className="text-black font-bold truncate">Fecha de creación:</h1>
            <h1 className="text-black truncate">
              {userDetail.createdAt.slice(0, 10).split('-').reverse().join('-')}
            </h1>
          </div>
          <div className="m-4 space-x-2 pl-10">
            <h1 className="text-black font-bold truncate">Profile Url:</h1>
            <h1 className="text-black truncate">
              {userDetail.perfilUrl !== ''
                ? userDetail.perfilUrl
                : 'You can put a steam profile url or similar'}
            </h1>
          </div>
        </div>
      </div>
    </div>
    <div className="absolute bottom-15 right-10 mt-5 mr-10">
      <NavLink
        to={`/profile/${id}/update`}
        className="bg-black text-white border-none rounded-[5rem] p-3 text-l font-bold cursor-pointer"
        style={{ zIndex: 10 }} // Agregamos el z-index al botón de edición
      >
        Editar
      </NavLink>
    </div>
  </div>
</div>
    );
  }
}
 
export default Profile;
