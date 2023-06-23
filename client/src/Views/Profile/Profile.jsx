import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getUserById } from "../../Redux/actions";
import UpdateProfile from "../UpdateProfile/UpdateProfile";
import { FaCrown } from "react-icons/fa";
import Premium from "../../Multimedia/Dragona premium.jpeg";

const Profile = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const userDetail = useSelector((state) => state.user);
  const [editMode, setEditMode] = useState(false);
  const [showImage, setShowImage] = useState(true);
  const isAdmin = userDetail.isAdmin;
  const isPremium = userDetail.isPremium;

  useEffect(() => {
    const pathname = location.pathname;
    const id = pathname.split("/").filter((str) => !isNaN(parseInt(str)))[0];
    dispatch(getUserById(id));
  }, []);

  const handleEditClick = () => {
    setEditMode(true);
    setShowImage(false);
  };

  const handleEditClose = () => {
    setEditMode(false);
    setShowImage(true);
  };

  const renderProfile = () => {
    return (
      <div className="flex">
        <div className="w-3/4 pr-5">
          <div
            className="bg-gray-300 rounded-lg min-h-[20rem]"
            style={{ boxShadow: "0 2px 10px rgba(0, 0, 0, 0.25)" }}
          >
            <div className="">
              {userDetail.image && (
                <img className="w-1/4" src={userDetail.image} alt="" />
              )}
              <div className="flex flex-col space-y-2 w-full">
                <div className="flex flex-row">
                  <h3 className="text-4xl font-bold text-left m-2 p-3 truncate border-b border-black w-2/2 text-black">
                    {userDetail.name}
                  </h3>
                  {isAdmin && (
                    <div>
                      <p>Admin </p>
                      <FaCrown />
                    </div>
                  )}
                </div>
                <div className="flex flex-col sm:flex-row sm:space-x-2">
                  <div className="m-4 space-x-2 pl-10">
                    <h1 className="text-black font-bold truncate">E-mail:</h1>
                    <h1 className="text-black truncate">
                      {userDetail.email}
                    </h1>
                    {isPremium && (
                      <img className="w-1/4" src={Premium} alt="" />
                    )}
                  </div>
                  <div className="m-4 space-x-2 pl-10">
                    <h1 className="text-black font-bold truncate">
                      Fecha de creación:
                    </h1>
                    <h1 className="text-black truncate">
                      {userDetail.createdAt
                        .slice(0, 10)
                        .split("-")
                        .reverse()
                        .join("-")}
                    </h1>
                  </div>
                  <div className="m-4 space-x-2 pl-10 truncate">
                    {userDetail.perfilUrl && [
                      <h1 className="text-black font-bold">Profile Url</h1>,
                      <p className="text-black truncate">
                        {userDetail.perfilUrl}
                      </p>,
                    ]}
                  </div>
                  <div className="m-4 space-x-2 pl-10">
                    {userDetail.description && [
                      <h1 className="text-black font-bold truncate">
                        Description:
                      </h1>,
                      <p className="text-black truncate">
                        {userDetail.description}
                      </p>,
                    ]}
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-4 sm:ml-[5rem]">
                <button
                  className="bg-black text-white border-none rounded-[5rem] p-3 text-l font-bold cursor-pointer"
                  onClick={handleEditClick}
                >
                  Editar
                </button>
                {editMode && !showImage && (
                  <button
                    className="flex bg-black text-white border-none rounded-[5rem] p-3 text-l font-bold cursor-pointer"
                    onClick={handleEditClose}
                  >
                    Cerrar
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="w-9/20">
          {showImage && (
            <div
              className="text-center bg-gray-300 rounded-lg min-h-[29rem]"
              style={{ boxShadow: "0 2px 10px rgba(0, 0, 0, 0.25)" }}
            >
              Aquí no sé si agregaremos una imagen, publicidad o qué carajo
            </div>
          )}
          {editMode && !showImage && (
            <div>
              <UpdateProfile />
            </div>
          )}
        </div>
      </div>
    );
  };

  return <div className="m-10">{renderProfile()}</div>;
};

export default Profile;