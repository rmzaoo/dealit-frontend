import {
  ArrowRight,
  CloseButton,
  CombinedPrice,
  PageOutSidebar,
  ProductCart,
  SidebarContainer,
  SidebarOut,
} from "./style";
import { useState, useEffect } from "react";
import CartProduct from "../CartProduct/CartProduct";
import { useDispatch, useSelector } from "react-redux";
import emptyCart from "../../assets/emptyCart.svg";

const Sidebar = (openedBoolean: any) => {
  const [productCounter, setProductCounter] = useState(1);
  const [productPrice, setProductPrice] = useState(0);
  const [animateOut, setAnimateOut] = useState(false);

  const context: any = useSelector((state: any) => state);
  //const dispatch = useDispatch();

  console.log(context.cart);
  if (context.cart.length === 0) {
    return (
      <>
        {animateOut === false ? (
          <>
            <PageOutSidebar onClick={() => setAnimateOut(true)} />
            <SidebarContainer>
              <CloseButton onClick={() => setAnimateOut(true)}>
                <ArrowRight />
              </CloseButton>
              <h2
                style={{
                  position: "fixed",
                  top: "30px",
                }}
              >
                Your Cart (0)
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
                style={{ width: "80%", height: "100%", marginBottom: "200px" }}
              />
            </SidebarContainer>
          </>
        ) : (
          <>
            <SidebarOut>
              <CloseButton onClick={() => setAnimateOut(true)}>
                <ArrowRight />
              </CloseButton>
              <h2
                style={{
                  position: "fixed",
                  top: "30px",
                }}
              >
                Your Cart (0)
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
                style={{ width: "80%", height: "100%", marginBottom: "200px" }}
              />
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
            <PageOutSidebar onClick={() => setAnimateOut(true)} />
            <SidebarContainer>
              <CloseButton onClick={() => setAnimateOut(true)}>
                <ArrowRight />
              </CloseButton>
              <h2
                style={{
                  position: "fixed",
                  top: "30px",
                }}
              >
                Your Cart ({productCounter})
              </h2>
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
              <CombinedPrice>Combined price:{productPrice}</CombinedPrice>
            </SidebarContainer>
          </>
        ) : (
          <SidebarOut>
            <CloseButton onClick={() => setAnimateOut(true)}>
              <ArrowRight />
            </CloseButton>
            <h2>Your Cart ({productCounter})</h2>
            {context.cart.map((item: any, index: number) => {
              return (
                <CartProduct
                  id={item.product.id}
                  name={item.product.name}
                  photo={item.product.photos[0]}
                  price={item.product.price}
                  key={index}
                  quantity={item.quantity}
                ></CartProduct>
              );
            })}
            <CombinedPrice>Combined price:{productPrice}</CombinedPrice>
          </SidebarOut>
        )}
      </>
    );
  }
};
export default Sidebar;
