import styled from "styled-components";

export const ProductInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  width: 33%;
`;

export const ProductNameContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 90%;
`;

export const ProductName = styled.p`
  font-size: 2rem;
  font-weight: bold;
  color: white;

  //Laptops and small screens
  @media screen and (max-width: 1024px) {
    font-size: 1.9rem;
  }

  //Tablets
  @media screen and (max-width: 768px) {
  }

  //Mobile
  @media screen and (max-width: 480px) {
  }
`;

export const ProductPriceContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 90%;
`;

export const ProductPrice = styled.p`
  font-size: 1.4rem;
  font-weight: bold;
  color: white;

  //Laptops and small screens
  @media screen and (max-width: 1024px) {
    font-size: 1.3rem;
  }

  //Tablets
  @media screen and (max-width: 768px) {
  }

  //Mobile
  @media screen and (max-width: 480px) {
  }
`;

export const ProductDescriptionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 90%;
`;

export const ProductDescription = styled.p`
  font-size: 1.3rem;
  color: white;

  //Laptops and small screens
  @media screen and (max-width: 1024px) {
    font-size: 1.2rem;
  }

  //Tablets
  @media screen and (max-width: 768) {
  }

  //Mobile
  @media screen and (max-width: 480px) {
  }
`;
