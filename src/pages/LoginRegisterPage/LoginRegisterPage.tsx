import {
  Container,
  ContainerLoginRegister,
  ContainerIMG,
  StyledLoginRegisterContainer,
} from "./styled";
import shoopingIMG from "../../assets/shopping.svg";
import { useNavigate } from "react-router-dom";
import Logo from "../../components/Logo/Logo";
import PrimaryInput from "../../components/PrimaryInput/PrimaryInput";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import SecundaryButton from "../../components/SecundaryButton/SecundaryButton";

interface Props {
  type: string;
}

const LoginRegisterPage = ({ type = "login" }: Props) => {
  const navigate = useNavigate();
  const year = new Date().getFullYear();

  return (
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
  );
};

export default LoginRegisterPage;
