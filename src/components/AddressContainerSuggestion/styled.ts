import styled from "styled-components";

const ContainerSuggestion = styled.div`
  position: fixed;
  color: black;
  display: flex;
  flex-direction: column;
  overflow: auto;
  height: 200px;
  margin-top: 45px;
  width: 40%;

  //scroll
  ::-webkit-scrollbar {
    width: 5px;
    background-color: #f5f5f5;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #c0c0c0;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: #808080;
  }

  @media screen and (max-width: 768px) {
    width: 78%;
  }

  > div {
    background-color: #f5f5f5;
    padding: 10px;
    transition: all 0.3s ease-in-out;
    border: 1px solid #e0e0e0;

    &:hover {
      cursor: pointer;
      opacity: 0.9;
    }

    > p {
      margin: 0;
      font-size: 18px;
      text-transform: capitalize;
      font-weight: bold;
      letter-spacing: 3px;
      font-size: 18px;
    }

    > span {
      font-size: 14px;
      font-weight: normal;
      letter-spacing: 1px;
    }
  }
`;

export { ContainerSuggestion };
