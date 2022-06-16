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
      text-align: center;
    }
    img {
      height: 80px;
      border-radius: 10px 10px 0px 0px;
      width: 130px;
      object-fit: contain;
    }
    span {
      font-size: 10px;
      height: 60%;
      width: 100%;
      text-align: center;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 80px;
    height: 140px;

    h1 {
      font-size: 7px;
      margin: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    img {
      height: 42px;
      border-radius: 10px 10px 0px 0px;
      width: 160px;
    }
    span {
      font-size: 7px;
      height: 60%;
      width: 100%;
      text-align: center;
    }
  }
  @media only screen and (min-width: 400px) {
    width: 120px;
    height: 150px;

    h1 {
      font-size: 9px;
      margin: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    img {
      height: 60px;
      border-radius: 10px 10px 0px 0px;
      width: 160px;
    }
    span {
      font-size: 9px;
      height: 60%;
      width: 100%;
      text-align: center;
    }
  }

  @media only screen and (min-width: 600px) {
    width: 140px;
    height: 200px;

    h1 {
      font-size: 10px;
      margin: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    img {
      height: 70px;
      border-radius: 10px 10px 0px 0px;
      width: 190px;
    }
    span {
      font-size: 10px;
      height: 60%;
      width: 100%;
      text-align: center;
    }
  }
  @media only screen and (min-width: 800px) {
    width: 160px;
    height: 200px;

    h1 {
      font-size: 10px;
      margin: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    img {
      height: 70px;
      border-radius: 10px 10px 0px 0px;
      width: 190px;
    }
    span {
      font-size: 10px;
      height: 60%;
      width: 100%;
      text-align: center;
    }
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 858px) {
    width: 200px;
    height: 230px;

    h1 {
      font-size: 13px;
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
      width: 220px;
    }
    span {
      font-size: 13px;
      height: 60%;
      width: 100%;
      text-align: center;
    }
  }
  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 945px) {
    width: 220px;
    height: 240px;

    h1 {
      font-size: 14px;
      margin: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    img {
      height: 114px;
      border-radius: 10px 10px 0px 0px;
      width: 240px;
    }
    span {
      font-size: 14px;
      height: 60%;
      width: 100%;
      text-align: center;
    }
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 1100px) {
    width: 250px;
    height: 240px;

    h1 {
      font-size: 14px;
      margin: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    img {
      height: 160px;
      border-radius: 10px 10px 0px 0px;
      width: 240px;
      margin-top: 5px;
    }
    span {
      height: 60%;
      width: 100%;
      text-align: center;
    }
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    height: 270px;
    width: 280px;
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
      height: 170px;
      border-radius: 10px 10px 0px 0px;
      width: 240px;
      margin-top: 5px;
    }
    span {
      height: 60%;
      width: 100%;
      text-align: center;
    }
  }
  @media only screen and (min-width: 1300px) {
    height: 270px;
    width: 300px;
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
      height: 170px;
      border-radius: 10px 10px 0px 0px;
      width: 240px;
      margin-top: 5px;
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
    object-fit: contain;
  }

  @media only screen and (min-width: 300px) {
    width: 100px;
    height: 220px;
    margin: 5px;

    img {
      width: 70px;
      height: 70px;
      margin-top: 5px;
    }
    h1 {
      font-size: 8px;
      margin: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
    span {
      font-size: 8px;
      height: 60%;
      width: 100%;
      text-align: center;
    }
  }
  @media only screen and (min-width: 400px) {
    width: 100px;
    height: 200px;
    margin-left: 3px;

    img {
      width: 80px;
      height: 80px;
      margin-top: 5px;
    }
    h1 {
      font-size: 10px;
      margin: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
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
    height: 250px;
    margin-left: 3px;

    img {
      width: 120px;
      height: 140px;
      margin-top: 5px;
    }
    h1 {
      font-size: 12px;
      margin: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
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
    height: 280px;
    margin-left: 5px;

    img {
      width: 130px;
      height: 160px;
      margin-top: 5px;
    }
    h1 {
      font-size: 12px;
      margin: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
    span {
      font-size: 12px;
      height: 60%;
      width: 100%;
      text-align: center;
    }
  }
  @media only screen and (min-width: 768px) {
    width: 200px;
    height: 340px;

    img {
      width: 170px;
      height: 212px;
      margin-top: 5px;
    }
    h1 {
      font-size: 13px;
      margin: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
    span {
      font-size: 13px;
      height: 60%;
      width: 100%;
      text-align: center;
    }
  }
  @media only screen and (min-width: 992px) {
    width: 220px;
    height: 360px;

    img {
      width: 200px;
      height: 212px;
      margin-top: 5px;
    }
    h1 {
      font-size: 15px;
      margin: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
    span {
      font-size: 15px;
      height: 60%;
      width: 100%;
      text-align: center;
    }
  }
  @media only screen and (min-width: 1200px) {
    width: 250px;
    height: 400px;

    img {
      height: 238px;
      width: 230px;
      margin-top: 5px;
    }
    h1 {
      font-size: 15px;
      margin: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    span {
      font-size: 15px;
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
  width: 70%;
  height: 100%;
  margin-bottom: 4%;
  margin-top: 8px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;

  @media only screen and (min-width: 1200px) {
    width: 70%;
  }
`;
const PageDataOneColumn = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  overflow: scroll;
  padding-left: 20px;
`;

export {
  PageData,
  PageDataOneColumn,
  MainProductCard,
  MainProductCardOneColumn,
  ImageDiv,
};
