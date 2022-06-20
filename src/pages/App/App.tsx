import React from "react";
import { Outlet } from "react-router-dom";
import CategoryBar from "../../components/CategoryBar/CategoryBar";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import { Provider } from "react-redux";
import store from "../../redux/store";

const App = () => {
  return (
    <>
      <Navbar />
      <CategoryBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
