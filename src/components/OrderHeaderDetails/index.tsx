import React from "react";
import {
  OrderDetailsContainer,
  OrderDetailsTextContainer,
  OrderDetailsTitle,
  OrderText,
  OrderTitleContainer,
} from "./style";

interface Props {
  title: string;
  value: string;
}

const OrderDetails = ({ title, value }: Props) => {
  return (
    <OrderDetailsContainer>
      <OrderTitleContainer>
        <OrderDetailsTitle>{title}</OrderDetailsTitle>
      </OrderTitleContainer>
      <OrderDetailsTextContainer>
        <OrderText>{value}</OrderText>
      </OrderDetailsTextContainer>
    </OrderDetailsContainer>
  );
};

export default OrderDetails;
