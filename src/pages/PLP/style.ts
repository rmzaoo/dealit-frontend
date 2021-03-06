import styled from "styled-components";
import { ParallaxLayer } from "@react-spring/parallax";
import ProductListing from "../../components/ProductListing/ProductListing";
import SecundaryButton from "../../components/SecundaryButton/SecundaryButton";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";

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
    padding-top: 14vh;
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
  align-items: center;
  overflow: hidden;
  z-index: 9999;
`;
const LayerDividing = styled(ParallaxLayer)`
  clip-path: polygon(100% 14%, 100% 56%, 0 100%, 0 66%);
  width: "100%";
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #27364b;
  color: white;
  background-image: linear-gradient(175deg, #27364b 5%, #0e1318 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SafeContainer = styled.div`
  margin-top: 100px;
  height: 100%;
  width: 100%;

  @media screen and (max-width: 768px) {
    margin-top: 50px;
  }
`;

const Category = styled.div`
  margin-top: 70px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 1000px) {
    font-size: 12px;
  }
  @media screen and (min-width: 1100px) {
    font-size: 14px;
  }
`;

const ContainerProducts = styled.div`
  margin: 15px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 76%;

  @media screen and (min-width: 300px) {
    height: 70%;
  }
  @media screen and (min-width: 792px) {
    height: 72%;
  }
  @media screen and (min-width: 992px) {
    height: 78%;
  }
`;

const StyledProductListing = styled(ProductListing)`
  margin: 0;

  @media screen and (min-width: 1600px) {
    width: 60%;
  }
`;

const PageBottoms = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  > * {
    width: 6vh;
    margin: 0 10px;

    @media screen and (min-width: 300px) {
      width: 8vh;
      margin: 0 8px;
    }
    @media screen and (min-width: 992px) {
      width: 2vh;
      margin: 0 8px;
    }
    @media screen and (min-width: 1000px) {
      width: 6vh;
      margin: 0 10px;
    }
  }
`;
const StyledSpan = styled.span`
  width: auto;
`;
const DisabledButton = styled(PrimaryButton)`
  &:hover {
    cursor: no-drop;
  }
`;

export {
  MainCategory,
  LayerInfo,
  MainText,
  LayerDividing,
  MainContainer,
  CategoryDiv,
  ScrollTo,
  Container,
  Category,
  ContainerProducts,
  SafeContainer,
  PageBottoms,
  StyledProductListing,
  StyledSpan,
  DisabledButton,
};
