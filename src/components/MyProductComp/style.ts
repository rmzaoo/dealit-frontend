import styled from "styled-components";

export const ProductContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 55%;
  height: 20%;
  border: 1px solid #116699;
  margin: 10px;
  border-radius: 7px;

  //Laptops and small screens
  @media screen and (max-width: 1024px) {
    width: 75%;
  }

  //Tablets
  @media screen and (max-width: 768px) {
    width: 85%;
  }
`;

export const ProductCatContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10%;
`;

export const ProductCat = styled.p`
  font-size: 1rem;
`;

export const ProductInfoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 95%;
  height: 90%;
`;

export const ProductImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 95px;
  width: 95px;

  //Tablets
  @media screen and (max-width: 768px) {
    height: 90px;
    width: 90px;
  }

  //Mobile
  @media screen and (max-width: 480px) {
    height: 75px;
    width: 75px;
  }
`;

export const ProductImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const ProductPriceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 40%;
  width: 20%;
`;

export const ProductPrice = styled.p`
  font-size: 1.2rem;

  //Laptops and small screens
  @media screen and (max-width: 1024px) {
    font-size: 1.1rem;
  }

  //Tablets
  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
  }

  //Mobile
  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const ProductNameContainerSell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;

  h2 {
    text-align: center;
    font-size: 1.2rem;

    //Laptops and small screens
    @media screen and (max-width: 1024px) {
      font-size: 1.1rem;
    }

    //Tablets
    @media screen and (max-width: 768px) {
      font-size: 0.9rem;
    }

    //Mobile
    @media screen and (max-width: 480px) {
      font-size: 0.8rem;
    }
  }
`;
