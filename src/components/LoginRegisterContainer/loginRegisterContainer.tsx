import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchlogin, fetchregister } from "../../api/fetch/authFetch";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import PrimaryInput from "../PrimaryInput/PrimaryInput";
import SecundaryButton from "../SecundaryButton/SecundaryButton";
import { Container, ButtonsContainer } from "./styled";
import { useDispatch } from "react-redux";
import { setCookie } from "../../utils/cookies";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddressContainerSuggestion from "../AddressContainerSuggestion/AddressContainerSuggestion";

interface Props {
  type: string;
  className?: string;
}

export interface LoginRegisterProps {
  name: string;
  phone: string;
  email: string;
  password: string;
  country: string;
  city: string;
  zipCode: string;
  street: string;
  houseNumber: string;
}

const loginContainer = ({ type, className }: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [registerPage, setRegisterPage] = useState(0);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const [values, setValues] = React.useState<LoginRegisterProps>({
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
    if (
      values.name === "" ||
      values.phone === "" ||
      values.email === "" ||
      values.password === "" ||
      values.country === "" ||
      values.city === "" ||
      values.zipCode === "" ||
      values.street === "" ||
      values.houseNumber === ""
    ) {
      toast.error("Please fill all fields");
      return;
    }

    fetchregister(values)
      .then((data) => {
        toast.success(" Registration successful. Redirecting to login page");
        setTimeout(() => {
          setValues({
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

          setRegisterPage(0);
          navigate("/login");
        }, 1000);
      })
      .catch((error) => {
        if (error.response) {
          error.response.status === 400
            ? error.response.data.error.message.map((message: string) =>
                toast.error(message)
              )
            : toast.error("Something went wrong");
        }
      });
  };

  const onInputChange = (e: any) => {
    const { name, value } = e.target;

    if (name === "street") {
      setShowSuggestion(true);
    }

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
        required={true}
      />
      <PrimaryInput
        type="password"
        placeholder="Password"
        value={values.password}
        name="password"
        onChange={onInputChange}
        required={true}
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
      {registerPage === 0 && (
        <>
          <p>Account Details</p>
          <div className="register-divider">
            <PrimaryInput
              type="text"
              placeholder="Name"
              value={values.name}
              name="name"
              onChange={onInputChange}
              required={true}
            />
            <PrimaryInput
              type="text"
              placeholder="Phone"
              value={values.phone}
              name="phone"
              onChange={onInputChange}
              required={true}
            />
            <PrimaryInput
              type="text"
              placeholder="Email"
              value={values.email}
              name="email"
              onChange={onInputChange}
              required={true}
            />
            <PrimaryInput
              type="password"
              placeholder="Password"
              value={values.password}
              name="password"
              onChange={onInputChange}
              required={true}
            />
          </div>
        </>
      )}

      {registerPage === 1 && (
        <>
          <p>Address</p>
          <div className="register-divider">
            <>
              <PrimaryInput
                type="text"
                placeholder="Street"
                value={values.street || ""}
                name="street"
                onChange={onInputChange}
                required={true}
              />
              {showSuggestion && (
                <AddressContainerSuggestion
                  setShowSuggestion={setShowSuggestion}
                  addressSearched={values.street}
                  setValues={setValues}
                  values={values}
                />
              )}
            </>

            <PrimaryInput
              type="text"
              placeholder="House Number"
              value={values.houseNumber}
              name="houseNumber"
              onChange={onInputChange}
              required={true}
            />
            <PrimaryInput
              type="text"
              placeholder="Zip Code"
              value={values.zipCode}
              name="zipCode"
              onChange={onInputChange}
              required={true}
            />
            <PrimaryInput
              type="text"
              placeholder="City"
              value={values.city}
              name="city"
              onChange={onInputChange}
              required={true}
            />

            <PrimaryInput
              type="text"
              placeholder="Country"
              value={values.country}
              name="country"
              onChange={onInputChange}
              required={true}
            />
          </div>
        </>
      )}
      <ButtonsContainer>
        {registerPage === 0 ? (
          <PrimaryButton onClick={() => setRegisterPage(registerPage + 1)}>
            Next Page
          </PrimaryButton>
        ) : (
          <>
            <PrimaryButton onClick={() => setRegisterPage(registerPage - 1)}>
              Previous Page
            </PrimaryButton>
            <PrimaryButton onClick={onRegister}>Register</PrimaryButton>
          </>
        )}
        <SecundaryButton onClick={() => navigate("/login")}>
          Login
        </SecundaryButton>
      </ButtonsContainer>
    </Container>
  );
};

export default loginContainer;
