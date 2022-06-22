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

const Navbar = () => {
  const [opened, setOpened]: any = useState(false);
  console.log(opened)
  const navigate = useNavigate();
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
          <CartButton onClick={() => setOpened(!opened)} />
        </ButtonsBar>
      </DesktopHeader>
      {opened && <Sidebar openedBoolean={opened} />}
    </Container>
  );
};

export default Navbar;
