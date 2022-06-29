import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import App from "./pages/App/App";
import Homepage from "./pages/Homepage/Homepage";
import LoginRegisterPage from "./pages/LoginRegisterPage/LoginRegisterPage";
import PDP from "./pages/PDP/PDP";
import PLP from "./pages/PLP/PLP";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import OrdersPage from "./pages/OrdersPage/OrdersPage";
import AccountSettingsPage from "./pages/AccountSettingsPage/AccountSettingsPage";
import AddressesPage from "./pages/AddressesPage/AddressesPage";
import CreditCardPage from "./pages/CreditCardPage/CreditCardPage";
import SellProducts from "./pages/SellProducts/SellProducts";

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
          <Route path="/dashboard" element={<DashboardPage />}>
            <Route index element={<ProfilePage />} />
            <Route path="orders" element={<OrdersPage />} />
            <Route path="settings" element={<AccountSettingsPage />} />
            <Route path="addresses" element={<AddressesPage />} />
            <Route path="cards" element={<CreditCardPage />} />
          </Route>

          <Route path="/sell-product" element={<SellProducts />} />
        </Route>
        <Route path="/login" element={<LoginRegisterPage type="login" />} />
        <Route
          path="/register"
          element={<LoginRegisterPage type="register" />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
