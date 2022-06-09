import styled from "styled-components";
import { IoMdPerson, IoMdCart } from "react-icons/io";
import { PrimaryButton } from "../PrimaryButton/style";

const Container = styled.div`
  background-color: #131a22;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 15px;
  height: 50px;
`;

const DesktopHeader = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const MobileHeader = styled.div`
  display: none;

  @media only screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 10px;
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

const ButtonsBar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  > * {
    margin: 0 8px;
  }
`;

const SellButton = styled(PrimaryButton)`
  height: 30px;
`;

export {
  Container,
  DesktopHeader,
  MobileHeader,
  LoginButton,
  CartButton,
  ButtonsBar,
  SellButton,
};
