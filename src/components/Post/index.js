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

  const [likedPosts, setLikedPosts] = useState(() => {
    const storedLikedPosts =
      JSON.parse(localStorage.getItem("likedPosts")) || {};
    return storedLikedPosts;
  });

  useEffect(() => {
    localStorage.setItem("followedStates", JSON.stringify(followedStates));
  }, [followedStates]);

  useEffect(() => {
    localStorage.setItem("likedPosts", JSON.stringify(likedPosts));
  }, [likedPosts]);

  const handleFollowClick = (id) => {
    setFollowedStates((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const handleLikeClick = (id) => {
    setLikedPosts((prevLikedPosts) => {
      const updatedLikedPosts = { ...prevLikedPosts };
      updatedLikedPosts[id] = !updatedLikedPosts[id];

      // Save to localStorage
      localStorage.setItem("likedPosts", JSON.stringify(updatedLikedPosts));

      return updatedLikedPosts;
    });
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
            {followedStates[item.id] && ( // Eğer takip ediliyorsa
              <div className="card__content">
                <img src={item.images} alt="" />
                <div className="card__content__description">
                  <p>{item.description}</p>
                </div>
                <div className="card__content__actions">
                  <button
                    className="like-btn"
                    onClick={() => handleLikeClick(item.id)}
                    style={{ color: likedPosts[item.id] ? "red" : "black" }}
                  >
                    {likedPosts[item.id] ? "Unlike" : "Like"}
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Post;
