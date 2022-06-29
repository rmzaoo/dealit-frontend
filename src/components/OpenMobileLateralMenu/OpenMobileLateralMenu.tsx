import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CategoryBar from "../CategoryBar/CategoryBar";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { useDispatch } from "react-redux";
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
import { ProductDetailsProp } from "../../pages/PDP/PDP";

interface Props {
  product?: ProductDetailsProp;
}

const OpenMobileLateralMenu = (props: Props) => {
  const [quantity, setQuantity] = useState<string>("1");
  const dispatch = useDispatch();
  const product = props.product;
  const [opened, setOpened] = useState(false);
  const navigate = useNavigate();

  function handleDispatch() {
    dispatch({ type: "SEND_OPENED", payload: { opened: true } });
    dispatch({ type: "ADD", payload: { product, quantity, opened } });
    dispatch({ type: "SET_COMBINED_PRICE", payload: {} });
  }

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
              <CartButton onClick={() => handleDispatch()} />
              <PrimaryButton onClick={() => navigate("/sell-product")}>
                Sell With US
              </PrimaryButton>
            </ButtonsMobile>
            <MobileCategoryBar />
          </div>
        </MobileLateralMenu>
      )}
    </Container>
  );
};

export default OpenMobileLateralMenu;
