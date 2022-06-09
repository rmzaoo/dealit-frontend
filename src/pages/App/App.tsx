import React from "react";
import { Outlet } from "react-router-dom";
import CategoryBar from "../../components/CategoryBar/CategoryBar";
import Navbar from "../../components/navbar/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <CategoryBar />
      <Outlet />
    </>
  );
};

export default App;
