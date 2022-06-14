import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  Navigate,
} from "react-router-dom";
import App from "./pages/App/App";
import Homepage from "./pages/Homepage/Homepage";
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
          <Route path="/products" element={<PLP />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
