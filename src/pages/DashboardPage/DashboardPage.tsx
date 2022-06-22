import React, { useLayoutEffect } from "react";
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
import DashboardSideBarButton from "../../components/DashboardSideBarButton/DashboardSideBarButton";
import { getCookie } from "../../utils/cookies";
import useAuthenticationValidation from "../../hooks/user/useAuthenticationValidation";

interface DashboardOptions {
  icon: any;
  text: string;
  path: string;
}

const DashboardPage = () => {
  const options: DashboardOptions[] = [
    { icon: <CgProfile size={28} />, text: "My Profile", path: "./profile" },
    { icon: <BsBoxSeam size={28} />, text: "My Orders", path: "./orders" },
    {
      icon: <AiOutlineSecurityScan size={28} />,
      text: "Log in and security",
      path: "./settings",
    },
    {
      icon: <BsFillSignpost2Fill size={28} />,
      text: "My addresses",
      path: "./addresses",
    },
    { icon: <FaWallet size={28} />, text: "My cards", path: "./cards" },
  ];
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
    <DashboardPageContainer>
      <DashboardPageSideBarContainer>
        <DashboardSideBarButton options={options} />
      </DashboardPageSideBarContainer>
      <DashboardPageContentContainer>
        <Outlet />
      </DashboardPageContentContainer>
    </DashboardPageContainer>
  ) : null;
};

export default DashboardPage;
