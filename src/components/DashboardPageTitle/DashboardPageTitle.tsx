import React from "react";
import { HeaderComponentContainer } from "./style";

interface Props {
  children?: React.ReactNode;
}

const DashboardPageTitle = ({ children }: Props) => {
  return <HeaderComponentContainer>{children}</HeaderComponentContainer>;
};

export default DashboardPageTitle;
