import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: black;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  background-color: #ffffff;
  background-image: linear-gradient(135deg, #ffffff 54%, #aeaeae 100%);

  /* > * {
    margin: 0px 10px;
  } */

  &:hover {
    cursor: pointer;
  }

  @media only screen and (min-width: 300px) {
    display: none;
  }
  @media only screen and (min-width: 500px) {
    display: flex;
    width: 280px;
    height: 150px;
  }
  @media only screen and (min-width: 600px) {
    width: 420px;
    height: 200px;
  }
  @media only screen and (min-width: 762px) {
    width: 460px;
    height: 250px;
  }
  @media only screen and (min-width: 992px) {
    width: 520px;
    height: 300px;
  }
  @media only screen and (min-width: 1200px) {
    width: 600px;
    height: 350px;
  }
`;

const ProductPhotoDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 540px;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px 0px 0px 10px;
  }
`;

const ProductDetails = styled.div`
  height: 70%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  text-align: right;
  margin: 0px 20px;

  h1 {
    font-size: 30px;
    font-weight: bold;
  }

  span {
    font-size: 20px;
    letter-spacing: 1.5px;
  }
`;

export { Container, ProductPhotoDiv, ProductDetails };
