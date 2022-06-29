import React, { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuthenticationValidation from "../../hooks/user/useAuthenticationValidation";
import { useDispatch } from "react-redux";
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
  const dispatch = useDispatch();
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
    toast.success("Logged out!");
    dispatch({ type: "RESET_INITIAL_STATE", payload: {} });
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
      <StyledLogoutButton onClick={() => logoutFunc()}>
        <DashboardButtonLogoContainer>
          {logout.icon}
        </DashboardButtonLogoContainer>
        <DashboardTextContainer>{logout.text}</DashboardTextContainer>
      </StyledLogoutButton>
    </DashboardButtonsContainer>
  );
};

export default AccountSideBarButtons;
function dispatch(arg0: () => void) {
  throw new Error("Function not implemented.");
}
