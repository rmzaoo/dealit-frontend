import React from "react";
import {
  OrderContentDetailsContainer,
  OrderContentDetailsDeliveryDateContainer,
} from "./style";

interface Props {
  deliveryDate: Date;
}

const OrderContent = ({ deliveryDate }: Props) => {
  const options: any = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const date = new Date(deliveryDate);

  return (
    <OrderContentDetailsContainer>
      <OrderContentDetailsDeliveryDateContainer>
        <h2>
          Delivered in {date.toLocaleDateString("en-US", options)}
        </h2>
      </OrderContentDetailsDeliveryDateContainer>
    </OrderContentDetailsContainer>
  );
};

export default OrderContent;
