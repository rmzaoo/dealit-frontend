import {
  ArrowRight,
  CheckoutButton,
  CloseButton,
  CombinedPrice,
  PageOutSidebar,
  ProductsContainer,
  SidebarContainer,
  SidebarOut,
} from "./style";
import { useEffect, useState } from "react";
import CartProduct from "../CartProduct/CartProduct";
import { useDispatch, useSelector } from "react-redux";
import emptyCart from "../../assets/emptyCart.svg";
import { useNavigate } from "react-router";

const Sidebar: any = () => {
  const [productPrice, setProductPrice] = useState(0);
  const context: any = useSelector((state) => state);
  const [animateOut, setAnimateOut] = useState(false);
  const [opened, setOpened] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleNavigate() {
    navigate("/");
    setOpened(false);
    setAnimateOut(true);
   setTimeout( () => dispatch({ type: "SEND_OPENED", payload: { opened:false } }), 500)

  }
  function handleClick() {
    setOpened(false);
    setAnimateOut(true);
    setTimeout( () => dispatch({ type: "SEND_OPENED", payload: { opened:false } }), 500)

  }

  if (context.cart.length === 0) {
    return (
      <>
        {animateOut === false ? (
          <>
            <PageOutSidebar onClick={() => handleClick()} />
            <SidebarContainer>
              <CloseButton onClick={() => handleClick()}>
                <ArrowRight />
              </CloseButton>
              <h2
                style={{
                  position: "fixed",
                  top: "30px",
                }}
              >
                Your Cart
              </h2>
              <h1
                style={{
                  fontSize: "20px",
                  position: "fixed",
                  top: "100px",
                  textAlign: "center",
                }}
              >
                There's nothing here! Try to add something to the cart
              </h1>
              <img
                src={emptyCart}
                style={{ width: "80%", height: "100%", marginBottom: "220px" }}
              />
              <CheckoutButton onClick={() => handleNavigate()}>
                DISCOVER!
              </CheckoutButton>
            </SidebarContainer>
          </>
        ) : (
          <>
            <SidebarOut>
              <CloseButton onClick={() => handleClick()}>
                <ArrowRight />
              </CloseButton>
              <h2
                style={{
                  position: "fixed",
                  top: "30px",
                }}
              >
                Your Cart
              </h2>
              <h1
                style={{
                  fontSize: "20px",
                  position: "fixed",
                  top: "100px",
                  textAlign: "center",
                }}
              >
                There's nothing here! Try to add something to the cart
              </h1>
              <img
                src={emptyCart}
                style={{ width: "80%", height: "100%", marginBottom: "220px" }}
              />
              <CheckoutButton onClick={() => handleNavigate()}>
                DISCOVER!
              </CheckoutButton>
            </SidebarOut>
          </>
        )}
      </>
    );
  } else if (context.cart.length > 0) {
    return (
      <>
        {animateOut === false ? (
          <>
            <PageOutSidebar onClick={() => handleClick()} />
            <SidebarContainer>
              <CloseButton onClick={() => handleClick()}>
                <ArrowRight />
              </CloseButton>
              <h2
                style={{
                  position: "fixed",
                  top: "10px",
                }}
              >
                Your Cart
              </h2>
              <ProductsContainer>
                {context.cart.map((item: any, index: number) => {
                  return (
                    <>
                      <CartProduct
                        id={item.product.id}
                        name={item.product.name}
                        photo={item.product.photos[0]}
                        price={item.product.price * item.quantity}
                        key={index}
                        quantity={item.quantity}
                      ></CartProduct>
                    </>
                  );
                })}
              </ProductsContainer>
              <CombinedPrice>
                <span>Total:</span>
                <span>{productPrice} $</span>
              </CombinedPrice>
              <CheckoutButton>CHECKOUT</CheckoutButton>
            </SidebarContainer>
          </>
        ) : (
          <SidebarOut>
            <CloseButton onClick={() => handleClick()}>
              <ArrowRight />
            </CloseButton>
            <h2
              style={{
                position: "fixed",
                top: "10px",
              }}
            >
              Your Cart
            </h2>
            <ProductsContainer>
              {context.cart.map((item: any, index: number) => {
                return (
                  <>
                    <CartProduct
                      id={item.product.id}
                      name={item.product.name}
                      photo={item.product.photos[0]}
                      price={item.product.price}
                      key={index}
                      quantity={item.quantity}
                    ></CartProduct>
                  </>
                );
              })}
            </ProductsContainer>
            <CombinedPrice>
              <span>Total:</span>
              <span>{productPrice} $</span>
            </CombinedPrice>
            <CheckoutButton>CHECKOUT</CheckoutButton>
          </SidebarOut>
        )}
      </>
    );
  }
};
export default Sidebar;
