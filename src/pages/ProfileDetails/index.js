import { fetchUserDetails } from "features/user/userSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProfileDetails = () => {
  const details = useSelector((state) => state?.post?.details);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchUserDetails(id));
  }, [dispatch, id]);
  return (
    <section className="profile">
      <div className="profile__container">
        <div className="profile__background">
          <img src={details.images} alt="" />
        </div>
        <div className="profile__background__info">
          <div className="profile__background__info__wrapper">
            <img src={details.avatar} alt="" />
            <div>
              <div className="profile__background__info__title">
                <span style={{ color: "white" }}> {details.title}</span>
              </div>
              <div className="profile__background__info__title">
                <p>{details.location}</p>
              </div>
            </div>
          </div>
          <div className="profile__background__info__right">
            <button>Add User</button>
            <button>Message</button>
          </div>
        </div>
        <div className="profile__content">
          <div className="profile__content__wrapper">
            <div className="profile__content__left">
              <div className="profile__content__left__title">
                <h3>Contact</h3>
              </div>
              <div className="profile__content__left__info">
                <p>{details.email}</p>
              </div>
              <div className="profile__content__left__info">
                <h3>About Us</h3>
                <p>{details.description}</p>
              </div>
            </div>
            <div className="profile__content__right"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileDetails;
