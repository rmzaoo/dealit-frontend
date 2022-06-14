import styled from "styled-components";
import Product from "../Product/Product";
import { ProductPhotoDiv } from "../Product/styled";

const MainProductCard = styled(Product)`
  width: 80px;
  margin-bottom: 30px;
  font-size: 14px;
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 200px) {
    width: 130px;
    height: 140px;

    h1 {
      font-size: 12px;
      margin: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    img {
      height: 80px;
      border-radius: 10px 10px 0px 0px;
      width: 130px;
    }
    span {
      font-size: 10px;
      height: 60%;
      width: 100%;
      text-align: center;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 160px;
    height: 170px;

    h1 {
      font-size: 15px;
      margin: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    img {
      height: 100px;
      border-radius: 10px 10px 0px 0px;
      width: 160px;
    }
    span {
      font-size: 12px;
      height: 60%;
      width: 100%;
      text-align: center;
    }
  }

  @media only screen and (min-width: 400px) {
    width: 190px;
    height: 240px;

    h1 {
      font-size: 18px;
      margin: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    img {
      height: 140px;
      border-radius: 10px 10px 0px 0px;
      width: 190px;
    }
    span {
      font-size: 14px;
      height: 60%;
      width: 100%;
      text-align: center;
    }
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    width: 220px;
    height: 230px;

    h1 {
      font-size: 18px;
      margin: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    img {
      height: 140px;
      border-radius: 10px 10px 0px 0px;
      width: 220px;
    }
    span {
      font-size: 14px;
      height: 60%;
      width: 100%;
      text-align: center;
    }
  }
  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    width: 260px;
    height: 240px;

    h1 {
      font-size: 18px;
      margin: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    img {
      height: 140px;
      border-radius: 10px 10px 0px 0px;
      width: 260px;
    }
    span {
      font-size: 14px;
      height: 60%;
      width: 100%;
      text-align: center;
    }
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    width: 300px;
    height: 320px;

    h1 {
      font-size: 20px;
      margin: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    img {
      height: 200px;
      border-radius: 10px 10px 0px 0px;
      width: 300px;
    }
    span {
      height: 60%;
      width: 100%;
      text-align: center;
    }
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    height: 380px;
    h1 {
      font-size: 20px;
      margin: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    img {
      height: 224px;
      border-radius: 10px 10px 0px 0px;
      width: 300px;
    }
    span {
      height: 60%;
      width: 100%;
      text-align: center;
    }
  }
`;

const MainProductCardOneColumn = styled(Product)`
  display: flex;
  flex-direction: column;
  margin: 10px;
  img {
    border-radius: 10px 10px 0px 0px;
  }

  @media only screen and (min-width: 300px) {
    width: 100px;
    height: 220px;
    margin: 8px;
    img {
      width: 100px;
      height: 130px;
    }
    h1 {
      font-size: 10px;
      margin: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    span {
      font-size: 8px;
      height: 60%;
      width: 100%;
      text-align: center;
    }
  }
  @media only screen and (min-width: 400px) {
    width: 120px;
    height: 240px;
    margin: 8px;
    img {
      width: 120px;
      height: 142px;
    }
    h1 {
      font-size: 12px;
      margin: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    span {
      font-size: 10px;
      height: 60%;
      width: 100%;
      text-align: center;
    }
  }
  @media only screen and (min-width: 400px) {
    width: 100px;
    height: 220px;
    margin: 8px;
    img {
      width: 100px;
      height: 130px;
    }
    h1 {
      font-size: 10px;
      margin: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    span {
      font-size: 10px;
      height: 60%;
      width: 100%;
      text-align: center;
    }
  }
  @media only screen and (min-width: 520px) {
    width: 140px;
    height: 280px;

    img {
      width: 140px;
      height: 166px;
    }
    h1 {
      font-size: 14px;
      margin: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    span {
      font-size: 12px;
      height: 60%;
      width: 100%;
      text-align: center;
    }
  }
  @media only screen and (min-width: 600px) {
    width: 160px;
    height: 300px;

    img {
      width: 160px;
      height: 180px;
    }
    h1 {
      font-size: 16px;
      margin: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    span {
      font-size: 14px;
      height: 60%;
      width: 100%;
      text-align: center;
    }
  }
  @media only screen and (min-width: 768px) {
    width: 200px;
    height: 340px;

    img {
      width: 200px;
      height: 200px;
    }
    h1 {
      font-size: 20px;
      margin: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    span {
      font-size: 18px;
      height: 60%;
      width: 100%;
      text-align: center;
    }
  }
  @media only screen and (min-width: 992px) {
    width: 220px;
    height: 360px;

    img {
      width: 220px;
      height: 212px;
    }
    h1 {
      font-size: 20px;
      margin: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    span {
      font-size: 18px;
      height: 60%;
      width: 100%;
      text-align: center;
    }
  }
  @media only screen and (min-width: 1200px) {
    width: 250px;
    height: 400px;

    img {
      width: 250px;
      height: 238px;
    }
    h1 {
      font-size: 22px;
      margin: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    span {
      font-size: 20px;
      height: 60%;
      width: 100%;
      text-align: center;
    }
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
  align-items: center;
  overflow: scroll;
  padding-left: 50px;
`;

export {
  PageData,
  PageDataOneColumn,
  MainProductCard,
  MainProductCardOneColumn,
  ImageDiv,
};
