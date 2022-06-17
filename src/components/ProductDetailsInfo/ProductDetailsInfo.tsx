import React from "react";
import {
  ProductDescription,
  ProductDescriptionContainer,
  ProductDetailsPhotosMobileTabletContainer,
  ProductInfoContainer,
  ProductName,
  ProductNameContainer,
  ProductPrice,
  ProductPriceContainer,
} from "./style";
import ProductDetailsPhotosMobileTablet from "../ProductDetailsPhotosMobileTablet/ProductDetailsPhotosMobileTablet";
import { ProductDetailsProp } from "../../hooks/products/useProductByIdFetcher";

interface Props {
  product: ProductDetailsProp;
  deviceType?: string;
}

const ProductDetailsInfo = (props: Props) => {
  const product = props.product;
  const description = product.description;

  return (
    <ProductInfoContainer>
      <ProductNameContainer>
        <ProductName>{product.name}</ProductName>
      </ProductNameContainer>
      {props.deviceType !== "desktop" && (
        <ProductDetailsPhotosMobileTabletContainer>
          <ProductDetailsPhotosMobileTablet
            product={product}
            deviceType={props.deviceType}
          />
        </ProductDetailsPhotosMobileTabletContainer>
      )}
      <ProductPriceContainer>
        <ProductPrice>
          Price:&nbsp; ${product.price.toLocaleString()}
        </ProductPrice>
      </ProductPriceContainer>
      <ProductDescriptionContainer>
        <ProductDescription>
          {description.replaceAll(/\\n/g, "\n")}
        </ProductDescription>
      </ProductDescriptionContainer>
    </ProductInfoContainer>
  );
};

export default ProductDetailsInfo;
