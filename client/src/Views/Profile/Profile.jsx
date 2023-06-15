import React from "react";
import styles from './Profile.module.css';


const Profile = ({ user }) => {
  return (
    <div className={styles.container}>
        <div className={styles.imageBox}>
          <img
            src="https://source.unsplash.com/64x64/?person"
            alt=""
            style={{ borderRadius: "50%", cursor: "pointer" }}
          />
        </div>
            <div>
              <h2>Perfil de Usuario</h2>
              <p>Email: </p>
              <p>Fecha de registro </p>
            </div>
    </div>
  );
};

export default Profile;
