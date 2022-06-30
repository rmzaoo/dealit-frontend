import {
  ArrowRight,
  Checkout,
  CheckoutButton,
  CheckoutContainer,
  CheckoutOut,
  CloseButton,
  CombinedPrice,
  PageOutSidebar,
  ProductsContainer,
  SidebarContainer,
  SidebarOut,
  TotalContainer,
} from "./style";
import { useEffect, useState } from "react";
import CartProduct from "../CartProduct/CartProduct";
import { useDispatch, useSelector } from "react-redux";
import emptyCart from "../../assets/emptyCart.svg";
import { useNavigate } from "react-router";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import SecundaryButton from "../SecundaryButton/SecundaryButton";
import { toast } from "react-toastify";
import { addZeroes } from "../../utils/addZeroes";
import { countDecimals } from "../../utils/countDecimals";
import useAuthenticationValidation from "../../hooks/user/useAuthenticationValidation";
import { getCookie } from "../../utils/cookies";
import { orderFetch } from "../../api/orderFetch";
import { fetchCreditCardsByUserId } from "../../api/creditCardFetch";

export interface InitialStateProps {
  user: {
    id: number;
    username: string;
    email: string;
    phone: string;
    photo: string;
    token: string;
  };
  cart: [];
  orders: [];
  addresses: [];
  creditCards: [];
}

const Sidebar: any = () => {
  const context: any = useSelector((state) => state);
  const [animateOut, setAnimateOut] = useState(false);
  const [prodCounter, setProdCounter] = useState(0);
  const [opened, setOpened] = useState(true);
  const [openedCheckout, setOpenedCheckout] = useState(false);
  const user = useSelector((state: InitialStateProps) => state.user);
  const creditCard = useSelector(
    (state: InitialStateProps) => state.creditCards
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const combinedPrice = context.cartCombinedPrice;

  useEffect(() => {
    dispatch({ type: "SET_COMBINED_PRICE", payload: {} });
  }, []);
  useEffect(() => {
    setProdCounter(prodCounter + 1);
  }, [context]);

  function handleNavigate() {
    navigate("/");
    setOpened(false);
    setAnimateOut(true);
    setTimeout(
      () => dispatch({ type: "SEND_OPENED", payload: { opened: false } }),
      500
    );
  }
  function handleClick() {
    setOpened(false);
    setAnimateOut(true);
    setTimeout(
      () => dispatch({ type: "SEND_OPENED", payload: { opened: false } }),
      500
    );
  }
  function openCheckout() {
    setOpenedCheckout(true);
  }
  const showToast = async () => {
    const cc = await fetchCreditCardsByUserId(user.id, user.token);

    const finalOrder: any = await orderFetch(
      user.id,
      cc[0].id,
      user.token,
      context.cart
    );
    if (finalOrder.data.message === "Order successfully saved to database") {
      toast.success(
        "Your order has been placed! Check your dashboard for more info"
      );
      setTimeout(() => {
        setAnimateOut(false);
        setOpenedCheckout(false);
        navigate("/dashboard/orders");
      }, 1500);
    }
  };
  const { isLogged, isLoading, error } = useAuthenticationValidation(
    getCookie("token")
  );

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
        {animateOut === false && openedCheckout === false ? (
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
                        price={item.product.price}
                        key={index}
                        quantity={Number(item.quantity)}
                      ></CartProduct>
                    </>
                  );
                })}
              </ProductsContainer>
              <CombinedPrice>
                <span>Total:</span>
                <span>
                  {Math.round((combinedPrice + Number.EPSILON) * 100) / 100} $
                </span>
              </CombinedPrice>
              <CheckoutButton onClick={() => openCheckout()}>
                Checkout
              </CheckoutButton>
            </SidebarContainer>
          </>
        ) : animateOut === true && openedCheckout === false ? (
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
                      quantity={Number(item.quantity)}
                    ></CartProduct>
                  </>
                );
              })}
            </ProductsContainer>
            <CombinedPrice>
              <span>Total:</span>
              <span>
                {Math.round((combinedPrice + Number.EPSILON) * 100) / 100} $
              </span>
            </CombinedPrice>
            <CheckoutButton onClick={() => openCheckout()}>
              Checkout
            </CheckoutButton>
          </SidebarOut>
        ) : animateOut === false &&
          openedCheckout === true &&
          isLogged &&
          !isLoading ? (
          <>
            <PageOutSidebar onClick={() => handleClick()} />
            <Checkout>
              <CloseButton onClick={() => handleClick()}>
                <ArrowRight />
              </CloseButton>
              <h1>Checkout</h1>
              <ProductsContainer>
                {context.cart.map((item: any, index: number) => {
                  return (
                    <CheckoutContainer>
                      <CheckoutProduct
                        id={item.product.id}
                        name={item.product.name}
                        photo={item.product.photos[0]}
                        price={item.product.price}
                        key={index}
                        quantity={item.quantity}
                      ></CheckoutProduct>
                    </CheckoutContainer>
                  );
                })}
              </ProductsContainer>
              <TotalContainer>
                <h1>
                  Total:{" "}
                  {Math.round((combinedPrice + Number.EPSILON) * 100) / 100} $
                </h1>
                <SecundaryButton onClick={showToast}>Confirm Order</SecundaryButton>
              </TotalContainer>
            </Checkout>
          </>
        ) : animateOut === true &&
          openedCheckout === true &&
          isLogged &&
          !isLoading ? (
          <CheckoutOut>
            <CloseButton onClick={() => handleClick()}>
              <ArrowRight />
            </CloseButton>
            <h1>Checkout</h1>
            <ProductsContainer>
              {context.cart.map((item: any, index: number) => {
                return (
                  <CheckoutContainer>
                    <CheckoutProduct
                      id={item.product.id}
                      name={item.product.name}
                      photo={item.product.photos[0]}
                      price={item.product.price}
                      key={index}
                      quantity={item.quantity}
                    ></CheckoutProduct>
                  </CheckoutContainer>
                );
              })}
            </ProductsContainer>
            <TotalContainer>
              <h1>
                Total:{" "}
                {Math.round((combinedPrice + Number.EPSILON) * 100) / 100} $
              </h1>
              <SecundaryButton onClick={showToast}>Confirm Order</SecundaryButton>
            </TotalContainer>
          </CheckoutOut>
        ) : (
          navigate("/login")
        )}
      </>
    );
  }
};
export default Sidebar;
