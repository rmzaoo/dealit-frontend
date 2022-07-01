import React from "react";
import { ProductDetailsProp } from "../../pages/PDP/PDP";
import Product from "../Product/Product";
import {
  ProductCat,
  ProductCatContainer,
  ProductContainer,
  ProductImg,
  ProductImgContainer,
  ProductInfoContainer,
  ProductNameContainerSell,
  ProductPrice,
  ProductPriceContainer,
} from "./style";

interface Props {
  product: ProductDetailsProp;
}

const MainProductComp = ({ product }: Props) => {
  return (
    <ProductContainer>
      <ProductCatContainer>
        <ProductCat></ProductCat>
      </ProductCatContainer>
      <ProductInfoContainer>
        <ProductImgContainer>
          <ProductImg src={product.photos[0]} />
        </ProductImgContainer>
        <ProductNameContainerSell>
          <h2>{product.name}</h2>
        </ProductNameContainerSell>
        <ProductPriceContainer>
          <ProductPrice>
            {"$" +
              Math.round((Number(product.price) + Number.EPSILON) * 100) / 100}
          </ProductPrice>
        </ProductPriceContainer>
      </ProductInfoContainer>
    </ProductContainer>
  );
};

export default MainProductComp;
