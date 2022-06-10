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

const ProductDetailsInfo = () => {
  return (
    <ProductInfoContainer>
      <ProductNameContainer>
        <ProductName>{products.name}</ProductName>
      </ProductNameContainer>
      <ProductPriceContainer>
        <ProductPrice>
          Price:&nbsp;
          {products.price
            .toLocaleString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          &nbsp; €
        </ProductPrice>
      </ProductPriceContainer>
      <ProductDescriptionContainer>
        <ProductDescription>
          {products.description}
        </ProductDescription>
      </ProductDescriptionContainer>
    </ProductInfoContainer>
  );
};

export default ProductDetailsInfo;
