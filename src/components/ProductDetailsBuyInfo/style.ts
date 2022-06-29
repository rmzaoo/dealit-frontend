import styled from "styled-components";
import SecundaryButton from "../SecundaryButton/SecundaryButton";

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
    width: 70%;
    height: 30%;
    padding: 0px;
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
    height: 90%;
    width: 90%;
  }
`;

export const ProductDeliveryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 10px;

  //Tablets
  @media screen and (max-width: 768px) {
   margin: 5px;
  }
`;

export const ProductDelivery = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: white;

  //Tablets
  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
  }

  //Mobile
  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
  }
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

export const PdpBuyDetailsPriceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 8%;

  //Tablets
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const AddToCartButton = styled(SecundaryButton)`
  color: white;

  //Tablets
  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
  }
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
    font-size: 0.7rem;
  }

  //Mobile
  @media screen and (max-width: 480px) {
    font-size: 0.6rem;
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
`;

export const StyledQuantityLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.1rem;

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

export const StyledQuantityInput = styled.input`
  margin-left: 10px;
  width: 20%;
  text-align: center;
  font-size: 1rem;

  //Laptops and small screens
  @media screen and (max-width: 1024px) {
    font-size: 0.9rem;
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
