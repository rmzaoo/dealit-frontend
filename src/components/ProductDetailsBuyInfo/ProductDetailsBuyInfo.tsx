import React, { useState, useEffect } from "react";
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
  StyledQuantityLabel,
  StyledQuantityInput,
} from "./style";
import { ProductPrice } from "../ProductDetailsInfo/style";
import { fetchUserById } from "../../api/userFetch";
import { ProductDetailsProp } from "../../pages/PDP/PDP";

export interface AddressesDetailsProp {
  id: number;
  country: string;
  city: string;
  zipCode: string;
  street: string;
  houseNumber: string;
  isFavorite: boolean;
  userId: number;
}

interface Props {
  product: ProductDetailsProp;
}

const ProductDetailsBuyInfo = (props: Props) => {
  const [address, setAddress] = useState<AddressesDetailsProp>();
  const [name, setName] = useState();
  const [quantity, setQuantity] = useState<string>("1");
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
            <StyledQuantityLabel>
              Quantity:{" "}
              <StyledQuantityInput
                type="text"
                name="quantity"
                pattern="[0-9]*"
                value={quantity}
                onChange={(e) => {
                  setQuantity((val) =>
                    e.target.validity.valid ? e.target.value : val
                  );
                }}
              ></StyledQuantityInput>
            </StyledQuantityLabel>
          </ProductQtnContainer>
          <ButtonsContainer>
            <AddToCartButton>Add to Cart</AddToCartButton>
          </ButtonsContainer>
          <ProductDeliveryInfoContainer>
            <IndividualProductDeliveryInfoContainer>
              <ProductDeleveryInfoFromBy>Ships from</ProductDeleveryInfoFromBy>
              {address !== undefined && (
                <ProductInfoIntities>{address.country}</ProductInfoIntities>
              )}
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
