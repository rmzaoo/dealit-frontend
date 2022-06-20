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
  SecondHalfOfScreenContainer,
  SimilarProductsContainer,
} from "./style";
import {
  ProductDetailsProp,
  useProductByIdFetcher,
} from "../../hooks/products/useProductByIdFetcher";
import LoadingPage from "../../components/LoadingPage/LoadingPage";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import SimilarProducts from "../../components/SimilarProducts/SimilarProducts";
import { fetchProductById } from "../../api/productsFetch";

const PDP = () => {
  const [isLoading, setLoading] = useState(true);
  const [subCategory, setSubCategory] = useState<string>("");
  const [deviceType, setDeviceType] = useState("");
  const [product, setProduct] = useState<ProductDetailsProp>();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetchProductById(parseInt(id)).then((data) => {
        setProduct(data);
      });
    }
  }, [id]);

  useEffect(() => {
    if (product) {
      setSubCategory(product.categoryName);
      setLoading(false);
    }
  }, [product]);

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
        <SecondHalfOfScreenContainer>
          <SimilarProductsContainer>
            <h2>You may Also Like</h2>
            <SimilarProducts subCategory={subCategory} product={product} />
          </SimilarProductsContainer>
        </SecondHalfOfScreenContainer>
      </PDPContainer>
    );
  } else {
    return <LoadingPage />;
  }
};

export default PDP;
