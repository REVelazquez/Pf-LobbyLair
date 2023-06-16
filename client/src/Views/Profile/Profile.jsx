import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserById } from "../../Redux/actions";
import styles from './Profile.module.css';

const Profile = () => {
 
  const {id} = useParams()

  const userDetail=useSelector(state=>state.user)

  console.log(userDetail)

  return (
    <div>
      <h2>Name:holi</h2>
    </div>
  )
};

export default Profile;
