import styled from "styled-components";
import LoginRegisterContainer from "../../components/LoginRegisterContainer/loginRegisterContainer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  background-image: linear-gradient(175deg, #27364b 5%, #0e1318 100%);
  background-color: #27364b;
  color: white;

  @media screen and (max-width: 768px) {
    height: auto;
  }

  .navbar-login-container {
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .login-container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
  }

  .footer-login-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
  }
`;

const ContainerIMG = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
  }
`;

const ContainerLoginRegister = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    text-align: center;
  }

  h1 {
    margin: 0;
    font-size: 50px;
  }
  span {
    font-size: 30px;
    letter-spacing: 3px;
  }

  .login-register-header {
    width: 80%;
    margin: 30px 0;
  }
`;
const StyledLoginRegisterContainer = styled(LoginRegisterContainer)`
  width: 80%;
  align-items: stretch;
`;

export {
  Container,
  ContainerLoginRegister,
  ContainerIMG,
  StyledLoginRegisterContainer,
};
