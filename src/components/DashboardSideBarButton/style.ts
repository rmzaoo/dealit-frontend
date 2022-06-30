import styled from "styled-components";
import SecundaryButton from "../SecundaryButton/SecundaryButton";

export const DashboardButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
  flex-direction: column;
  height: 50%;
  width: 90%;
`;

export const DashboardNavButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const StyledSecundaryButton = styled(SecundaryButton)`
  justify-content: space-between;
  color: white;
  width: 80%;
  margin: 10px;

  //Laptops and small screens
  @media screen and (max-width: 1024px) {
    width: 60%;
  }

  //Tablets
  @media screen and (max-width: 768px) {
    width: 50%;
  }

  //Mobile
  @media screen and (max-width: 480px) {
   width: 25%;
  }
`;

export const StyledLogoutButton = styled(SecundaryButton)`
  background-color: #b23b3b;
  width: 80%;
  margin: 10px;
  border: 1px solid #b23b3b;
  margin-top: 40px;

  //Laptops and small screens
  @media screen and (max-width: 1024px) {
    width: 60%;
  }

  //Tablets
  @media screen and (max-width: 768px) {
    width: 50%;
  }

  //Mobile
  @media screen and (max-width: 480px) {
    width: 25%;
  }
`

export const DashboardButtonLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;

  //Tablets
  @media screen and (max-width: 768px) {
    width: 100%;
  }

  //Mobile
  @media screen and (max-width: 480px) {
  }
`;

export const DashboardTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  margin-left: 5px;

  //Laptops and small screens
  @media screen and (max-width: 1024px) {
    font-size: 0.9rem;
  }

  //Tablets
  @media screen and (max-width: 768px) {
    display: none;
  }

  //Mobile
  @media screen and (max-width: 480px) {
  }
`;
