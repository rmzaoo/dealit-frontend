import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchlogin, fetchregister } from "../../api/fetch/authFetch";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import PrimaryInput from "../PrimaryInput/PrimaryInput";
import SecundaryButton from "../SecundaryButton/SecundaryButton";
import { Container, ButtonsContainer } from "./styled";
import { useDispatch } from "react-redux";
import { getCookie, setCookie } from "../../utils/cookies";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Props {
  type: string;
  className?: string;
}

const loginContainer = ({ type, className }: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [values, setValues] = React.useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    country: "",
    city: "",
    zipCode: "",
    street: "",
    houseNumber: "",
  });

  const onLogin = () => {
    fetchlogin(values.email, values.password)
      .then((data) => {
        if (data.status === 200) {
          toast.success(data.data.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          dispatch({ type: "SET_USER", payload: data.data.res });
          setCookie("token", data.data.res.token, 2);

          setTimeout(() => {
            navigate("/dashboard");
          }, 2000);
        }
      })
      .catch((error) => {
        error.response.status === 401
          ? toast.error("Wrong email or password")
          : toast.error(error.response.data.message);
      });
  };

  const onRegister = () => {
    fetchregister(values)
      .then((data) => {
        if (data.status === 200) {
          toast.success(data.data.message);
          setTimeout(() => {
            navigate("/login");
          }, 2000);
          return;
        }
      })
      .catch((error) => {
        if (error.response) {
          error.response.status === 401
            ? toast.error("Verify if you have entered the correct data")
            : toast.error("Something went wrong");
        }
      });
  };

  const onInputChange = (e: any) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return type === "login" ? (
    <Container className={className}>
      <PrimaryInput
        type="text"
        placeholder="Email"
        value={values.email}
        name="email"
        onChange={onInputChange}
      />
      <PrimaryInput
        type="password"
        placeholder="Password"
        value={values.password}
        name="password"
        onChange={onInputChange}
      />

      <ButtonsContainer>
        <PrimaryButton onClick={onLogin}>Login</PrimaryButton>
        <SecundaryButton onClick={() => navigate("/register")}>
          Register
        </SecundaryButton>
      </ButtonsContainer>
    </Container>
  ) : (
    <Container className={className}>
      <p>Account Details</p>
      <div className="register-divider">
        <PrimaryInput
          type="text"
          placeholder="Name"
          value={values.name}
          name="name"
          onChange={onInputChange}
        />
        <PrimaryInput
          type="text"
          placeholder="Phone"
          value={values.phone}
          name="phone"
          onChange={onInputChange}
        />
        <PrimaryInput
          type="text"
          placeholder="Email"
          value={values.email}
          name="email"
          onChange={onInputChange}
        />
        <PrimaryInput
          type="password"
          placeholder="Password"
          value={values.password}
          name="password"
          onChange={onInputChange}
        />
      </div>

      <p>Address</p>
      <div className="register-divider">
        <PrimaryInput
          type="text"
          placeholder="Country"
          value={values.country}
          name="country"
          onChange={onInputChange}
        />
        <PrimaryInput
          type="text"
          placeholder="City"
          value={values.city}
          name="city"
          onChange={onInputChange}
        />
        <PrimaryInput
          type="text"
          placeholder="Zip Code"
          value={values.zipCode}
          name="zipCode"
          onChange={onInputChange}
        />
        <PrimaryInput
          type="text"
          placeholder="Street"
          value={values.street}
          name="street"
          onChange={onInputChange}
        />
        <PrimaryInput
          type="text"
          placeholder="House Number"
          value={values.houseNumber}
          name="houseNumber"
          onChange={onInputChange}
        />
      </div>

      <ButtonsContainer>
        <PrimaryButton onClick={onRegister}>Register</PrimaryButton>
        <SecundaryButton onClick={() => navigate("/login")}>
          Login
        </SecundaryButton>
      </ButtonsContainer>
    </Container>
  );
};

export default loginContainer;
