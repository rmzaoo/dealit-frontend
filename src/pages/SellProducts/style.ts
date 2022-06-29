import { MdArrowRight } from "react-icons/md";
import styled from "styled-components";
import PrimaryInput from "../../components/PrimaryInput/PrimaryInput";

const SellProductsContainer = styled.div`
  background-color: red;
  margin-top: 108px;
  width: 100%;
  position: absolute;
  background-color: #27364b;
  background-image: linear-gradient(175deg, #27364b 5%, #0e1318 100%);
  color: white;

  @media (max-width: 768px) {
    margin-top: 70px;
  }
`;

const TitlePage = styled.h1`
  font-size: 35px;
  font-weight: lighter;
  text-transform: capitalize;
  letter-spacing: 8px;
  font-style: normal;
  margin: 40px;
  padding: 8px 0;
  border-bottom: 1px solid white;

  @media (max-width: 768px) {
    text-align: center;
    margin-top: 20px;
  }
`;

const SellDetailsContainer = styled.div`
  background-color: white;
  color: black;
  padding: 20px;
  margin: 40px 40px;
  border-radius: 3px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

  h3 {
    font-size: 23px;
    margin: 10px 0;
    color: #02a4e3;
  }

  &:hover {
    background-color: #f5f5f5;
    transform: scale(1.01);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    user-select: none;
    cursor: pointer;
  }

  &:last-child {
    margin-bottom: 60px;
  }

  .input-sell-container {
    display: flex;
    width: 60%;
    flex-direction: column;

    > span {
      margin-top: 10px;
      letter-spacing: 1px;
    }

    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }

  .btnsubmit {
    color: white;
    font-size: 18px;
  }
`;

const StyledPrimaryInput = styled(PrimaryInput)`
  color: #000;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type="number"] {
    -moz-appearance: textfield;
  }
`;

const StyledDescriptionInput = styled.textarea`
  background-color: transparent;
  border: none;
  padding: 10px 5px;
  color: white;
  border-bottom: 1px solid #169;
  font-size: 18px;
  color: black;

  &:focus {
    outline: none;
  }
`;

const BoxCategoriesButton = styled.div`
  border: 2px solid #02a4e3;
  background-color: #02a4e3;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin: 10px 0;
  padding: 0 5px;
  width: 250px;
  letter-spacing: 2px;
  transition: opacity 0.3s ease-in-out;

  @media screen and (max-width: 768px) {
    width: 90%;
    padding: 0;
  }

  &:hover {
    opacity: 0.8;
  }
`;

const StyledIcon = styled(MdArrowRight)`
  font-size: 35px;
  color: white;
`;

export {
  SellProductsContainer,
  TitlePage,
  SellDetailsContainer,
  StyledPrimaryInput,
  BoxCategoriesButton,
  StyledIcon,
  StyledDescriptionInput,
};
