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
    console.log(id);
    dispatch(getUserById(id));
    dispatch(getPostsByUserId(id));
  }, []);
  
  const pathname = location.pathname;
  const id = pathname.split('/').filter(str => !isNaN(parseInt(str)));
  const otherUser=useSelector(state=>state.otherUser)

  if(userDetail.id == id){
    return (
      <div>
        <div className="container mx-auto mt-8">
          <div className="flex ml-[15rem] my-[5rem] bg-gray-300 rounded-lg p-3 mt-[5rem] ml-[10rem]" style={{
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.25)",
        }}>
            <div className="flex items-center mb-2">
              <div className="rounded-full w-50 h-50 overflow-hidden">
                <img
                  src="https://source.unsplash.com/120x120/?person"
                  alt=""
                  className="rounded-full w-full h-full cursor-pointer p-3"
                />
              </div>
            </div>
            <NavLink to={`/profile/${id}/update`} style={{ color: "white", fontSize: "0.8rem", fontWeight: "300", textDecoration: "none", hover: "gray", backgroundColor: "#1f2937", padding: "0.1rem" }}>
              Editar
            </NavLink>
            <div>
              <div className="mb-1 my-10">
                <h3 className="text-4xl font-bold text-left m-2 p-3 truncate">{userDetail.name}</h3>
              </div>
              <div className="mb-1">
                <h1 className="text-black font-bold truncate p-1"> E-mail: {userDetail.email} </h1>
              </div>
            <div className="mb-1">
              <h1 className="text-black font-bold truncate pl-1"> Fecha de creación: {userDetail.createdAt.slice(0,10).split('-').reverse().join('-')}</h1>
            </div>
              <div className="mb-1">
                <h1 className="text-black font-bold truncate p-3">
                Profile Url:{userDetail.perfilUrl !== '' ? userDetail.perfilUrl: 'You can put a steam profile url or similar'}
              </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="my-4 border-t border-gray-400"> </div>
      </div>
    );

  
}

  
  

 
export default Profile;
