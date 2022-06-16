import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductDetailsInfo from "../../components/ProductDetailsInfo/ProductDetailsInfo";
import ProductDetailsPhotosDesktop from "../../components/ProductDetailsPhotosDesktop/ProductDetailsPhotosDesktop";
import ProductDetailsBuyInfo from "../../components/ProductDetailsBuyInfo/ProductDetailsBuyInfo";
import { PDPContainer, ProductContainer, SimilarProducts } from "./style";
import { useProductByIdFetcher } from "../../hooks/products/useProductByIdFetcher";
import LoadingPage from "../../components/LoadingPage/LoadingPage";

const PDP = () => {
  const [isLoading, setLoading] = useState(true);
  const [deviceType, setDeviceType] = useState("");
  const { id } = useParams();
  const product = useProductByIdFetcher(Number(id));

  useEffect(() => {
    if (product !== undefined) {
      setLoading(false);
    }
  });

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

  if (isLoading) {
    return <LoadingPage />;
  }
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
          <ProductDetailsBuyInfo
            product={product}
          />
        </ProductContainer>
        <SimilarProducts>
          <h1>Similar product area!</h1>
        </SimilarProducts>
      </PDPContainer>
    );
  } else {
    return (
      <LoadingPage />
    );
  }
};

export default PDP;
