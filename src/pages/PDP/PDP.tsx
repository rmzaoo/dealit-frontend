import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductDetailsInfo from "../../components/ProductDetailsInfo/ProductDetailsInfo";
import ProductDetailsPhotosDesktop from "../../components/ProductDetailsPhotosDesktop/ProductDetailsPhotosDesktop";
import ProductDetailsBuyInfo from "../../components/ProductDetailsBuyInfo/ProductDetailsBuyInfo";
import { PDPContainer, ProductContainer, SimilarProducts } from "./style";
import { useProductByIdFetcher } from "../../hooks/products/useProductByIdFetcher";

const PDP = () => {
  const [deviceType, setDeviceType] = useState("");
  const { id } = useParams();
  const product = useProductByIdFetcher(Number(id));

  useEffect(() => {
    let deviceWidth = window.innerWidth;
    const getDeviceType = () => {
      if (deviceWidth < 464) {
        setDeviceType("mobile");
      } else if (deviceWidth < 1024) {
        setDeviceType("tablet");
      } else {
        setDeviceType("desktop");
      }
    };

    getDeviceType();
  }, [window.innerWidth, deviceType]);
  if (product) {
    return (
      <PDPContainer>
        <ProductContainer>
          {deviceType === "desktop" && (
            <ProductDetailsPhotosDesktop
              product={product}
              deviceType={deviceType}
            />
          )}
          <ProductDetailsInfo deviceType={deviceType} product={product} />
          <ProductDetailsBuyInfo product={product} />
        </ProductContainer>
        <SimilarProducts>
          <h1>Similar product area!</h1>
        </SimilarProducts>
      </PDPContainer>
    );
  } else {
    return (
      <PDPContainer>
        <h1>NOT FOUND CARAGO!</h1>
      </PDPContainer>
    );
  }
};

export default PDP;
