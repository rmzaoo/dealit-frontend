import styled from "styled-components";
import Product from "../Product/Product";
import { ProductPhotoDiv } from "../Product/styled";

const MainProductCard = styled(Product)`
  width: 80px;
  margin-bottom: 30px;
  font-size: 14px;
  img {
    height: 170px;
    width: 180px;
    object-fit: cover;
    position: relative;
    left: 30%;
  }
  h1 {
    width: 16vh;
    text-align: center;
    margin: 0px;
    font-size: 18px;
    position: relative;
    right: 55%;
    bottom: 6%;
  }
  span {
    position: relative;
    right: 40%;
  }
  section {
    position: relative;
    top: 10%;
    right: 75%;
  }

  @media only screen and (min-width: 200px) {
    width: 130px;
    height: 140px;

    h1 {
      width: 22vh;
      right: 24%;
      font-size: 10px;
    }
    img {
      height: 50px;
      width: 60px;
      left: 100%;
      bottom: 1%;
    }
    section {
      position: relative;
      font-size: 10px;
      top: 10%;
      right: 54%;
    }
    span {
      font-size: 14px;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 160px;
    height: 170px;

    h1 {
      width: 22vh;
      right: 30%;
      font-size: 12px;
    }
    img {
      height: 70px;
      width: 80px;
      left: 90%;
      bottom: 1%;
    }
    section {
      position: relative;
      font-size: 10px;
      top: 10%;
      right: 54%;
    }
    span {
      font-size: 14px;
    }
  }
  @media only screen and (min-width: 375px) {
    width: 140px;
    height: 140px;

    h1 {
      width: 22vh;
      right: 30%;
      font-size: 11px;
    }
    img {
      height: 60px;
      width: 70px;
      left: 90%;
      bottom: 1%;
    }
    section {
      position: relative;
      font-size: 10px;
      top: 12%;
      right: 54%;
    }
    span {
      font-size: 14px;
    }
  }
  @media only screen and (min-width: 390px) {
    width: 160px;
    height: 190px;
    img {
      height: 80px;
      width: 90px;
      left: 84%;
      bottom: 1%;
    }
    h1 {
      right: 24%;
      font-size: 12px;
    }
    section {
      position: relative;
      font-size: 10px;
      top: 12%;
      right: 60%;
    }
    span {
      font-size: 14px;
    }
  }
  @media only screen and (min-width: 400px) {
    width: 170px;
    height: 200px;

    h1 {
      width: 22vh;
      right: 21%;
      font-size: 13px;
    }
    img {
      height: 70px;
      width: 80px;
      left: 90%;
      bottom: 1%;
    }
    section {
      position: relative;
      font-size: 11px;
      top: 10%;
      right: 54%;
    }
    span {
      font-size: 14px;
    }
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    width: 220px;
    height: 230px;

    h1 {
      width: 22vh;
      right: 30%;
      font-size: 16px;
    }
    img {
      height: 110px;
      width: 120px;
      left: 74%;
    }

    section {
      position: relative;
      top: 10%;
      right: 58%;
    }
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    width: 320px;
    height: 240px;

    h1 {
      font-size: 16px;
    }
    img {
      height: 130px;
      width: 140px;
      left: 50%;
    }
    section {
      position: relative;
      font-size: 14px;
      top: 14%;
      right: 58%;
    }
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    width: 300px;
    height: 320px;

    h1 {
      width: 22vh;
      right: 39%;
    }
    img {
      left: 50%;
      height: 150px;
      width: 160px;
    }
    section {
      position: relative;
      right: 67%;
    }
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    height: 340px;

    h1 {
      width: 22vh;
      right: 38%;
    }
    img {
      left: 87%;
      bottom: 2%;
    }
    span {
      font-size: 16px;
      right: 70%;
    }
  }
`;

const MainProductCardOneColumn = styled(Product)`
  width: 280px;
  height: 400px;
  margin: 14px;
  font-size: 14px;

  img {
    height: 170px;
    width: 180px;
    object-fit: cover;
    position: relative;
    left: 78%;
    bottom: 4%;
  }
  h1 {
    width: 22vh;
    text-align: center;
    margin: 0px;
    font-size: 18px;
    position: relative;
    right: 42%;
    bottom: 6%;
  }
  span {
    position: relative;
    right: 70%;
  }
`;

const ImageDiv = styled(ProductPhotoDiv)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 450px;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const PageData = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
const PageDataOneColumn = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export {
  PageData,
  PageDataOneColumn,
  MainProductCard,
  MainProductCardOneColumn,
  ImageDiv,
};
