import React from "react";
import ProductDetailsInfo from "../../components/ProductDetailsInfo/ProductDetailsInfo";
import ProductDetailsPhotos from "../../components/ProductDetailsPhotos/ProductDetailsPhotos";
import ProductDetailsBuyInfo from "../../components/ProductDetailsBuyInfo/ProductDetailsBuyInfo"
import { PDPContainer, ProductContainer, SimilarProducts } from "./style";

const PDP = () => {
  return (
    <PDPContainer>
      <ProductContainer>
        <ProductDetailsPhotos />
        <ProductDetailsInfo />
        <ProductDetailsBuyInfo />
      </ProductContainer>
      <SimilarProducts>
          <h1>Similar product area!</h1>
      </SimilarProducts>
      <h1>cenas</h1>
      <h1>cenas</h1>
    </PDPContainer>
  );
};

export default PDP;
