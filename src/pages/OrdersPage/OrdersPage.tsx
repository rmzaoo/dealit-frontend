import React, { useEffect, useLayoutEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchOrdersByUserId } from "../../api/ordersFetch";
import Order from "../../components/Order/Order";
import { InitialStateProps } from "../AccountSettingsPage/AccountSettingsPage";
import { ProductDetailsProp } from "../PDP/PDP";
import {
  OrderIllustrationPageBody,
  OrderImageContainer,
  OrderPageBody,
  OrderPageHeader,
  OrderPageImgAndTextContainer,
  OrderPageText,
  OrderPageTextContainer,
} from "./style";
import noOrder from "../../assets/noOrder.svg";

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
  const [orders, setOrders] = useState<OrderProp>();

  useLayoutEffect(() => {
    fetchOrdersByUserId(user.id, user.token).then((data) => {
      setOrders(data);
    });
  }, []);

  console.log(orders);

  if (orders) {
    if (orders.length > 0) {
      return (
        <OrderPageBody>
          <OrderPageHeader>
            <h2>My Orders</h2>
          </OrderPageHeader>
          {orders.map((value: any, key: any) => {
            return <Order order={value} buyer={user.username} />;
          })}
        </OrderPageBody>
      );
    } else {
      return (
        <OrderIllustrationPageBody>
          <OrderPageHeader>
            <h2>My Orders</h2>
          </OrderPageHeader>
          <OrderPageImgAndTextContainer>
            <OrderPageTextContainer>
              <OrderPageText>No orders have been placed!</OrderPageText>
            </OrderPageTextContainer>
            <OrderImageContainer>
              <img src={noOrder} />
            </OrderImageContainer>
          </OrderPageImgAndTextContainer>
        </OrderIllustrationPageBody>
      );
    }
  } else {
    return null;
  }
};

export default OrdersPage;
