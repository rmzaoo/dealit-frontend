import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > div {
    margin: 20px 0;
    animation: fadeIn 0.5s ease-in-out;

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }

  p {
    margin: 0;
    font-size: 18px;
    text-transform: capitalize;
    font-weight: bold;
    letter-spacing: 3px;
  }

  .register-divider {
    display: flex;
    flex-direction: column;
    border-top: 1px solid #e0e0e0;
    padding: 8px;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;

  > * {
    margin: 0 5px;
  }

  @media screen and (max-width: 768px) {
    align-items: center;
    justify-content: center;
  }
`;

export { Container, ButtonsContainer };
