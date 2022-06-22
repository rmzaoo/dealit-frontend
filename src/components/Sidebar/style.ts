import styled from "styled-components";
import { IoMdArrowRoundForward } from "react-icons/io";
import Product from "../Product/Product";

const SidebarContainer = styled.div`
  position: fixed;
  z-index: 11;
  top: 0;
  right: 0;
  height: 100%;
  width: 18%;
  background-color: #131a22;
  animation: sidebar-open 0.5s cubic-bezier(0.77, 0, 0.175, 1);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: auto;

  @keyframes sidebar-open {
    0% {
      opacity: 0;
      transform: translateX(100%);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;
const PageOutSidebar = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 200%;
  background-color: rgba(0, 0, 0, 0.8);
  
`;

const SidebarOut = styled.div`
  position: fixed;
  z-index: 11;
  top: 0;
  right: 0;
  height: 100%;
  width: 18%;
  background-color: #131a22;
  animation: sidebar-close 0.5s cubic-bezier(0.77, 0, 0.175, 1) forwards;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @keyframes sidebar-close {
    0% {
      opacity: 1;
      transform: translateX(0);
    }
    100% {
      opacity: 0;
      transform: translateX(100%);
    }
  }
`;

const CloseButton = styled.button`
  background-color: transparent;
  color: white;
  border: none;
  align-self: flex-start;
  margin: 5px;
  cursor: pointer;
`;
const MainTitle = styled.h1``;

const ArrowRight = styled(IoMdArrowRoundForward)`
  width: 4vh;
  height: 4vh;
`;
const ProductCart = styled(Product)`
  display: flex;
  flex-direction: row;
  margin: 10px;
  color: white;
  box-shadow: none;
  border-top: 1px solid #e9e9e9;
  border-bottom: 1px solid #e9e9e9;
  border-radius: 0px;
  background-color: transparent;
  background-image: none;

  img {
    border-radius: 0px;
    object-fit: contain;
  }

  @media only screen and (min-width: 300px) {
    width: 90%;
    height: 220px;
    margin: 5px;

    img {
      width: 200px;
      height: 120px;
    }
    h1 {
      font-size: 16px;
      margin-right: 20%;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
    span {
      margin-right: 20%;
      font-size: 14px;
      height: 60%;
      width: 100%;
      text-align: center;
    }
  }
`;
const CombinedPrice = styled.span`
  position: fixed;
  bottom: 50px;
  rigth: 10%;
`;

export {
  SidebarContainer,
  SidebarOut,
  CloseButton,
  ArrowRight,
  ProductCart,
  CombinedPrice,
  PageOutSidebar,
};
