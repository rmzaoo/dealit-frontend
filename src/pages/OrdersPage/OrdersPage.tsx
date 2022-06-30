import React, { useEffect, useLayoutEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchOrdersByUserId } from "../../api/ordersFetch";
import Order from "../../components/Order";
import { InitialStateProps } from "../AccountSettingsPage/AccountSettingsPage";
import { ProductDetailsProp } from "../PDP/PDP";
import {
  OrderPageBody,
  OrderPageHeader,
  OrdersButtonsContainer,
  OrdersContainer,
  StyledTextLink,
} from "./style";

export interface OrderProp {
  map(arg0: (value: OrderProp[], key: any) => void): React.ReactNode;
  order: OrderDetailsProp[];
  products: ProductDetailsProp[];
}

export interface OrderDetailsProp {
  id: number;
  buyer: Date;
  sendDate: Date;
  deliveryDate: Date;
  userId: number;
  sellerName: string;
  creditCardId: number;
}

const OrdersPage = () => {
  const user = useSelector((state: InitialStateProps) => state.user);
  const [sortBy, setSortBy] = useState<string>("bought");
  const [orders, setOrders] = useState<OrderProp[]>();

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
        <OrdersContainer>
          <>
            {sortBy === "bought" &&
              orders.map((value: OrderProp, key: number) => {
                console.log(value.order);
                <Order order={value.order} buyer={user.username} />;
              })}
          </>
        </OrdersContainer>
      </OrderPageBody>
    );
  } else {
    return null;
  }
};

export default OrdersPage;
