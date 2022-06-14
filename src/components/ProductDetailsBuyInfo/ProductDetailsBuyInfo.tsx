import React, { useState } from "react";
import {
  AddToCartButton,
  ButtonsContainer,
  BuyInfoBody,
  BuyInfoContainer,
  IndividualProductDeliveryInfoContainer,
  ProductDeleveryInfoFromBy,
  ProductDelivery,
  ProductDeliveryContainer,
  ProductDeliveryInfoContainer,
  ProductDeliverySpan,
  ProductInfoIntities,
  ProductQtnContainer,
  PdpBuyDetailsPriceContainer,
} from "./style";
import { ProductPrice } from "../ProductDetailsInfo/style";
import products from "../../products.json";
import QuantityDropdown from "../QuantityDropdown/QuantityDropdown";

const ProductDetailsBuyInfo = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <BuyInfoBody>
      <BuyInfoContainer>
        <PdpBuyDetailsPriceContainer>
          <ProductPrice>
            {products.price
              .toLocaleString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            €
          </ProductPrice>
        </PdpBuyDetailsPriceContainer>
        <ProductDeliveryContainer>
          <ProductDelivery>
            <ProductDeliverySpan>Delivery </ProductDeliverySpan> Monday, June 27
          </ProductDelivery>
        </ProductDeliveryContainer>
        <ProductQtnContainer>
          <QuantityDropdown
            optionSelected={quantity}
            setOptionSelected={setQuantity}
          />
        </ProductQtnContainer>
        <ButtonsContainer>
          <AddToCartButton>Add to Cart</AddToCartButton>
        </ButtonsContainer>
        <ProductDeliveryInfoContainer>
          <IndividualProductDeliveryInfoContainer>
            <ProductDeleveryInfoFromBy>Ships from</ProductDeleveryInfoFromBy>
            <ProductInfoIntities>Sweden</ProductInfoIntities>
          </IndividualProductDeliveryInfoContainer>
          <IndividualProductDeliveryInfoContainer>
            <ProductDeleveryInfoFromBy>Sold By </ProductDeleveryInfoFromBy>
            <ProductInfoIntities>Zé Manel</ProductInfoIntities>
          </IndividualProductDeliveryInfoContainer>
        </ProductDeliveryInfoContainer>
      </BuyInfoContainer>
    </BuyInfoBody>
  );
};

export default ProductDetailsBuyInfo;
