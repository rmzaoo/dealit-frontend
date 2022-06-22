import React, { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuthenticationValidation from "../../hooks/user/useAuthenticationValidation";
import { getCookie } from "../../utils/cookies";
import { ContainerDashboard } from "./styled";

const Dashboard = () => {
  const { isLogged, isLoading, error } = useAuthenticationValidation(
    getCookie("token")
  );
  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (!isLoading && !isLogged) {
      navigate("/");
    }
  }, [isLoading]);

  console.log(isLoading);
  console.log(isLogged);

  return !isLoading && isLogged ? (
    <ContainerDashboard>
      <h1>Dashboard</h1>
    </ContainerDashboard>
  ) : null;
};

export default Dashboard;
