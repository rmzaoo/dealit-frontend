import React from "react";
import {
  ProductDescription,
  ProductDescriptionContainer,
  ProductInfoContainer,
  ProductName,
  ProductNameContainer,
  ProductPrice,
  ProductPriceContainer,
} from "./style";
import products from "../../products.json";
import ProductDetailsPhotosMobileTablet from "../ProductDetailsPhotosMobileTablet/ProductDetailsPhotosMobileTablet";

interface Props {
  deviceType?: string;
}

const ProductDetailsInfo = (Props: Props) => {
  return (
    <ProductInfoContainer>
      <ProductNameContainer>
        <ProductName>{products.name}</ProductName>
      </ProductNameContainer>
      {Props.deviceType !== "desktop" && (
        <ProductDetailsPhotosMobileTablet deviceType={Props.deviceType} />
      )}
      <ProductPriceContainer>
        <ProductPrice>
          Price:&nbsp;
          {products.price
            .toLocaleString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          €
        </ProductPrice>
      </ProductPriceContainer>
      <ProductDescriptionContainer>
        <ProductDescription>{products.description}</ProductDescription>
      </ProductDescriptionContainer>
    </ProductInfoContainer>
  );
};

export default ProductDetailsInfo;
