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

  const orderDetails = order[0];
  const orderProducts = order[0].products;
  const placeDate = new Date(orderDetails.buyDate);
  console.log(order);

  return (
    <OrderContainer>
      <OrderContainerHeader>
        <OrderHeaderDetails
          title={"Order placed"}
          value={placeDate.toLocaleDateString("en-US", options)}
        />
        <OrderHeaderDetails title={"Total"} value={"$" + orderDetails.total} />
        <OrderHeaderDetails title={"Sent to"} value={buyer} />
        <OrderHeaderDetails title={"Order Number"} value={orderDetails.id} />
      </OrderContainerHeader>
      <OrderContainerBody>
        <OrderContent
          orderDetails={orderDetails}
          products={orderProducts}
        />
      </OrderContainerBody>
    </OrderContainer>
  );
};

export default Order;
