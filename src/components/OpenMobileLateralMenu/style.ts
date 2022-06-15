import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCart, IoMdPerson } from "react-icons/io";
import Searchbar from "../Searchbar/Searchbar";
import CategoryBar from "../CategoryBar/CategoryBar";

const Container = styled.div`
  height: 50px;
  width: 50px;
`;

const IconHamburger = styled(GiHamburgerMenu)`
  height: 100%;
  width: 100%;
  color: white;
  cursor: pointer;
  opacity: 0.8;
`;

const MobileLateralMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(19, 26, 34, 0.9);
  margin-top: 70px;
  width: 100%;
  animation: sidebar-open 0.5s cubic-bezier(0.77, 0, 0.175, 1);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @keyframes sidebar-open {
    0% {
      opacity: 0;
      transform: translateX(-100%);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const CartButton = styled(IoMdCart)`
  height: 30px;
  width: 30px;
  padding: 10px;
  border-radius: 100%;
  background-color: #131a22;
  color: white;
  display: flex;
  border: 1px solid white;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

const LoginButton = styled(IoMdPerson)`
  height: 30px;
  width: 30px;
  padding: 10px;
  border-radius: 100%;
  background-color: #131a22;
  color: white;
  display: flex;
  border: 1px solid white;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

const MobileSearchbar = styled(Searchbar)`
  width: 90%;
  margin: 10px;
`;

const ButtonsMobile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  > * {
    margin-top: 10px;
  }
`;

const MobileCategoryBar = styled(CategoryBar)`
  position: relative;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-bottom: none;
  background-color: transparent;
  height: 100%;
  box-shadow: none;

  > * {
    margin: 8px;
    font-size: 18px;
  }
`;

export {
  Container,
  IconHamburger,
  MobileLateralMenu,
  CartButton,
  LoginButton,
  MobileSearchbar,
  ButtonsMobile,
  MobileCategoryBar,
};
