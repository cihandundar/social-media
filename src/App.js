import Header from "components/Header";
import { Home, Register, Login, Profile, ProfileDetails } from "pages";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/:id" element={<ProfileDetails />} />
      </Routes>
      <ToastContainer position="top-right" theme="colored" />
    </BrowserRouter>
  );
}

export default App;
