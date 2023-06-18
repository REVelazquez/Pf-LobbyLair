import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import GamesBar from "../../Components/GamesBar/GamesBar";
import { getPostsByUserId, getUserById } from "../../Redux/actions";

const Profile = () => {
  const location=useLocation()
  const dispatch=useDispatch()
  const userDetail = useSelector(state=>state.user)
  
  const pathname = location.pathname;
  let id = pathname.split('/').filter(str => !isNaN(parseInt(str)));
  id=parseInt(id)

  useEffect(()=>{
    dispatch(getUserById(id))
  }, [])

  const otherUser=useSelector(state=>state.otherUser)
  console.log(otherUser);

  if(userDetail.id === id){
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
            <div>
              <div className="mb-1">
                <h3 className="text-4xl font-bold text-left mt-2">{userDetail.name}</h3>
              </div>
              <div className="mb-1">
                <h1 className="text-1xl text-left">E-mail:{userDetail.email}</h1>
              </div>
            <div className="mb-1">
              <h1 className="text-1xl text-gray-600 text-left">Fecha de creación: {userDetail.createdAt.slice(0,10).split('-').reverse().join('-')}</h1>
            </div>
              <div className="mb-1">
                <h1 className="text-1xl text-left">
                Profile Url:{userDetail.perfilUrl !== '' ? userDetail.perfilUrl: 'You can put a steam profile url or similar'}
              </h1>
              </div>
            </div>
          </div>
          <div className="my-4 border-t border-gray-400"></div>
          <div className=" text-rights">
            Aquí supongo que colocaremos otros componentes
          </div>
        </div>
        <div className="my-4 border-t border-gray-400"> Posiblemente agregaremos post aca o alguna otra información</div>
      </div>
    );
     
  }
  
  

    return (
      <div style={{display:'flex', flexDirection:'row'}}>
      <GamesBar/>
      <div>
      <div style={{marginLeft:'2em'}} className="container mx-auto mt-8">
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
          <div>
            <div className="mb-1">
              <h3 className="text-4xl font-bold text-left mt-2">{otherUser.name}</h3>
            </div>
            <div className="mb-1">
              <h1 className="text-1xl text-left">E-mail:{otherUser.email}</h1>
            </div>
            <div>
            <button key='Send message btn'>Contact!</button> <button key='Add friend btn'>Add Friend</button>
            </div>
          <div className="mb-1">
            <h1 className="text-1xl text-gray-600 text-left">Fecha de creación: {otherUser.createdAt.slice(0,10).split('-').reverse().join('-')}</h1>
          </div>
            <div className="mb-1">
              <h1 className="text-1xl text-left">
              {otherUser.perfilUrl !== '' && otherUser.perfilUrl}
            </h1>
            </div>
          </div>
        </div>
        <div className="my-4 border-t border-gray-400"></div>
        <div style={{marginLeft:'3em'}} className=" text-rights">
          Favorite games:
        </div>
      </div>
      <div className="my-4 border-t border-gray-400"> 
      The posts made by this user:
      </div>
      </div>

    </div>
  );
  
}

  
  

 
export default Profile;
