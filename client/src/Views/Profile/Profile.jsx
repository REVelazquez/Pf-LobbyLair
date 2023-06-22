import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import { getUserById } from "../../Redux/actions";
import Default from '../../Multimedia/Default.webp'


const Profile = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const userDetail = useSelector((state) => state.user);
  console.log(userDetail.image);

  useEffect(() => {
    dispatch(getUserById(id));
  }, []);

  const pathname = location.pathname;
  const id = pathname.split("/").filter((str) => !isNaN(parseInt(str)));

  if (userDetail.id === +id) {
    return (
      <div className="m-10">
      <div className="bg-gray-300 rounded-lg min-h-[20rem]" style={{ boxShadow: "0 2px 10px rgba(0, 0, 0, 0.25)" }}>
        <div className="flex flex-col sm:flex-row items-center">
          {userDetail.isPremium && <img src="../../Multimedia/Dragona premium"/>}
          <div className="flex flex-col space-y-2 w-full">
            <div className="my-10">
              <h3 className="text-4xl font-bold text-left m-2 p-3 truncate border-b border-black w-2/2">
                {userDetail.name}
              </h3>
            </div>
            <div className="flex flex-col sm:flex-row sm:space-x-2">
              <div className="m-4 space-x-2 pl-10">
                <h1 className="text-black font-bold truncate">E-mail:</h1>
                <h1 className="text-black truncate">{userDetail.email}</h1>
              </div>
              <div className="m-4 space-x-2 pl-10">
                <h1 className="text-black font-bold truncate">Member since:</h1>
                <h1 className="text-black truncate">
                  {userDetail.createdAt.slice(0, 10).split("-").reverse().join("-")}
                </h1>
              </div>
              <div className="m-4 space-x-2 pl-10">
                  {userDetail.perfilUrl && [<h1 className="text-black font-bold truncate">Profile Url</h1>, <p className="text-black truncate">{userDetail.perfilUrl}</p>]}
              </div>
          </div>
          <div>

              <div className="m-4 space-x-2 pl-10">
                  {userDetail.description && [<h1 className="text-black font-bold truncate">Description:</h1>, <p className="text-black truncate">{userDetail.description}</p>]}
            </div>
              <div>
                {userDetail.premium && <img src="../../Multimedia/Dragona premium"/>}
              </div>
          </div>
        </div>
        <div className="flex justify-center mt-4 sm:ml-[5rem]">
          <NavLink
            to={`/profile/${id}/update`}
            className="bg-black text-white border-none rounded-[5rem] p-3 text-l font-bold cursor-pointer"
          >
            Editar
          </NavLink>
        </div>
      </div>
    </div>
    </div>
    );
  }
};

export default Profile;
