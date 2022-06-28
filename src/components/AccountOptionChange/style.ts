import styled from "styled-components";
import SecundaryButton from "../SecundaryButton/SecundaryButton";

export const AccOptionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 50%;
  height: 18%;
  padding: 10px 20px;
  border: 1px solid #116699;
  margin: 10px;
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
  align-items: flex-start;
  height: 30%;
  padding-left: 5px;
  width: 100%;
`;

export const AccOptionText = styled.p`
  font-size: 1rem;
  font-weight: bold;
`;

export const AccInputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 5px;
`;

export const AccOptionButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;
  height: 100%;
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
  }
`;
