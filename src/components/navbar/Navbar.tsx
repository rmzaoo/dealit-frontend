import {
  Container,
  DesktopHeader,
  MobileHeader,
  LoginButton,
  CartButton,
  ButtonsBar,
  SellButton,
} from "./style";
import Logo from "../Logo/Logo";
import Searchbar from "../Searchbar/Searchbar";
import OpenMobileLateralMenu from "../OpenMobileLateralMenu/OpenMobileLateralMenu";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const isOpen: any = useSelector((state: any) => state.cartIsOpened);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleClick() {
    dispatch({ type: "SEND_OPENED", payload: { opened: true } });
  }

  useEffect(() => {
    const cartRecovery = localStorage.getItem("shoppingCart");
    console.log(cartRecovery);
    console.log(localStorage.getItem("shoppingCart"));
    if (cartRecovery) {
      dispatch({
        type: "SET_CART",
        payload: { cartRecovery: JSON.parse(cartRecovery) },
      });
      console.log(cartRecovery);
    }
  }, []);

  return (
    <Container>
      <MobileHeader>
        <OpenMobileLateralMenu />
      </MobileHeader>
      <Logo onClick={() => navigate("/")} />
      <DesktopHeader>
        <Searchbar />
        <ButtonsBar>
          <SellButton>Sell With US</SellButton>
          <LoginButton onClick={() => navigate("/login")} />
          <CartButton onClick={() => handleClick()} />
        </ButtonsBar>
      </DesktopHeader>
      {isOpen && <Sidebar />}
    </Container>
  );
};

export default Navbar;
