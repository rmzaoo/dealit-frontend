import styled from "styled-components";
import PrimaryInput from "../PrimaryInput/PrimaryInput";
import SecundaryButton from "../SecundaryButton/SecundaryButton";

export const AccOptionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 55%;
  height: 18%;
  padding-left: 20px;
  border: 1px solid #116699;
  margin: 10px;
  border-radius: 7px;

  //Laptops and small screens
  @media screen and (max-width: 1024px) {
    width: 70%;
  }

  //Tablets
  @media screen and (max-width: 768px) {
    width: 75%;
  }
`;

export const AccOptionTitleAndInputContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 50%;
  height: 100%;
`;

export const AccOptionTextContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 30%;
  width: 100%;
`;

export const AccOptionText = styled.p`
  font-size: 1rem;
  font-weight: bold;

  //Laptops and small screens
  @media screen and (max-width: 1024px) {
    font-size: 0.9rem;
  }

  //Tablets
  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }

  //Mobile
  @media screen and (max-width: 480px) {
    font-size: 0.7rem;
  }
`;

export const AccInputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;
`;

export const AccOptionButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;
  height: 100%;

  //Tablets
  @media screen and (max-width: 768px) {
    width: 40%;
    align-items: flex-end;
  }
`;

export const SaveButton = styled(SecundaryButton)`
  justify-content: center;
  color: white;
  width: 60%;
  margin: 5px;

  //Laptops and small screens
  @media screen and (max-width: 1024px) {
    width: 50%;
  }

  //Tablets
  @media screen and (max-width: 768px) {
    width: 40%;
  }

  //Mobile
  @media screen and (max-width: 480px) {
    width: 25%;
    font-size: 0.8rem;
  }
`;

export const ResetButton = styled(SecundaryButton)`
  background-color: #b23b3b;
  width: 60%;
  margin: 5px;
  border: 1px solid #b23b3b;

  //Laptops and small screens
  @media screen and (max-width: 1024px) {
    width: 50%;
  }

  //Tablets
  @media screen and (max-width: 768px) {
    width: 40%;
  }

  //Mobile
  @media screen and (max-width: 480px) {
    width: 25%;
    font-size: 0.8rem;
  }
`;

export const StyledPrimaryInput = styled(PrimaryInput)`

  //Laptops and small screens
  @media screen and (max-width: 1024px) {
    font-size: 17px;
  }

  //Tablets
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }

  //Mobile
  @media screen and (max-width: 480px) {
    font-size: 11px;
  }
`;
