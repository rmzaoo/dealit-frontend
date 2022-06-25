import styled from "styled-components";

export const PDPContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #27364b;
  flex-direction: column;
  width: 100%;
  height: 180vh;
  background-image: linear-gradient(175deg, #27364b 5%, #0e1318 100%);

  

  //Tablets
  @media screen and (max-width: 768) {
    height: 200vh;
  }

`;

export const ProductDetailsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  height: 50%;
  margin-top: 10%;

  //Laptops and small screens
  @media screen and (max-width: 1024px) {
    margin-top: 15%;
  }

  //Tablets
  @media screen and (max-width: 768px) {
    overflow-x: hidden;
    height: 90%;
    margin-top: 13%;
  }

  //Mobile
  @media screen and (max-width: 480px) {
    margin-top: 18%;
  }
`;

export const ProductContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  width: 100%;
  height: fit-content;

  //Tablets
  @media screen and (max-width: 768px) {
    flex-direction: column;
    overflow-x: hidden;
  }

  //Mobile
  @media screen and (max-width: 480px) {
    height: 80%;
  }
`;

export const SecondHalfOfScreenContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 90%;
  height: 50%;
  padding: 20px;
`;

export const SimilarProductsContainer = styled.div`
  width: 80%;
  height: 80%;

  h2 {
    color: white;
    border-bottom: 1px solid #02a4e3;
    padding: 10px 5px;
    font-size: 30px;

    //Laptops and small screens
    @media screen and (max-width: 1024px) {
      font-size: 26px;
    }

    //Tablets
    @media screen and (max-width: 768px) {
      font-size: 20px;
    }

    //Mobile
    @media screen and (max-width: 480px) {
      font-size: 18px;
    }
  }
`;

export const BreadCrumbDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 90%;
  padding-left: 1%;


  //Tablets
  @media screen and (max-width: 768px) {
    height: 5%;
  }
`;
