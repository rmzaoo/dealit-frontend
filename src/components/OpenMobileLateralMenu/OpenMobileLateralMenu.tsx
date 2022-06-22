import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CategoryBar from "../CategoryBar/CategoryBar";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import {
  ButtonsMobile,
  CartButton,
  Container,
  IconHamburger,
  LoginButton,
  MobileCategoryBar,
  MobileLateralMenu,
  MobileSearchbar,
} from "./style";

const OpenMobileLateralMenu = () => {
  const [opened, setOpened] = useState(false);
  const navigate = useNavigate();

  return (
    <Container>
      <IconHamburger onClick={() => setOpened(!opened)} />
      {opened && (
        <MobileLateralMenu>
          <MobileSearchbar />
          <div
            onClick={() => setOpened(!opened)}
            style={{ height: "100%", width: "80%" }}
          >
            <ButtonsMobile>
              <LoginButton onClick={() => navigate("/login")} />
              <CartButton onClick={() => navigate("/cart")} />
              <PrimaryButton>Sell With US</PrimaryButton>
            </ButtonsMobile>
            <MobileCategoryBar />
          </div>
        </MobileLateralMenu>
      )}
    </Container>
  );
};

export default OpenMobileLateralMenu;
