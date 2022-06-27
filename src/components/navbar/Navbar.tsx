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
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const context: any = useSelector((state) => state);
  const [opened, setOpened]: any = useState(
    context.cart.cartIsOpenSidebar === false ? true : false
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleClick() {
    if (context.cart.cartIsOpenSidebar === undefined) {
      setOpened(true);
    } else if (context.cart.cartIsOpenSidebar === false) {
      setOpened(true);
    } else {
      setOpened(false);
    }
    dispatch({ type: "SEND_DATA", payload: { opened } });
  }

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
      {opened && <Sidebar />}
    </Container>
  );
};

export default Navbar;
