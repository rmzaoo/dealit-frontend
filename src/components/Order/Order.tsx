import React from "react";
import OrderContent from "../OrderContent/OrderContent";
import OrderHeaderDetails from "../OrderHeaderDetails/OrderHeaderDetails";
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

  const orderDetails = order;
  const orderProducts = order.products;
  const placeDate = new Date(orderDetails.buyDate);

  return (
    <OrderContainer>
      <OrderContainerHeader>
        <OrderHeaderDetails
          title={"Order placed"}
          value={placeDate.toLocaleDateString("en-US", options)}
        />
        <OrderHeaderDetails
          title={"Total"}
          value={
            "$" +
            Math.round((Number(orderDetails.total) + Number.EPSILON) * 100) /
              100
          }
        />
        <OrderHeaderDetails title={"Sent to"} value={buyer} />
        <OrderHeaderDetails title={"Order Number"} value={orderDetails.id} />
      </OrderContainerHeader>
      <OrderContainerBody>
        <OrderContent orderDetails={orderDetails} products={orderProducts} />
      </OrderContainerBody>
    </OrderContainer>
  );
};

export default Order;
