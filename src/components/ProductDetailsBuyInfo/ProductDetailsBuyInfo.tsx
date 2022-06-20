import React, { useState, useEffect } from "react";
import axios from "axios";
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
  ProductInfoSeller,
} from "./style";
import { ProductPrice } from "../ProductDetailsInfo/style";
import QuantityDropdown from "../QuantityDropdown/QuantityDropdown";
import { ProductDetailsProp } from "../../hooks/products/useProductByIdFetcher";
import { fetchUserById } from "../../api/userFetch";

interface Props {
  product: ProductDetailsProp;
}

const ProductDetailsBuyInfo = (props: Props) => {
  const [address, setAddress] = useState<any>();
  const [name, setName] = useState();
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const product = props.product;
  const options: any = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };

  const currentDate = new Date();
  const deliveryDate = new Date(currentDate.setDate(currentDate.getDate() + 4));
  const id = Number(product.userId);

  useEffect(() => {
    fetchUserById(id).then((data) => {
      setName(data.username);
      setAddress(data.address);
    });
    
    setIsLoading(false);
  }, []);

  return (
    <BuyInfoBody>
      {name !== undefined && (
        <BuyInfoContainer>
          <PdpBuyDetailsPriceContainer>
            <ProductPrice>
              &nbsp; ${product.price.toLocaleString()}
            </ProductPrice>
          </PdpBuyDetailsPriceContainer>
          <ProductDeliveryContainer>
            <ProductDelivery>
              <ProductDeliverySpan>Delivery </ProductDeliverySpan>
              {deliveryDate.toLocaleDateString("en-US", options)}
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
              <ProductInfoIntities>{address.country}</ProductInfoIntities>
            </IndividualProductDeliveryInfoContainer>
            <IndividualProductDeliveryInfoContainer>
              <ProductDeleveryInfoFromBy>Sold By </ProductDeleveryInfoFromBy>
              <ProductInfoSeller
                onClick={() => console.log("move to user profile")}
              >
                {name}
              </ProductInfoSeller>
            </IndividualProductDeliveryInfoContainer>
          </ProductDeliveryInfoContainer>
        </BuyInfoContainer>
      )}
    </BuyInfoBody>
  );
};

export default ProductDetailsBuyInfo;
