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
import { useDispatch, useSelector } from "react-redux";


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
  const [counter, setCounter] = useState(0);
  const [quantity, setQuantity] = useState<string>("1");
  const [isLoading, setIsLoading] = useState(false);
  const product = props.product;
  const [price, setPrice] = useState(product.price.toLocaleString());

  const context: any = useSelector((state: any) => state);
  const [opened, setOpened]: any = useState(context.cartIsOpened);

  const options: any = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };

  const currentDate = new Date();
  const deliveryDate = new Date(currentDate.setDate(currentDate.getDate() + 4));
  const id = Number(product.userId);

  const dispatch = useDispatch();

  useEffect(() => {
    fetchUserById(id).then((data) => {
      setName(data.username);
      setAddress(data.address);
    });
    setIsLoading(false);
  }, []);

  function handleDispatch() {
    dispatch({ type: "SEND_OPENED", payload: { opened: true } });
    dispatch({ type: "ADD", payload: { product, quantity, counter, opened } });
  }

  return (
    <BuyInfoBody>
      {name !== undefined && (
        <BuyInfoContainer>
          <PdpBuyDetailsPriceContainer>
            <ProductPrice>&nbsp; ${price}</ProductPrice>
          </PdpBuyDetailsPriceContainer>
          <ProductDeliveryContainer>
            <ProductDelivery>
              <ProductDeliverySpan>Delivery </ProductDeliverySpan>
              {deliveryDate.toLocaleDateString("en-US", options)}
            </ProductDelivery>
          </ProductDeliveryContainer>
          <ProductQtnContainer>
            <StyledQuantityLabel>
              Quantity:
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
            <AddToCartButton onClick={() => handleDispatch()}>
              Add to Cart
            </AddToCartButton>
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
