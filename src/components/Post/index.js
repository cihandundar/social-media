import { fetchUser } from "features/user/userSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Post = () => {
  const user = useSelector((state) => state?.post?.user);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  const [followedStates, setFollowedStates] = useState(() => {
    const storedFollowedStates =
      JSON.parse(localStorage.getItem("followedStates")) || {};
    return storedFollowedStates;
  });

  useEffect(() => {
    localStorage.setItem("followedStates", JSON.stringify(followedStates));
  }, [followedStates]);

  const handleFollowClick = (id) => {
    setFollowedStates((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <section className="post">
      <div className="post__container">
        {user?.map((item) => (
          <div className="card" key={item.id}>
            <div className="card__title">
              <Link to={`/profile/${item?.id}`}>
                <div className="card__title__wrapper">
                  <div className="card__title__img">
                    <img src={item.avatar} alt="" />
                  </div>
                  <h3>{item.title}</h3>
                </div>
              </Link>
              <div className="card__title__follow">
                {!followedStates[item.id] ? (
                  <Link to="#" onClick={() => handleFollowClick(item.id)}>
                    <h4>+ Follow us</h4>
                  </Link>
                ) : (
                  <h4
                    style={{ color: "white", cursor: "pointer" }}
                    onClick={() => handleFollowClick(item.id)}
                  >
                    Followed
                  </h4>
                )}
              </div>
            </div>
            <div className="card__content">
              <img src={item.images} alt="" />
              <div className="card__content__description">
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Post;
