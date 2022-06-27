import React, { useState, useEffect, useLayoutEffect } from "react";
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
import { ProductDetailsProp } from "../../hooks/products/useProductByIdFetcher";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import SimilarProducts from "../../components/SimilarProducts/SimilarProducts";
import { fetchProductById } from "../../api/productsFetch";

const PDP = () => {
  const [isLoading, setLoading] = useState(true);
  const [subCategory, setSubCategory] = useState<string>("");
  const [deviceType, setDeviceType] = useState("");
  const [product, setProduct] = useState<ProductDetailsProp>();

  const { id } = useParams();

  const scroolToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useLayoutEffect(() => {
    if (id) {
      fetchProductById(parseInt(id)).then((data) => {
        setProduct(data);
        scroolToTop();
      });
    }
  }, [id]);

  useLayoutEffect(() => {
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

  return (
    <PDPContainer>
      <ProductDetailsContainer>
        {!isLoading && (
          <>
            <BreadCrumbDiv>
              <Breadcrumb subCategory={subCategory} />
            </BreadCrumbDiv>
            <ProductContainer>
              {product && (
                <>
                  {deviceType === "desktop" && (
                    <ProductDetailsPhotosDesktop
                      product={product}
                      deviceType={deviceType}
                    />
                  )}
                  <ProductDetailsInfo
                    deviceType={deviceType}
                    product={product}
                  />
                  <ProductDetailsBuyInfo product={product} />
                </>
              )}
            </ProductContainer>
          </>
        )}
      </ProductDetailsContainer>
      {!isLoading && (
        <SecondHalfOfScreenContainer>
          <SimilarProductsContainer>
            <h2>You may Also Like</h2>
            {product && (
              <SimilarProducts subCategory={subCategory} product={product} />
            )}
          </SimilarProductsContainer>
        </SecondHalfOfScreenContainer>
      )}
    </PDPContainer>
  );
};

export default PDP;
