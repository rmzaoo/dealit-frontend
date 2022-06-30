import React, { useEffect, useLayoutEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import {
  DashboardPageContainer,
  DashboardPageContentContainer,
  DashboardPageSideBarContainer,
} from "./style";
import { CgProfile } from "react-icons/cg";
import { BsBoxSeam, BsFillSignpost2Fill } from "react-icons/bs";
import { AiOutlineSecurityScan } from "react-icons/ai";
import { FaWallet } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import DashboardSideBarButton from "../../components/DashboardSideBarButton/DashboardSideBarButton";
import { getCookie } from "../../utils/cookies";
import useAuthenticationValidation from "../../hooks/user/useAuthenticationValidation";

export interface DashboardOptions {
  icon: JSX.Element;
  text: string;
  path: string;
}
export interface LogoutProps {
  icon: JSX.Element;
  text: string;
}

const DashboardPage = () => {
  const options: DashboardOptions[] = [
    { icon: <CgProfile size={28} />, text: "My Profile", path: "" },
    { icon: <BsBoxSeam size={28} />, text: "My Orders", path: "./orders" },
    {
      icon: <AiOutlineSecurityScan size={28} />,
      text: "Account Settings",
      path: "./settings",
    },
    {
      icon: <BsFillSignpost2Fill size={28} />,
      text: "My addresses",
      path: "./addresses",
    },
    { icon: <FaWallet size={28} />, text: "My cards", path: "./cards" },
  ];
  const logoutBtn: LogoutProps = {
    icon: <BiLogOut size={28} />,
    text: "Logout",
  };

  const { isLogged, isLoading, error } = useAuthenticationValidation(
    getCookie("token")
  );
  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (!isLoading && !isLogged) {
      navigate("/");
    }
  }, [isLoading]);

  return !isLoading && isLogged ? (
    <DashboardPageContainer>
      <DashboardPageSideBarContainer>
        <DashboardSideBarButton options={options} logout={logoutBtn} />
      </DashboardPageSideBarContainer>
      <DashboardPageContentContainer>
        <Outlet />
      </DashboardPageContentContainer>
    </DashboardPageContainer>
  ) : null;
};

export default DashboardPage;
