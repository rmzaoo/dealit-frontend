import {
  Container,
  ContainerLoginRegister,
  ContainerIMG,
  StyledLoginRegisterContainer,
} from "./styled";
import shoopingIMG from "../../assets/shopping.svg";
import { useNavigate } from "react-router-dom";
import Logo from "../../components/Logo/Logo";
import useAuthenticationValidation from "../../hooks/user/useAuthenticationValidation";
import { getCookie } from "../../utils/cookies";
import { useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";

interface Props {
  type: string;
}

const LoginRegisterPage = ({ type = "login" }: Props) => {
  const navigate = useNavigate();
  const year = new Date().getFullYear();
  const dispatch = useDispatch();

  const { isLogged, isLoading, error } = useAuthenticationValidation(
    getCookie("token")
  );

  useLayoutEffect(() => {
    if (isLogged) {
      navigate("/dashboard");
    }
  }, [isLogged]);

  return !isLoading ? (
    <Container>
      <div className="navbar-login-container">
        <Logo onClick={() => navigate("/")} />
      </div>
      <div className="login-container">
        <ContainerLoginRegister>
          <div className="login-register-header">
            <span>
              {type === "login" ? "Welcome Back to" : "Create an account on"}
            </span>
            <h1>Dealit</h1>
          </div>
          <StyledLoginRegisterContainer type={type} />
        </ContainerLoginRegister>
        <ContainerIMG>
          <img src={shoopingIMG} alt="shopping" />
        </ContainerIMG>
      </div>
      <div className="footer-login-container">
        <span>&#169; Dealit {year}</span>
      </div>
    </Container>
  ) : null;
};

export default LoginRegisterPage;
