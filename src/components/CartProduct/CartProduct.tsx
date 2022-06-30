import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import noImage from "../../assets/noImageAvailable.png";
import { Container, ProductPhotoDiv, ProductDetails, Trash } from "./style";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProductByCategory,
  fetchProductById,
} from "../../api/productsFetch";

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
  const [prodPrice, setProdPrice] = useState(price * quantity);
  const cart = useSelector((state: any) => state.cart);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function handleProductPlus() {
    const fetchProd = await fetchProductById(id);
    dispatch({
      type: "ADD",
      payload: { product: fetchProd, quantity: prodQuantity },
    });
    dispatch({ type: "SET_COMBINED_PRICE", payload: {} });
  }

  async function handleProductMinus() {
    if (quantity === 1 || quantity === 0) {
      return;
    }
    dispatch({
      type: "REMOVE",
      payload: { id },
    });
    dispatch({ type: "SET_COMBINED_PRICE", payload: {} });
  }

  useEffect(() => {
    setProdQuantity(quantity);
  }, []);

  useEffect(() => {
    setProdQuantity(
      cart.map((e: any) => {
        if (e.product.id === id) {
          return e.quantity;
        }
      })
    );
    setProdPrice(
      cart.map((e: any) => {
        if (e.product.id === id) {
          return e.quantity * e.product.price;
        }
      })
    );
    localStorage.setItem("shoppingCart", cart);
  }, [cart]);

  function handleProductTrash() {
    dispatch({ type: "REMOVE_ALL", payload: { id } });
    dispatch({ type: "SET_COMBINED_PRICE", payload: {} });
    localStorage.setItem("shoppingCart", cart.cart);
  }

  return (
    <>
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
          <span style={{ fontSize: "16px", margin: "8px", width: "130px" }}>
            Quantity: {prodQuantity}
            <button
              onClick={() => handleProductMinus()}
              style={{ margin: "5px" }}
            >
              -
            </button>
            <button
              onClick={() => handleProductPlus()}
              style={{ margin: "5px" }}
            >
              +
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
    </>
  );
};

export default CartProduct;
