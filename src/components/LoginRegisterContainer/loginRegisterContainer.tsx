import React from "react";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import PrimaryInput from "../PrimaryInput/PrimaryInput";
import SecundaryButton from "../SecundaryButton/SecundaryButton";
import { Container, ButtonsContainer } from "./styled";

interface Props {
  type: string;
  className?: string;
}

const loginContainer = ({ type, className }: Props) => {
  const navigate = useNavigate();

  const onLogin = () => {};

  const onRegister = () => {};

  return type === "login" ? (
    <Container className={className}>
      <PrimaryInput type="text" placeholder="Email" />
      <PrimaryInput type="password" placeholder="Password" />

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
        <PrimaryInput type="text" placeholder="Name" />
        <PrimaryInput type="text" placeholder="Phone" />
        <PrimaryInput type="text" placeholder="Email" />
        <PrimaryInput type="password" placeholder="Password" />
      </div>

      <p>Adress</p>
      <div className="register-divider" >
        <PrimaryInput type="text" placeholder="Coutry" />
        <PrimaryInput type="text" placeholder="City" />
        <PrimaryInput type="text" placeholder="Zip Code" />
        <PrimaryInput type="text" placeholder="Street" />
        <PrimaryInput type="text" placeholder="House Number" />
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
