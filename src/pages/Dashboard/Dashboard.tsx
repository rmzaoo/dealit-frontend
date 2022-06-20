import React, { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuthenticationValidation from "../../hooks/user/useAuthenticationValidation";
import { getCookie } from "../../utils/cookies";

const Dashboard = () => {
  const { isLogged, isLoading, error } = useAuthenticationValidation(
    getCookie("token")
  );
  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (!isLogged) {
      navigate("/");
    }
  }, [isLoading]);

  return (
    !isLoading &&
    isLogged && (
      <div>
        <h1>Dashboard</h1>
      </div>
    )
  );
};

export default Dashboard;
