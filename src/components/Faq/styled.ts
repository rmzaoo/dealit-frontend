import styled from "styled-components";

const Container = styled.div`
  border-radius: 10px;

  h1 {
    color: #02a4e3;

    &:hover {
      cursor: pointer;
    }
  }
`;

const ContainerQuestion = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  h3 {
    font-size: 20px;
    transition: color ease-in-out 0.3s, border-color ease-in-out 0.3s;
    padding: 5px;
    border-bottom: 1px solid #e6e6e6;
    font-weight: bold;
    color: #02a4e3;

    &:hover {
      color: #0082b5;
      cursor: pointer;
      border-color: #168;
    }
  }

  p {
    animation: fadeIn 1s ease-in-out;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export { Container, ContainerQuestion };
