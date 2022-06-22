import styled from "styled-components";
import { PrimaryButton } from "../PrimaryButton/style";
import { SecundaryButtonStyle } from "../SecundaryButton/style";

export const DashboardButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
`;

export const SecundaryButton = styled(SecundaryButtonStyle)`
  color: white;
  width: 80%;
  margin: 10px;
`;

export const DashboardButtonLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%
`;

export const DashboardTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
`;
