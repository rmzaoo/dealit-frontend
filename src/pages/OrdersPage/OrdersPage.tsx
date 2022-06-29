import React, { useState } from "react";
import Order from "../../components/Order";
import {
  OrderPageBody,
  OrderPageHeader,
  OrdersButtonsContainer,
  StyledTextLink,
} from "./style";

const OrdersPage = () => {
  const [sortBy, setSortBy] = useState<string>("bought");

  return (
    <OrderPageBody>
      <OrderPageHeader>
        <h2>My Orders</h2>
      </OrderPageHeader>
      <OrdersButtonsContainer>
        <StyledTextLink
          active={sortBy === "bought"}
          onClick={() => setSortBy("bought")}
        >
          Bought
        </StyledTextLink>
        <StyledTextLink
          active={sortBy === "sold"}
          onClick={() => setSortBy("sold")}
        >
          Sold
        </StyledTextLink>
      </OrdersButtonsContainer>
      <Order />
    </OrderPageBody>
  );
};

export default OrdersPage;
