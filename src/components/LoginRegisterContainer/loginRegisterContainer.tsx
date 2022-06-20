import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchlogin, fetchregister } from "../../api/authFetch";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import PrimaryInput from "../PrimaryInput/PrimaryInput";
import SecundaryButton from "../SecundaryButton/SecundaryButton";
import { Container, ButtonsContainer } from "./styled";
import { useDispatch } from "react-redux";

interface Props {
  type: string;
  className?: string;
}

const loginContainer = ({ type, className }: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  /**
   * 
   * verify if user is logged in, verify cookies and state. 
   * If user is logged go to /dashboard
   */

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

  const [alert, setAlert] = useState("");

  const onLogin = () => {
    fetchlogin(values.email, values.password)
      .then((data) => {
        if (data.status === 200) {
          setAlert(data.data.message);
          console.log(data.data);
          dispatch({ type: "SET_USER", payload: data.data.res });


          setTimeout(() => {
            navigate("/");
          }, 2000);
        }
      })
      .catch((error) => {
        error.response.status === 401
          ? setAlert("Wrong email or password")
          : setAlert(error.response.data.message);
      })
      .finally(() => {
        setTimeout(() => {
          setAlert("");
        }, 5000);
      });
  };

  const onRegister = () => {
    fetchregister(values)
      .then((data) => {
        if (data.status === 200) {
          setAlert(data.data.message);
          setTimeout(() => {
            navigate("/login");
          }, 2000);
          return;
        }
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data.error);
          error.response.status === 401
            ? setAlert("Verify if you have entered the correct data")
            : setAlert("Something went wrong");
        }
      });
  };

  const onInputChange = (e: any) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return type === "login" ? (
    <Container className={className}>
      {alert && <p>{alert}</p>}
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
      {alert && <p>{alert}</p>}
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
