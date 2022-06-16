import styled from "styled-components";
import { ProductPriceContainer } from "../ProductDetailsInfo/style";
import { SecundaryButton } from "../SecundaryButton/style";

export const BuyInfoBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  margin-right: 4%;
  padding: 5px;
  height: 100%;

  //Tablets
  @media screen and (max-width: 768px) {
    width: 50%;
    height: fit-content;
  }

  //Mobile
  @media screen and (max-width: 480px) {
    
  }
`;

export const BuyInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  border: 1px solid white;
  border-radius: 10px;
  padding: 5px;
  height: fit-content;

  //Tablets
  @media screen and (max-width: 768px) {
  }

  //Mobile
  @media screen and (max-width: 480px) {
    
  }
`;

export const ProductDeliveryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 10px;
`;

export const ProductDelivery = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: white;
`;

export const ProductDeliverySpan = styled.span`
  font-weight: normal;
`;

export const ProductQtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 90%;
  margin: 10px;

`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  width: 80%;
  height: 8%;
  margin: 3%;
  padding: 5px;
`;

export const IndividualButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 5px;
`;

export const PdpBuyDetailsPriceContainer = styled(ProductPriceContainer)`
  justify-content: center;
`;

export const AddToCartButton = styled(SecundaryButton)`
  width: 90%;
  background-color: #00bcd4;
`;

export const ProductDeliveryInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 80%;
  margin-left: 10%;
  padding: 2%;
`;

export const IndividualProductDeliveryInfoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  width: 100%;
  margin-left: 5%;
  margin-top: 5%;
`;

export const ProductDeleveryInfoFromBy = styled.span`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 45%;
  font-size: 0.9rem;
  color: gray;

  //Laptops and small screens
  @media screen and (max-width: 1024px) {
    font-size: 0.8rem;
  }

  //Tablets
  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }

  //Mobile
  @media screen and (max-width: 480px) {
    font-size: 0.7rem;
  }
`;

export const ProductInfoIntities = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 50%;
  font-size: 1rem;
  color: white;

  @media screen and (max-width: 1024px) {
    font-size: 0.8rem;
  }

  //Tablets
  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }

  //Mobile
  @media screen and (max-width: 480px) {
    font-size: 0.7rem;
  }
`;

export const ProductInfoSeller = styled(ProductInfoIntities)`
  cursor: pointer;

  &:hover {
    color: #02a4e3;
  }
`