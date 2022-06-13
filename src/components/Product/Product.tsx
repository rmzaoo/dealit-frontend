import React from "react";
import { PrimaryButton } from "../PrimaryButton/style";
import {
  Container,
  ProductDetails,
  ProductPhotoDiv,
} from "./styled";

interface Props {
  name: string;
  photos: string[];
  price: number;
  className?: string;
}

const Product = ({ name, photos, price, className }: Props) => {
  return (
    <Container className={className}>
      <ProductPhotoDiv>
        <img src={photos[0]} />
      </ProductPhotoDiv>
      <ProductDetails>
        <h1>{name}</h1>
        <span>${price}</span>
        <PrimaryButton>View Product</PrimaryButton>
      </ProductDetails>
    </Container>
  );
};

export default Product;
