import React, { useEffect, useState } from "react";
import { ProductDetailsProp } from "../../pages/PDP/PDP";
import {
  OrderProductContainer,
  OrderProductNameContainer,
  OrderProductPhoto,
  OrderProductPhotoContainer,
  OrderProductQuantityContainer,
  OrderProductQuantityText,
  OrderProductQuantityTextContainer,
  OrderProductQuantityValue,
  OrderProductQuantityValueContainer,
} from "./style";

interface Props {
  products: ProductDetailsProp[];
  product: ProductDetailsProp;
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

  console.log(product);

  return (
    <OrderProductContainer>
      <OrderProductPhotoContainer>
        <OrderProductPhoto src={product} />
      </OrderProductPhotoContainer>
      <OrderProductNameContainer>
        <p>{product.name}</p>
      </OrderProductNameContainer>
      <OrderProductQuantityContainer>
        <OrderProductQuantityTextContainer>
          <OrderProductQuantityText>Quantity:</OrderProductQuantityText>
        </OrderProductQuantityTextContainer>
        <OrderProductQuantityValueContainer>
          <OrderProductQuantityValue>{quantity}</OrderProductQuantityValue>
        </OrderProductQuantityValueContainer>
      </OrderProductQuantityContainer>
    </OrderProductContainer>
  );
};

export default OrderProduct;
