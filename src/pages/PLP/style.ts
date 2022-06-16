import styled from "styled-components";
import { ParallaxLayer } from "@react-spring/parallax";
import { SecundaryButton } from "../../components/SecundaryButton/style";

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #27364b;
  color: white;
  background-image: linear-gradient(175deg, #27364b 5%, #0e1318 100%);
  display: flex;
  justify-content: center;
  align-items: end;
`;
const ScrollTo = styled(SecundaryButton)`
  border: none;
  border: 1px solid white;
  color: white;
  cursor: pointer;
  z-index: 4;
  height: 30px;
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 4vh 2vh;
`;

const CategoryDiv = styled.div`
  padding-top: 12vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (min-width: 200px) {
    padding-top: 12vh;
  }
  @media only screen and (min-width: 768px) {
    padding-top: 14vh;
  }
  @media only screen and (min-width: 992px) {
    padding-top: 12vh;
  }
`;
const MainCategory = styled.h1`
  color: white;
  font-size: 26px;
  margin: 0;
  text-align: center;

  @media screen and (min-width: 200px) {
    font-size: 16px;
  }
  @media screen and (min-width: 992px) {
    font-size: 22px;
  }
`;
const MainText = styled.h1`
  color: white;
  font-size: 15px;

  @media screen and (min-width: 200px) {
    font-size: 12px;
  }
  @media screen and (min-width: 992px) {
    font-size: 18px;
  }
`;

const LayerInfo = styled(ParallaxLayer)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-itms: center;
  overflow: hidden;
  z-index: 9999;
`;
const LayerDividing = styled(ParallaxLayer)`
  clip-path: polygon(100% 14%, 100% 56%, 0 100%, 0 66%);
  width: "100%";
`;

export {
  MainCategory,
  LayerInfo,
  MainText,
  LayerDividing,
  MainContainer,
  CategoryDiv,
  ScrollTo,
};
