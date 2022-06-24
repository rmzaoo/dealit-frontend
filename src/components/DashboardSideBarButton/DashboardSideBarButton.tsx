import React, { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuthenticationValidation from "../../hooks/user/useAuthenticationValidation";
import {
  DashboardOptions,
  LogoutProps,
} from "../../pages/DashboardPage/DashboardPage";
import { deleteCookie, getCookie } from "../../utils/cookies";
import {
  DashboardButtonLogoContainer,
  DashboardButtonsContainer,
  DashboardNavButtonsContainer,
  DashboardTextContainer,
  StyledLogoutButton,
  StyledSecundaryButton,
} from "./style";
import { toast } from "react-toastify";

interface Props {
  options: DashboardOptions[];
  logout: LogoutProps;
}

const AccountSideBarButtons = ({ options, logout }: Props) => {
  const navigate = useNavigate();

  const { isLogged, isLoading, error } = useAuthenticationValidation(
    getCookie("token")
  );

  useLayoutEffect(() => {
    if (!isLoading && !isLogged) {
      navigate("/");
    }
  }, [isLoading]);

  const logoutFunc = () => {
    deleteCookie("token");
    toast.success("Logged out!")
    navigate("/");
  };

  return (
    <DashboardButtonsContainer>
      <DashboardNavButtonsContainer>
        {Object.entries(options).map((value, key) => {
          return (
            <StyledSecundaryButton
              key={key}
              onClick={() => navigate(value[1].path)}
            >
              <DashboardButtonLogoContainer>
                {value[1].icon}
              </DashboardButtonLogoContainer>
              <DashboardTextContainer>{value[1].text}</DashboardTextContainer>
            </StyledSecundaryButton>
          );
        })}
      </DashboardNavButtonsContainer>
      <StyledLogoutButton>
        <DashboardButtonLogoContainer>
          {logout.icon}
        </DashboardButtonLogoContainer>
        <DashboardTextContainer onClick={() => logoutFunc()}>
          {logout.text}
        </DashboardTextContainer>
      </StyledLogoutButton>
    </DashboardButtonsContainer>
  );
};

export default AccountSideBarButtons;
