import { Navbar, Post, Sidebar } from "components";
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
      <Navbar />
      <Post />
      <Sidebar />
    </main>
  );
};

export default Home;
