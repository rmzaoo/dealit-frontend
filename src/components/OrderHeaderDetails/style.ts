import styled from "styled-components";

export const OrderDetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  height: 100%;
  width: 20%;
  padding: 5px;

  //Mobile
  @media screen and (max-width: 480px) {
    height: 60%;
  }
`;

export const OrderTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40%;
`;

export const OrderDetailsTitle = styled.p`
  font-size: 0.9rem;
  color: black;

  //Tablets
  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }

  //Mobile
  @media screen and (max-width: 480px) {
    font-size: 0.6rem;
  }
`;

export const OrderDetailsTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40%;
`;

export const OrderText = styled.p`
  font-size: 1rem;
  color: black;
  font-weight: bold;

  //Tablets
  @media screen and (max-width: 768px) {
    font-size: 0.9rem
  }

  //Mobile
  @media screen and (max-width: 480px) {
    font-size: 0.7rem;
  }
`;
