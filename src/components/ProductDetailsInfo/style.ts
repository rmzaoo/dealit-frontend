import styled from "styled-components";

export const ProductInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  width: 33%;

  //Laptops and small screens
  @media screen and (max-width: 1024px) {
    font-size: 1.8rem;
    width: 50%;
  }
  //Tablets
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    padding: 2px;
  }

  //Mobile
  @media screen and (max-width: 480px) {
  }
`;

export const ProductNameContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 90%;

  //Tablets
  @media screen and (max-width: 768px) {
    justify-content: center;
    height:10%
  }

  //Mobile
  @media screen and (max-width: 480px) {
  }
`;

export const ProductName = styled.p`
  font-size: 1.8rem;
  font-weight: bold;
  color: #02a4e3;

  //Laptops and small screens
  @media screen and (max-width: 1024px) {
    font-size: 1.7rem;
  }

  //Tablets
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }

  //Mobile
  @media screen and (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

export const ProductPriceContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 90%;

  //Tablets
  @media screen and (max-width: 768px) {
    justify-content: center;
    height: 10%;
  }
`;

export const ProductPrice = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
  color: white;

  //Laptops and small screens
  @media screen and (max-width: 1024px) {
    font-size: 1.2rem;
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

export const ProductDescriptionContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  width: 90%;
  white-space: pre-line;
`;

export const ProductDescription = styled.p`
  font-size: 1.2rem;
  color: white;
  white-space: pre-line;

  //Laptops and small screens
  @media screen and (max-width: 1024px) {
    font-size: 1.1rem;
  }

  //Tablets
  @media screen and (max-width: 768) {
    font-size: 1.1rem;
    height: 30%
  }

  //Mobile
  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const ProductDetailsPhotosMobileTabletContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40%;
`;
