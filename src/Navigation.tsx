import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./pages/App/App";
import Homepage from "./pages/Homepage/Homepage";
import PDP from "./pages/PDP/PDP";


const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Homepage />} />
          <Route path="/products/:key" element={<PDP />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
