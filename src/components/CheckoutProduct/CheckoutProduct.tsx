import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Container } from "./style";
import { useDispatch, useSelector } from "react-redux";

export interface CartProps {
  id: number;
  name: string;
  photo: string;
  price: number;
  className?: string;
  quantity: number;
}
const CheckoutProduct = ({
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
  }, [cart]);

  return (
    <>
      <Container className={className}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <h1 onClick={() => navigate(`/product/${id}`)}>{name}</h1>
          <span style={{ fontSize: "16px", width: "100%" }}>
            Quantity & Price: {prodQuantity} x {price}$
          </span>
        </div>
        <div
          style={{
            alignSelf: "flex-end",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span>{prodPrice}$</span>
        </div>
      </Container>
    </>
  );
};

export default CheckoutProduct;
