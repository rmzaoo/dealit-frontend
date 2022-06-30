import React from "react";
import OrderContent from "../OrderContent";
import OrderHeaderDetails from "../OrderHeaderDetails";
import {
  OrderContainer,
  OrderContainerBody,
  OrderContainerHeader,
} from "./style";

interface Props {
  order: any;
  buyer: string;
}

const Order = ({ order, buyer }: Props) => {
  const options: any = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };

  const orderDetails = order.order;
  const orderProducts = order.products;
  const placeDate = new Date(orderDetails.buyDate);


  return (
    <OrderContainer>
      <OrderContainerHeader>
        <OrderHeaderDetails
          title={"Order placed"}
          value={placeDate.toLocaleDateString("en-US", options)}
        />
        <OrderHeaderDetails title={"Total"} value={"-"} />
        <OrderHeaderDetails title={"Sent to"} value={buyer} />
        <OrderHeaderDetails title={"Order Number"} value={orderDetails.id} />
      </OrderContainerHeader>
      <OrderContainerBody>
        <OrderContent
          deliveryDate={orderDetails.deliveryDate}
          products={orderProducts}
        />
      </OrderContainerBody>
    </OrderContainer>
  );
};

export default Order;