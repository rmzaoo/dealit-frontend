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
import { ProductDetailsProp } from "../../hooks/products/useProductByIdFetcher";

interface Props {
  product: ProductDetailsProp;
  deviceType?: string;
}

const ProductDetailsInfo = (props: Props) => {
  const product = props.product;

  return (
    <ProductInfoContainer>
      <ProductNameContainer>
        <ProductName>{product.name}</ProductName>
      </ProductNameContainer>
      {props.deviceType !== "desktop" && (
        <ProductDetailsPhotosMobileTablet
          product={product}
          deviceType={props.deviceType}
        />
      )}
      <ProductPriceContainer>
        <ProductPrice>
          Price:&nbsp;
          {product.price.toLocaleString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          €
        </ProductPrice>
      </ProductPriceContainer>
      <ProductDescriptionContainer>
        <ProductDescription>{product.description}</ProductDescription>
      </ProductDescriptionContainer>
    </ProductInfoContainer>
  );
};

export default ProductDetailsInfo;
