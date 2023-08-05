import Post from "components/Post";
import Sidebar from "components/Sidebar";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <main>
      <Sidebar />
      <Post />
    </main>
  );
};

export default Home;
