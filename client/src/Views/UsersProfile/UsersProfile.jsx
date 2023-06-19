import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { Navigate, useParams } from "react-router-dom"
import { getAllUsers } from "../../Redux/actions"
import { useSelector } from "react-redux"

const UsersProfile = ()=>{
    const {id}= useParams()
    const dispatch=useDispatch()
    const otherUser = useSelector(state=>state.otherUser)
    const userDetail = otherUser.find(user=>user.id===Number(id))
    const user = useSelector(state=>state.user)
    if (Number(id) === user.id) {
        Navigate(`/profile/${id}`)
    }
    return (   
        <div>
          <div className="container mx-auto mt-8">
            <div className="flex ml-[15rem] my-[5rem] bg-gray-300 rounded-lg p-3 mt-[5rem]" style={{
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

export default UsersProfile