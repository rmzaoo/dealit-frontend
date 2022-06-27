import { screen } from "@testing-library/react";
import { clone } from "lodash";
import { MdArrowRight } from "react-icons/md";
import styled from "styled-components";
import PrimaryInput from "../../components/PrimaryInput/PrimaryInput";

const SellProductsContainer = styled.div`
  background-color: red;
  height: 100vh;
  margin-top: 108px;
  width: 100%;
  overflow: auto;
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
  margin: 30px 40px;
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
`;

const StyledPrimaryInput = styled(PrimaryInput)`
  color: #000;
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

const ImageUploader = styled.div`
  background-color: #02a4e3;
  color: white;
  width: 150px;
  height: 150px;
  padding: 0px 20px;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  border-radius: 3px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease-in-out;
  margin: 15px;

  &:hover {
    transform: scale(0.95);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  }
`;

const HideInput = styled.input`
  position: absolute;
  opacity: 0;
  left: 0px;
  width: 100%;
  height: 100%;
  top: 0px;
  cursor: pointer;
`;

const ImageUploadArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  margin: 10px 0;
  height: 100%;
  width: 70%;

  @media screen and (max-width: 768px) {
    justify-content: center;
    width: 100%;
  }
`;

export {
  SellProductsContainer,
  TitlePage,
  SellDetailsContainer,
  StyledPrimaryInput,
  BoxCategoriesButton,
  StyledIcon,
  ImageUploader,
  HideInput,
  ImageUploadArea,
  StyledDescriptionInput,
};
