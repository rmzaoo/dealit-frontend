import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductDetailsInfo from "../../components/ProductDetailsInfo/ProductDetailsInfo";
import ProductDetailsPhotosDesktop from "../../components/ProductDetailsPhotosDesktop/ProductDetailsPhotosDesktop";
import ProductDetailsBuyInfo from "../../components/ProductDetailsBuyInfo/ProductDetailsBuyInfo";
import {
  BreadCrumbDiv,
  PDPContainer,
  ProductContainer,
  ProductDetailsContainer,
  SimilarProducts,
} from "./style";
import { useProductByIdFetcher } from "../../hooks/products/useProductByIdFetcher";
import LoadingPage from "../../components/LoadingPage/LoadingPage";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

const PDP = () => {
  const [isLoading, setLoading] = useState(true);
  const [subCategory, setSubCategory] = useState<string>("");
  const [deviceType, setDeviceType] = useState("");
  const { id } = useParams();
  const product = useProductByIdFetcher(Number(id));

  useEffect(() => {
    if (product !== undefined) {
      setSubCategory(product.categoryName);

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
        <ProductDetailsContainer>
          <BreadCrumbDiv>
            <Breadcrumb subCategory={subCategory} />
          </BreadCrumbDiv>
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
        </ProductDetailsContainer>
        <SimilarProducts>
          <h1>Similar product area!</h1>
        </SimilarProducts>
      </PDPContainer>
    );
  } else {
    return <LoadingPage />;
  }
};

export default PDP;
