import { Container, DesktopHeader, MobileHeader, LoginButton, CartButton, ButtonsBar, SellButton  } from "./style";
import Logo from "../Logo/Logo";
import Searchbar from "../Searchbar/Searchbar";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import OpenMobileLateralMenu from "../OpenMobileLateralMenu/OpenMobileLateralMenu";

const Navbar = () => {
  return (
    <Container>
      <MobileHeader>
        <OpenMobileLateralMenu />
      </MobileHeader>
      <Logo />
      <DesktopHeader>
        <Searchbar />
        <ButtonsBar>
          <SellButton>Sell With US</SellButton>
          <LoginButton />
          <CartButton />
        </ButtonsBar >
      </DesktopHeader>
    </Container>
  );
};

export default Navbar;
