import React from "react";
import Recep from "../../assets/images/recep.jpg";
import Background from "../../assets/images/background.jpg";
import { useSelector } from "react-redux";
const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <section className="profile">
      <div className="profile__container">
        <div className="profile__background">
          <img src={Background} alt="" />
        </div>
        <div className="profile__background__content">
          <img src={Recep} alt="" />
          <div className="profile__background__content__title">
            <span style={{ color: "white" }}> {user.displayName}</span>
          </div>
          <div className="profile__background__content__title">
            <p>Güngören, İstanbul</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
