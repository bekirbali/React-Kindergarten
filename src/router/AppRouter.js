import React from "react";
import { Route, Routes } from "react-router-dom";
import Blogs from "../pages/Blogs";
import Home from "../pages/Home";
import NavbarMenu from "../components/NavbarMenu";
import About from "../pages/About";

const AppRouter = () => {
  return (
    <div className="h-[100vh]">
      <NavbarMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs/:id" element={<Blogs />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
