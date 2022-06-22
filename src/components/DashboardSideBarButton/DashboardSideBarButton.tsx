import React from "react";
import { useNavigate } from "react-router-dom";
import {
  DashboardButtonLogoContainer,
  DashboardButtonsContainer,
  DashboardTextContainer,
  SecundaryButton,
} from "./style";

interface Props {
  options?: any;
}

const AccountSideBarButtons = ({ options }: Props) => {
  const navigate = useNavigate();

  return (
    <DashboardButtonsContainer>
      {Object.entries(options).map((value: any[], key: any) => {
        return (
          <SecundaryButton onClick={() => navigate(value[1].path)}>
            <DashboardButtonLogoContainer>
              {value[1].icon}
            </DashboardButtonLogoContainer>
            <DashboardTextContainer>{value[1].text}</DashboardTextContainer>
          </SecundaryButton>
        );
      })}
    </DashboardButtonsContainer>
  );
};

export default AccountSideBarButtons;
