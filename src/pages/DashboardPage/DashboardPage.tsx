import React from "react";
import { Outlet } from "react-router-dom";
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

  return (
    <DashboardPageContainer>
      <DashboardPageSideBarContainer>
        <DashboardSideBarButton options={options} />
      </DashboardPageSideBarContainer>
      <DashboardPageContentContainer>
        <Outlet />
      </DashboardPageContentContainer>
    </DashboardPageContainer>
  );
};

export default DashboardPage;
