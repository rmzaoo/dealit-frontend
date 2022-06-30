import styled from "styled-components";

export const OrderProductContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 90%;
  margin-bottom: 5px;
`;

export const OrderProductPhotoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100px;

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

export const OrderProductPhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const OrderProductNameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 100%;

  //Mobile
  @media screen and (max-width: 480px) {
    width: 70%;
  }
`;

export const OrderProductName = styled.div`
  font-size: 1rem;
  width: 80%;

  //Tablets
  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
  }

  //Mobile
  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const OrderProductQuantityContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 40%;

  //Mobile
  @media screen and (max-width: 480px) {
    flex-direction: row;
  }
`;

export const OrderProductQuantityTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50%;
`;

export const OrderProductQuantityText = styled.p`
  font-size: 0.9rem;

  //Tablets
  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
    margin-right: 5px;
  }
`;

export const OrderProductNameAndQuantityContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 70%;

  //Mobile
  @media screen and (max-width: 480px) {
    flex-direction: column;
    width: 60%;
  }
`;

export const OrderProductQuantityValueContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50%;
`;

export const OrderProductQuantityValue = styled.div`
  font-size: 1rem;
  font-weight: bold;

  //Tablets
  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;
