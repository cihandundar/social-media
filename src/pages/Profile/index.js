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
        <div className="profile__background__info">
          <div className="profile__background__info__wrapper">
            <img src={Recep} alt="" />
            <div>
              <div className="profile__background__info__title">
                <span style={{ color: "white" }}> {user.displayName}</span>
              </div>
              <div className="profile__background__info__title">
                <p>Güngören, İstanbul</p>
              </div>
            </div>
          </div>
          <div className="profile__background__info__right">
            <button>Update Profile</button>
            <button>Activity Log</button>
          </div>
        </div>
        <div className="profile__content">
          <div className="profile__content__wrapper">
            <div className="profile__content__left">
              <div className="profile__content__left__title">
                <h3>Contact</h3>
              </div>
              <div className="profile__content__left__info">
                <p>recep_*!?-ivedik95"@hotmail.com</p>
              </div>
              <div className="profile__content__left__info">
                <h3>About Us</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                  delectus ratione natus maiores sunt ipsam iure, quasi
                  assumenda harum omnis.
                </p>
              </div>
            </div>
            <div className="profile__content__right"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
