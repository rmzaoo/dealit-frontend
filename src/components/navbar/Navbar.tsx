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

const Navbar = () => {
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
          <SellButton onClick={() => navigate("/sell-product")}>Sell With US</SellButton>
          <LoginButton onClick={() => navigate("/login")} />
          <CartButton onClick={() => navigate("/cart")} />
        </ButtonsBar>
      </DesktopHeader>
    </Container>
  );
};

export default Navbar;
