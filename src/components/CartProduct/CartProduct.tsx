import React, { useState } from "react";
import { useNavigate } from "react-router";
import noImage from "../../assets/noImageAvailable.png";
import { Container, ProductPhotoDiv, ProductDetails, Trash } from "./style";
import { useDispatch } from "react-redux";

export interface CartProps {
  id: number;
  name: string;
  photo: string;
  price: number;
  className?: string;
  quantity: string;
}
const CartProduct = ({
  id,
  name,
  photo,
  price,
  className,
  quantity,
}: CartProps) => {
  const [prodQuantity, setProdQuantity] = useState(parseInt(quantity));
  const [prodPrice, setProdPrice] = useState(price);
  const [hideProduct, setHideProduct] = useState(true);

  const navigate = useNavigate();

  function handleProductPlus() {
    setProdQuantity(() => prodQuantity + 1);
    setProdPrice(price * (prodQuantity + 1));
  }
  function handleProductMinus() {
    if (prodQuantity > 1) {
      setProdQuantity(prodQuantity - 1);
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
            <span style={{ fontSize: "16px", margin: "8px", width: "130px" }}>
              Quantity: {prodQuantity}
              <button
                onClick={() => handleProductPlus()}
                style={{ margin: "5px" }}
              >
                +
              </button>
              <button
                onClick={() => handleProductMinus()}
                style={{ margin: "5px" }}
              >
                -
              </button>
            </span>
            <button
              onClick={() => {
                handleProductTrash();
              }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
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