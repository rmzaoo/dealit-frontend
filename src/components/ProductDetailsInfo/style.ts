import styled from "styled-components";

export const ProductInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  width: 33%;
  height: 100%;

  //Laptops and small screens
  @media screen and (max-width: 1024px) {
    width: 50%;
  }
  //Tablets
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 50%;
    padding: 2px;
  }
`;

export const ProductNameContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 90%;
  height: 15%;
  padding: 6px;

  //Tablets
  @media screen and (max-width: 768px) {
    justify-content: center;
    padding: 5px;
    height: 10%;
  }
`;

export const ProductName = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
  color: #02a4e3;

  //Laptops and small screens
  @media screen and (max-width: 1024px) {
    font-size: 1.3rem;
  }

  //Tablets
  @media screen and (max-width: 768px) {
    font-size: 1.1rem;
  }

  //Mobile
  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const ProductPriceContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 90%;
  height: 8%;

  //Tablets
  @media screen and (max-width: 768px) {
    justify-content: center;
    height: 6%;
  }
`;

export const ProductPrice = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: white;

  //Laptops and small screens
  @media screen and (max-width: 1024px) {
    font-size: 1.1rem;
  }

  //Tablets
  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }

  //Mobile
  @media screen and (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const ProductDescriptionContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 90%;
  height: 40%;

  //Tablets
  @media screen and (max-width: 768) {
    font-size: 1rem;
    height: 30%;
  }

  //Mobile
  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const ProductDescription = styled.p`
  display: inline-block;
  font-size: 1.1rem;
  color: white;
  text-indent: 10px;
  white-space: pre-line;
  max-height: 90%;
  overflow-y: auto;

  //Laptops and small screens
  @media screen and (max-width: 1024px) {
    font-size: 1rem;
    height: 100%;
  }

  //Tablets
  @media screen and (max-width: 768) {
    font-size: 1rem;
    height: 100%;
  }

  //Mobile
  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
  }

  &::-webkit-scrollbar {
    width: 5px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #c0c0c0;
  }

  &::-webkit-scrollbar-track {
    background-color: #808080;
  }
`;

export const ProductDetailsPhotosMobileTabletContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2px;
  width: 80%;
  height: 70%;
`;
