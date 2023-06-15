import React from "react";
import styles from './Profile.module.css';

const Profile = () => {
  return (
    <div className={styles.container}>
        <div className={styles.imageBox}>
          <img
            src="https://source.unsplash.com/64x64/?person"
            alt=""
            style={{ borderRadius: "50%", cursor: "pointer" }}
          />
        </div>
            <div className={styles.datosUsuario}>
              <p>Perfil de Usuario</p>
              <p>Email: </p>
              <p>Fecha de registro </p>
            </div>
    </div>
  );
};

export default Profile;
