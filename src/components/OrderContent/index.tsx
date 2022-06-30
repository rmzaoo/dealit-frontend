import React, { useState } from "react";
import { ProductDetailsProp } from "../../pages/PDP/PDP";
import OrderProduct from "../OrderProduct";
import {
  OrderContentDetailsContainer,
  OrderContentDetailsDeliveryDateContainer,
  OrderContentDetailsProducts,
} from "./style";

interface Props {
  deliveryDate: Date;
  products: ProductDetailsProp[];
}

const OrderContent = ({ deliveryDate, products }: Props) => {
  const options: any = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const date = new Date(deliveryDate);
  const uniqueProducts = Array.from(new Set(products))

  return (
    <OrderContentDetailsContainer>
      <OrderContentDetailsDeliveryDateContainer>
        <h2>Delivered in {date.toLocaleDateString("en-US", options)}</h2>
      </OrderContentDetailsDeliveryDateContainer>
      <OrderContentDetailsProducts>
        {uniqueProducts.map((value, key) => {
          return <OrderProduct products={products} product={value} />
        })}
      </OrderContentDetailsProducts>
    </OrderContentDetailsContainer>
  );
};

export default OrderContent;
