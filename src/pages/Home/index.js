import { Navbar, Post, Sidebar } from "components";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  // const isLoading = useSelector((state) => state?.post?.isLoading);
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <main>
      {/* {isLoading ? (
        <p
          style={{
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            width: "100%",
          }}
          className="loading"
        >
          Loading...
        </p>
      ) : (
        <div> */}
      <Navbar />
      <Sidebar />
      <Post />

      {/* </div>
      )} */}
    </main>
  );
};

export default Home;
