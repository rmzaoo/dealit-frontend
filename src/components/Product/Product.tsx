import React from "react";
import { useNavigate } from "react-router-dom";
import { PrimaryButton } from "../PrimaryButton/style";
import { Container, ProductDetails, ProductPhotoDiv } from "./styled";

interface Props {
  id: number;
  name: string;
  photos: string[];
  price: number;
  className?: string;
}

const Product = ({ name, photos, price, className }: Props) => {
  const navigate = useNavigate();
  return (
    <Container className={className} onClick={() => navigate(`/product/${id}`)}>
      <ProductPhotoDiv>
        <img src={photos[0]} />
      </ProductPhotoDiv>
      <ProductDetails>
        <h1>{name}</h1>
        <span>${price}</span>
        <section>
          <PrimaryButton>View Product</PrimaryButton>
        </section>
      </ProductDetails>
    </Container>
  );
};

export default Product;
