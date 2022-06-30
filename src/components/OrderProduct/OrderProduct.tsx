import React, { useEffect, useState } from "react";
import {
  OrderProductContainer,
  OrderProductName,
  OrderProductNameAndQuantityContainer,
  OrderProductNameContainer,
  OrderProductPhoto,
  OrderProductPhotoContainer,
  OrderProductQuantityContainer,
  OrderProductQuantityText,
  OrderProductQuantityTextContainer,
  OrderProductQuantityValue,
  OrderProductQuantityValueContainer,
} from "./style";

export interface OrderProductProp {
  map(arg0: (value: any, key: any) => JSX.Element): React.ReactNode;
  name: string;
  photo: string;
  quantity: number;
  price: string;
}

interface Props {
  products: OrderProductProp[];
  product: OrderProductProp;
}

const OrderProduct = ({ products, product }: Props) => {
  const [quantity, setQuantity] = useState<number>(0);

  useEffect(() => {
    let qtn = 0;
    products.forEach((val) => {
      if (val.name === product.name) {
        qtn++;
      }
    });
    setQuantity(qtn);
  }, [product]);

  return (
    <OrderProductContainer>
      <OrderProductPhotoContainer>
        <OrderProductPhoto src={product.photo} />
      </OrderProductPhotoContainer>
      <OrderProductNameAndQuantityContainer>
      <OrderProductNameContainer>
        <OrderProductName>{product.name}</OrderProductName>
      </OrderProductNameContainer>
      <OrderProductQuantityContainer>
        <OrderProductQuantityTextContainer>
          <OrderProductQuantityText>Quantity:</OrderProductQuantityText>
        </OrderProductQuantityTextContainer>
        <OrderProductQuantityValueContainer>
          <OrderProductQuantityValue>
            {product.quantity}
          </OrderProductQuantityValue>
        </OrderProductQuantityValueContainer>
      </OrderProductQuantityContainer>
      </OrderProductNameAndQuantityContainer>
    </OrderProductContainer>
  );
};

export default OrderProduct;
