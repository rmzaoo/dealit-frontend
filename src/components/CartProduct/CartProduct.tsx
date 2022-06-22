import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router";
import noImage from "../../assets/noImageAvailable.png";
import { Container, ProductPhotoDiv, ProductDetails, Trash } from "./style";

export interface CartProps {
  id: number;
  name: string;
  photo: string;
  price: number;
  className?: string;
  quantity: number;
}
const CartProduct = ({
  id,
  name,
  photo,
  price,
  className,
  quantity,
}: CartProps) => {
  const [prodQuantity, setProdQuantity] = useState(quantity);
  const [prodPrice, setProdPrice] = useState(price);
  const navigate = useNavigate();
  function handleProduct() {
    setProdQuantity(()=>prodQuantity + 1);
    setProdPrice(price * prodQuantity);
  }

  console.log(prodQuantity);
  console.log(prodPrice);

  return (
    <Container className={className}>
      <ProductPhotoDiv>
        <img
          src={photo}
          onError={(e) => (e.currentTarget.src = noImage)}
          alt="product in cart"
          onClick={() => navigate(`/product/${id}`)}
        />
      </ProductPhotoDiv>
      <ProductDetails>
        <h1 onClick={() => navigate(`/product/${id}`)}>{name}</h1>
        <span>{prodPrice} $</span>
        <span style={{ fontSize: "16px", margin: "8px" }}>
          Quantity: {prodQuantity}
          <button onClick={() => handleProduct()} style={{marginLeft: "10px"}}>+</button>
        </span>
        <button>
          <Trash />
        </button>
      </ProductDetails>
    </Container>
  );
};

export default CartProduct;
