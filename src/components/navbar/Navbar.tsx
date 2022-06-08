import { Container, DesktopHeader, MobileHeader, LoginButton, CartButton } from "./style";
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
        <PrimaryButton>Sell With US</PrimaryButton>
        <LoginButton />
        <CartButton />
      </DesktopHeader>
    </Container>
  );
};

export default Navbar;
