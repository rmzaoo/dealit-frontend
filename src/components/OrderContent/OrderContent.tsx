import React, { useEffect, useState } from "react";
import { OrderProp } from "../../pages/OrdersPage/OrdersPage";
import { ProductDetailsProp } from "../../pages/PDP/PDP";
import OrderProduct, { OrderProductProp } from "../OrderProduct/OrderProduct";
import {
  OrderContentDetailsContainer,
  OrderContentDetailsDeliveryDateContainer,
  OrderContentDetailsProducts,
} from "./style";

interface Props {
  orderDetails: OrderProp;
  products: OrderProductProp[];
}

const OrderContent = ({ orderDetails, products }: Props) => {
  const [delivDate, setDelivDate] = useState<Date>();

  const options: any = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  useEffect(() => {
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
      setDelivDate(delivDate);
    }
  }, []);

  console.log(delivDate);

  if (products) {
    return (
      <OrderContentDetailsContainer>
        {delivDate && (
          <OrderContentDetailsDeliveryDateContainer>
            {orderDetails.deliveryDate && (
              <h2>
                Delivered in {delivDate.toLocaleDateString("en-US", options)}
              </h2>
            )}
            <h2>
              Expected to arrive in{" "}
              {delivDate.toLocaleDateString("en-US", options)}
            </h2>
          </OrderContentDetailsDeliveryDateContainer>
        )}
        <OrderContentDetailsProducts>
          {products.map((value, key) => {
            return (
              <OrderProduct products={products} key={key} product={value} />
            );
          })}
        </OrderContentDetailsProducts>
      </OrderContentDetailsContainer>
    );
  } else {
    return null;
  }
};

export default OrderContent;
