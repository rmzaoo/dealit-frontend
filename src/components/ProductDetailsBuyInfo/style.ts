import styled from "styled-components";
import { PrimaryButton } from "../PrimaryButton/style";
import {
  ProductPrice,
  ProductPriceContainer,
} from "../ProductDetailsInfo/style";

export const BuyInfoBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18%;
  margin-right: 5%;
  padding-left: 10px;
  height: 100%;
`

export const BuyInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  border: 1px solid black;
  border-radius: 10px;
  height: 60%;
`;

export const ProductDeliveryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 10px;
`;

export const ProductDelivery = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
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
  width: 90%;
  height: 10%;
  margin: 1%;
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
`

export const AddToCartButton = styled(PrimaryButton)`
  background-color: #ffd814;
  width: 70%;
  border-radius: 20px;
  border: none;
  height: 80%;

  &:hover {
    cursor: pointer;
    border-radius: 20px;
  }
`;

export const BuyNow = styled(PrimaryButton)`
  width: 70%;
  background-color: #ffa41c;
  border-radius: 20px;
  border: none;
  height: 80%;

  &:hover {
    cursor: pointer;
    border-radius: 20px;
  }
`;

export const ProductDeliveryInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 70%;
  margin-top: 5%;
  padding: 2%;
`;

export const IndividualProductDeliveryInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
  margin-left: 5%;
`;

export const ProductDeleveryInfoFromBy = styled.span`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 45%;
  font-size: 0.9rem;
  color: #565959;
`;

export const ProductInfoIntities = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 50%;
  font-size: 0.9rem;
`;
