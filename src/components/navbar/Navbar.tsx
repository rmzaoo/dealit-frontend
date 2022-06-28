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
  const [opened, setOpened]: any = useState(context.cartIsOpened);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleClick() {
    context.cartIsOpened === undefined
      ? setOpened(true)
      : setOpened(!context.cartIsOpened);
    console.log(context.cartIsOpened);
    dispatch({ type: "SEND_OPENED", payload: { opened } });
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
