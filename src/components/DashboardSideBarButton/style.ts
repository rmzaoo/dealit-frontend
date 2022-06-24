import styled from "styled-components";
import SecundaryButton from "../SecundaryButton/SecundaryButton";

export const DashboardButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
  flex-direction: column;
  height: 60%;
`;

export const DashboardNavButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const StyledSecundaryButton = styled(SecundaryButton)`
  color: white;
  width: 80%;
  margin: 10px;
`;

export const StyledLogoutButton = styled(SecundaryButton)`
  background-color: #b23b3b;
  width: 80%;
  margin: 10px;
  border: 1px solid #b23b3b;
  margin-top: 40px;
`

export const DashboardButtonLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
`;

export const DashboardTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
`;
