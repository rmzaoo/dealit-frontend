import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  color: white;
  heigth: 100%;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  margin: 15px 10px;
  padding-bottom: 12px;
  border-bottom: 1px solid white;
  h1 {
    text-align: start;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
  }

  span {
    font-size: 22px;
    letter-spacing: 1.5px;
  }

  @media only screen and (min-width: 300px) {
    width: 90%;
    height: 50px;
  }
`;

const ProductPhotoDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 100%;

  img {
    width: 8vh;
    height: 8vh;
    object-fit: cover;
    cursor: pointer;
  }
`;

const ProductDetails = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: center;
  justify-content: center;
  margin-left: 10px;

  h1 {
    text-align: start;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
  }

  span {
    font-size: 16px;
    letter-spacing: 1.5px;
  }
`;

export { Container, ProductPhotoDiv, ProductDetails };
