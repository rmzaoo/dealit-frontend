import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ProductDiv = styled.div`
  background-color: rgb(255, 255, 255);
  color: rgb(19, 25, 31);
  height: 300px;
  border: solid 1px rgb(0, 180, 204);
  border-radius: 10px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    width: 170px;
    height: 190px;
  }
  @media screen and (max-height: 835px) {
    height: 290px;
    font-size: 14px;
  }
  @media screen and (max-height: 812px) {
    height: 240px;
    font-size: 12px;
  }
  @media screen and (max-height: 698px) {
    height: 200px;
    font-size: 11px;
  }
  @media screen and (max-height: 608px) {
    height: 170px;
    font-size: 11px;
  }
`;

const ProductImg = styled(LazyLoadImage)`
  padding: 20px 30px 20px 30px;
  width: 180px;
  height: 170px;
  object-fit: cover;

  @media screen and (max-width: 768px) {
    padding: 10px 20px 10px 20px;
    width: 110px;
    height: 100px;
  }
  @media screen and (max-height: 812px) {
    width: 140px;
    height: 130px;
  }
  @media screen and (max-height: 698px) {
    padding: 16px 26px 16px 26px;
    width: 110px;
    height: 100px;
  }
  @media screen and (max-height: 608px) {
    padding: 12px 22px 12px 22px;
    width: 90px;
    height: 80px;
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

  @media screen and (max-width: 768px) {
    height: 80%;
  }
`;
const ImgDiv = styled.div`
  background-color: #e7e7e7;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px 10px 0px 0px;
`;
const DataDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  line-height: 5px;

  @media screen and (max-width: 768px) {
    line-height: 5px;
    font-size: 12px;
  }
`;
const AddToCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(0, 180, 204);
  border-radius: 3px;
  margin: 6px;
  font-size: 14px;
  width: 90px;
  height: 28px;
  cursor: pointer;
  color: rgb(19, 25, 31);
  &:hover {
    color: rgb(0, 180, 204);
    background-color: rgb(19, 25, 31);
    transition: 0.5s;
  }
  @media screen and (max-height: 835px) {
    height: 25px;
    font-size: 14px;
  }
  @media screen and (max-height: 698px) {
    height:18px;
    width: 76px;
    font-size: 12px;
  }
`;
const AddToCartMobile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(0, 180, 204);
  border-radius: 3px;
  margin: 6px;
  font-size: 14px;
  width: 30px;
  height: 20px;
  cursor: pointer;
  color: rgb(19, 25, 31);
`;

export {
  ProductDiv,
  ProductImg,
  PageData,
  ImgDiv,
  AddToCart,
  DataDiv,
  AddToCartMobile,
};
