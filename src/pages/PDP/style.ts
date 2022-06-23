import styled from "styled-components";

export const PDPContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #27364b;
  flex-direction: column;
  width: 100%;
  padding-top: 8%;
  height: fit-content;
  background-image: linear-gradient(175deg, #27364b 5%, #0e1318 100%);
  padding-top: 50px;
`;

export const ProductDetailsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding-top: 10px;

  //Tablets
  @media screen and (max-width: 768px) {
    overflow-x: hidden;
    height: fit-content;
  }

  //Mobile
  @media screen and (max-width: 480px) {
    margin-top: 0px;
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
    height: 100%;
  }
`;

export const SecondHalfOfScreenContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 90%;
  height: 70vh;
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
  margin-top: 10px;

  //Laptops and small screens
  @media screen and (max-width: 1024px) {
    height: 0%;
    margin-top: 50px;
  }

  //Tablets
  @media screen and (max-width: 768px) {
    margin-top: 10px;
    height: 100%;
    width: 90%;
  }
`;
