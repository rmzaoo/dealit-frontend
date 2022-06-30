import styled from "styled-components";

export const OrderContentDetailsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 95%;
  width: 100%;
`;

export const OrderContentDetailsDeliveryDateContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 90%;
  height: 10%;
  margin-bottom: 10px;
`;

export const OrderDeliveryTextContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const OrderDeliveryText = styled.p`
  font-size: 1.1rem;
  font-weight: bold;

  //Laptops and small screens
  @media screen and (max-width: 1024px) {
    font-size: 1rem;
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

export const OrderContentDetailsProducts = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 5px;
    border-radius: 7px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #c0c0c0;
    border-radius: 7px;
  }

  &::-webkit-scrollbar-track {
    background-color: #808080;
    border-radius: 7px;
  }
`;
