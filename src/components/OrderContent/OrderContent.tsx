import React, { useState } from "react";
import { OrderProp } from "../../pages/OrdersPage/OrdersPage";
import { ProductDetailsProp } from "../../pages/PDP/PDP";
import OrderProduct from "../OrderProduct/OrderProduct";
import {
  OrderContentDetailsContainer,
  OrderContentDetailsDeliveryDateContainer,
  OrderContentDetailsProducts,
} from "./style";

interface Props {
  orderDetails: OrderProp;
  products: ProductDetailsProp[];
}

const OrderContent = ({ orderDetails, products }: Props) => {
  const [delivDate, setDelivDate] = useState<Date>();

  const options: any = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  if (orderDetails.deliveryDate === null) {
    const numberOfDaysToAdd = 6;
    const buyDate = new Date(orderDetails.buyDate);
    const mockDelivDate = buyDate.setDate(
      buyDate.getDate() + numberOfDaysToAdd
    );
    setDelivDate(new Date(mockDelivDate));
  }
  if (orderDetails.deliveryDate) {
    const delivDate = new Date(orderDetails.deliveryDate);
  }

  return (
    <OrderContentDetailsContainer>
      {delivDate && (
        <OrderContentDetailsDeliveryDateContainer>
          {orderDetails.deliveryDate && (
            <h2>
              Delivered in {delivDate.toLocaleDateString("en-US", options)}
            </h2>
          )}
          <h2>Delivered in {delivDate.toLocaleDateString("en-US", options)}</h2>
        </OrderContentDetailsDeliveryDateContainer>
      )}
      <OrderContentDetailsProducts>
        {products.map((value, key) => {
          return <OrderProduct products={products} product={value} />;
        })}
      </OrderContentDetailsProducts>
    </OrderContentDetailsContainer>
  );
};

export default OrderContent;
