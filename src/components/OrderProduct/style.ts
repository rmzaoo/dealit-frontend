import styled from "styled-components";

export const OrderProductContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 90%;
`;

export const OrderProductPhotoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  height: 100px;
  width: 100px;
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
`;

export const OrderProductQuantityContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 40%;
`;

export const OrderProductQuantityTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50%;
`;

export const OrderProductQuantityText = styled.p`
  font-size: 0.9rem;
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
`

