import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./pages/App/App";
import Homepage from "./pages/Homepage/Homepage";
import LoginRegisterPage from "./pages/LoginRegisterPage/LoginRegisterPage";
import PDP from "./pages/PDP/PDP";
import PLP from "./pages/PLP/PLP";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Homepage />} />
          <Route path="/product/" element={<PDP />}>
            <Route path="/product/:id" element={<PDP />} />
          </Route>
          <Route path="/products" element={<PLP />}>
            <Route path=":category1" element={<PLP />}>
              <Route path=":category2" element={<PLP />} />
            </Route>
          </Route>
        </Route>
        <Route path="/login" element={<LoginRegisterPage type="login" />} />
        <Route path="/register" element={<LoginRegisterPage type="register"/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
