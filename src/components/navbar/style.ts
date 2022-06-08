import styled from "styled-components";
import { IoMdPerson, IoMdCart } from "react-icons/io";


const Container = styled.div`
  background-color: #131a22;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 15px;
`;

const DesktopHeader = styled.div`
  display: flex;
  width: 100%;
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
  padding: 10px;
  border: 1px solid white;
  border-radius: 50%;
  transition: opacity 0.2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: auto;
  text-align: center;
  margin: 0 10px;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

const LoginButton = styled(IoMdPerson)`
  padding: 10px;
  border: 1px solid white;
  border-radius: 50%;
  transition: opacity 0.2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: auto;
  text-align: center;
  margin: 0 10px;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

export { Container, DesktopHeader, MobileHeader, LoginButton, CartButton };
