import React from "react";
import DashboardPageTitle from "../../components/DashboardPageTitle/DashboardPageTitle";
import { MyProductsPageContainer, MyProductsTitleContainer } from "./style";

const MyProducts = () => {
  return (
    <MyProductsPageContainer>
      <MyProductsTitleContainer>
        <h2>My Products</h2>
      </MyProductsTitleContainer>
    </MyProductsPageContainer>
  );
};

export default MyProducts;
