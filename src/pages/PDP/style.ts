import styled from "styled-components";

export const PDPContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding-top: 20px;
`;

export const ProductContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  width: 100%;
  height: 85%;

  //Laptops and small screens
  @media screen and (max-width: 1024px) {

  }

  //Tablets
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  //Mobile
  @media screen and (max-width: 480px) {

  }
`;

export const SimilarProducts = styled.div`
  display: flex;
`;


