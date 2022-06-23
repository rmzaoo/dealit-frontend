import styled from "styled-components";
import SecundaryButton from "../SecundaryButton/SecundaryButton";

export const DashboardButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
`;

export const StyledSecundaryButton = styled(SecundaryButton)`
  color: white;
  width: 80%;
  margin: 10px;
`;

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
