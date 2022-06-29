import styled from "styled-components";
import { IoMdArrowRoundForward } from "react-icons/io";
import Product from "../Product/Product";
import SecundaryButton from "../SecundaryButton/SecundaryButton";

const SidebarContainer = styled.div`
  position: fixed;
  z-index: 11;
  top: 0;
  right: 0;
  height: 100%;
  width: 30vh;
  background-color: #131a22;
  animation: sidebar-open 0.5s cubic-bezier(0.77, 0, 0.175, 1);
  display: flex;
  flex-direction: column;
  align-items: center;

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

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
const Checkout = styled.div`
  position: fixed;
  z-index: 11;
  top: 0;
  right: 50;
  height: 100%;
  width: 70%;
  background-color: #131a22;
  animation: sidebar-open 0.5s cubic-bezier(0.77, 0, 0.175, 1);
  display: flex;
  flex-direction: column;
  align-items: center;

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

  @media screen and (max-width: 768px) {
    width: 100%;
    right: 0;
  }
  @media screen and (min-width: 769px) {
    width: 50%;
  }
`;
const CheckoutContainer = styled.div`
  heigth: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: 10px;
  justify-content: center;
  align-items: center;
`;
const TotalContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 40px;
  justify-content: center;
  align-items: center;
`;
const CheckoutOut = styled.div`
  position: fixed;
  z-index: 11;
  top: 0;
  right: 50;
  height: 100%;
  width: 100vh;
  background-color: #131a22;
  animation: sidebar-close 0.5s cubic-bezier(0.77, 0, 0.175, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

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

  @media screen and (max-width: 768px) {
    width: 100%;
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
  cursor: pointer;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const SidebarOut = styled.div`
  position: fixed;
  z-index: 11;
  top: 0;
  right: 0;
  height: 100%;
  width: 30vh;
  background-color: #131a22;
  animation: sidebar-close 0.5s cubic-bezier(0.77, 0, 0.175, 1) forwards;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 100%;
  }

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
const CheckoutButton = styled(SecundaryButton)`
  position: fixed;
  bottom: 30px;
  height: 3vh;
`;

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
const CombinedPrice = styled.div`
  position: fixed;
  font-size: 20px;
  bottom: 90px;
  display: flex;
  justify-content: space-between;
  width: 20vh;
`;

const ProductsContainer = styled.div`
  position: relative;
  top: 10px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 80%;
`;

export {
  SidebarContainer,
  SidebarOut,
  CloseButton,
  ArrowRight,
  ProductCart,
  CombinedPrice,
  PageOutSidebar,
  CheckoutButton,
  ProductsContainer,
  Checkout,
  CheckoutOut,
  CheckoutContainer,
  TotalContainer,
};
