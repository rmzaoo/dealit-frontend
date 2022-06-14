import React, { useState, useEffect } from "react";
import ProductDetailsInfo from "../../components/ProductDetailsInfo/ProductDetailsInfo";
import ProductDetailsPhotos from "../../components/ProductDetailsPhotosDesktop/ProductDetailsPhotosDesktop";
import ProductDetailsBuyInfo from "../../components/ProductDetailsBuyInfo/ProductDetailsBuyInfo";
import { PDPContainer, ProductContainer, SimilarProducts } from "./style";

const PDP = () => {
  const [deviceType, setDeviceType] = useState("");

  useEffect(() => {
    let deviceWidth = window.innerWidth;
    console.log(deviceWidth);
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

  console.log(deviceType);

  return (
    <PDPContainer>
      <ProductContainer>
        {deviceType === "desktop" && (
          <ProductDetailsPhotos deviceType={deviceType} />
        )}
        <ProductDetailsInfo deviceType={deviceType} />
        <ProductDetailsBuyInfo />
      </ProductContainer>
      <SimilarProducts>
        <h1>Similar product area!</h1>
      </SimilarProducts>
    </PDPContainer>
  );
};

export default PDP;
