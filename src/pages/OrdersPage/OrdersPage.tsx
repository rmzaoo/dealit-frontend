import React, { useEffect, useLayoutEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchOrdersByUserId } from "../../api/ordersFetch";
import Order from "../../components/Order/Order";
import { InitialStateProps } from "../AccountSettingsPage/AccountSettingsPage";
import { ProductDetailsProp } from "../PDP/PDP";
import {
  OrderPageBody,
  OrderPageHeader,
  OrdersButtonsContainer,
  StyledTextLink,
} from "./style";

export interface OrderProp {
  map(arg0: (value: any, key: any) => JSX.Element): React.ReactNode;
  length: number;
  id: number;
  buyDate: Date;
  sendDate?: Date;
  deliveryDate?: Date;
  userId: number;
  creditCardId: number;
  total: number;
  productsInOrder: ProductDetailsProp[];
}

const OrdersPage = () => {
  const user = useSelector((state: InitialStateProps) => state.user);
  const [sortBy, setSortBy] = useState<string>("bought");
  const [orders, setOrders] = useState<OrderProp>();

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
        {/**  <OrdersContainer>*/}
        {sortBy === "bought" &&
          orders.map((value: any, key: any) => {
            console.log(value);
            return <Order order={value} buyer={user.username} />;
          })}
        {/** </OrdersContainer>*/}
      </OrderPageBody>
    );
  } else {
    return <h1>Not Found!</h1>;
  }
};

export default OrdersPage;
