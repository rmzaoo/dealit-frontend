import styled from "styled-components";
import { ParallaxLayer } from "@react-spring/parallax";
import { IoIosArrowRoundUp, IoIosArrowRoundDown } from "react-icons/io";

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  background: rgb(37, 50, 55);
`;
const MainCategory = styled.h1`
  color: white;
  font-size: 26px;
  margin: 0;
  text-align: center;
`;
const MainText = styled.h1`
  color: white;
  font-size: 15px;
`;

const LayerInfo = styled(ParallaxLayer)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-itms: center;
  overflow: hidden;
`;
const LayerDividing = styled(ParallaxLayer)`
  clip-path: polygon(100% 14%, 100% 56%, 0 100%, 0 66%);
  width: "100%";
`;

const GoToTop = styled.button`
  position: absolute;
  bottom: 6%;
  right: 2%;
  border: none;
  background-color: rgb(0, 180, 204);
  cursor: pointer;
  z-index: 20;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const PageDown = styled.button`
  position: absolute;
  bottom: 6%;
  left: 2%;
  border: none;
  background-color: rgb(0, 180, 204);
  cursor: pointer;
  z-index: 20;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ArrowUp = styled(IoIosArrowRoundUp)`
  height: 40px;
  width: 40px;
`;
const ArrowDown = styled(IoIosArrowRoundDown)`
  height: 40px;
  width: 40px;
`;
export {
  MainCategory,
  LayerInfo,
  MainText,
  LayerDividing,
  MainContainer,
  GoToTop,
  ArrowUp,
  PageDown,
  ArrowDown
};
