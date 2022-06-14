import styled from "styled-components";

export const PDPContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #27364b;
  flex-direction: column;
  height: fit-content;
  width: 100%;
  padding-top: 20px;
  background-image: linear-gradient(175deg, #27364b 5%, #0e1318 100%);
`;

export const ProductContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  width: 100%;
  height: 100vh;

  //Laptops and small screens
  @media screen and (max-width: 1024px) {
  }

  //Tablets
  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-top: 25px;
    overflow-x: hidden;
  }

  //Mobile
  @media screen and (max-width: 480px) {
  }
`;

export const SimilarProducts = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;
