import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import noImage from "../../assets/noImageAvailable.png";
import { Container, ProductPhotoDiv, ProductDetails, Trash } from "./style";
import { useDispatch } from "react-redux";
import store from "../../redux/store";

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
  const [hideProduct, setHideProduct] = useState(true);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleProductPlus() {
    setProdQuantity(() => prodQuantity + 1);
    setProdPrice(price * (prodQuantity + 1));
  }
  function handleProductMinus() {
    if (prodQuantity > 1) {
      setProdQuantity(() => prodQuantity - 1);
      setProdPrice(price * (prodQuantity - 1));
    } else {
      setProdQuantity(1);
      setProdPrice(prodPrice * prodQuantity);
    }
  }

  function handleProductTrash() {
    setProdQuantity(0);
    setHideProduct(false);
  }
  console.log(prodQuantity);
  console.log(prodPrice);

  return (
    <>
      {hideProduct && (
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
            <span>
              {prodQuantity > 1
                ? Math.round((prodPrice + Number.EPSILON) * 100) / 100
                : prodPrice}
              $
            </span>
            <span style={{ fontSize: "16px", margin: "8px" }}>
              Quantity: {prodQuantity}
              <button
                onClick={() => handleProductPlus()}
                style={{ marginLeft: "10px" }}
              >
                +
              </button>
              <button
                onClick={() => handleProductMinus()}
                style={{ marginLeft: "10px" }}
              >
                -
              </button>
            </span>
            <button
              onClick={() => {
                handleProductTrash();
              }}
            >
              <Trash />
            </button>
          </ProductDetails>
        </Container>
      )}
    </>
  );
};

export default CartProduct;
