import React, {useState} from "react";
import {
  BuyInfoContainer,
  ProductDelivery,
  ProductDeliveryContainer,
  ProductDeliverySpan,
  ProductQtnContainer,
} from "./style";
import {
  ProductPrice,
  ProductPriceContainer,
} from "../ProductDetailsInfo/style";
import products from "../../products.json";
import QuantityDropdown from "../QuantityDropdown/QuantityDropdown";

const ProductDetailsBuyInfo = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <BuyInfoContainer>
      <ProductPriceContainer>
        <ProductPrice>
          {products.price
            .toLocaleString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          &nbsp; €
        </ProductPrice>
      </ProductPriceContainer>
      <ProductDeliveryContainer>
        <ProductDelivery>
          <ProductDeliverySpan>Delivery </ProductDeliverySpan> Monday, June 27
        </ProductDelivery>
      </ProductDeliveryContainer>
      <ProductQtnContainer>
        <QuantityDropdown optionSelected={quantity} setOptionSelected={setQuantity} />
      </ProductQtnContainer>
    </BuyInfoContainer>
  );
};

export default ProductDetailsBuyInfo;
