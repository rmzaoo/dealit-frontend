import React, { useEffect, useLayoutEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchOrdersByUserId } from "../../api/ordersFetch";
import Order from "../../components/Order";
import { InitialStateProps } from "../AccountSettingsPage/AccountSettingsPage";
import {
  OrderPageBody,
  OrderPageHeader,
  OrdersButtonsContainer,
  StyledTextLink,
} from "./style";

const OrdersPage = () => {
  const user = useSelector((state: InitialStateProps) => state.user);
  const [sortBy, setSortBy] = useState<string>("bought");
  const [orders, setOrders] = useState<any>();

  useLayoutEffect(() => {
    fetchOrdersByUserId(user.id, user.token).then((data) => {
      setOrders(data);
    });
  }, []);

  if (orders) {
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
        {sortBy === "bought" && (
          <Order order={orders[0]} buyer={user.username} />
        )}
      </OrderPageBody>
    );
  } else {
    return null;
  }
};

export default OrdersPage;
