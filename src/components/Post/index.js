import { fetchUser } from "features/user/userSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Post = () => {
  const user = useSelector((state) => state?.post?.user);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <section className="post">
      <div className="post__container">
        {user?.map((item) => (
          <div className="card" key={item.id}>
            <div className="card__title">
              <div className="card__title__wrapper">
                <div className="card__title__img">
                  <img src={item.avatar} alt="" />
                </div>
                <h3>{item.title}</h3>
              </div>
              <div className="card__title__follow">
                <Link to="#">
                  <h4>+ Follow us</h4>
                </Link>
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
