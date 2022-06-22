import React from "react";
import { useNavigate } from "react-router-dom";
import { DashboardOptions } from "../../pages/DashboardPage/DashboardPage";
import {
  DashboardButtonLogoContainer,
  DashboardButtonsContainer,
  DashboardTextContainer,
  StyledSecundaryButton,
} from "./style";

interface Props {
  options: DashboardOptions[];
}

const AccountSideBarButtons = ({ options }: Props) => {
  const navigate = useNavigate();

  return (
    <DashboardButtonsContainer>
      {Object.entries(options).map((value, key) => {
        return (
          <StyledSecundaryButton onClick={() => navigate(value[1].path)}>
            <DashboardButtonLogoContainer>
              {value[1].icon}
            </DashboardButtonLogoContainer>
            <DashboardTextContainer>{value[1].text}</DashboardTextContainer>
          </StyledSecundaryButton>
        );
      })}
    </DashboardButtonsContainer>
  );
};

export default AccountSideBarButtons;
