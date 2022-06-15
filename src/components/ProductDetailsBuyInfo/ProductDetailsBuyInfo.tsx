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

interface Props {
  product: ProductDetailsProp;
  isLoading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProductDetailsBuyInfo = (props: Props) => {
  const [address, setAddress] = useState<any>();
  const [name, setName] = useState();
  const [quantity, setQuantity] = useState(1);
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
    axios
      .get(`http://10.10.225.145:3220/dealit/api/users/${id}`)
      .then((response) => {
        const favoriteAddress = response.data.addresses.filter(
          (e: { isFavorite: boolean }) => {
            if (e.isFavorite) {
              return e;
            }
          }
        );
        setAddress(favoriteAddress);
        setName(response.data.username);
        props.setLoading(false);
      });
  }, []);

  return (
    <BuyInfoBody>
      {name !== undefined && (
        <BuyInfoContainer>
          <PdpBuyDetailsPriceContainer>
            <ProductPrice>
              {product.price
                .toLocaleString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              €
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
              <ProductInfoIntities>{address[0].country}</ProductInfoIntities>
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
