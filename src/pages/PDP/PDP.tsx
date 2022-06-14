import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductDetailsInfo from "../../components/ProductDetailsInfo/ProductDetailsInfo";
import ProductDetailsPhotosDesktop from "../../components/ProductDetailsPhotosDesktop/ProductDetailsPhotosDesktop";
import ProductDetailsBuyInfo from "../../components/ProductDetailsBuyInfo/ProductDetailsBuyInfo";
import { PDPContainer, ProductContainer, SimilarProducts } from "./style";
import axios from "axios";

const PDP = () => {
  const [deviceType, setDeviceType] = useState("");
  const [product, setProduct] = useState("");
  const { productId } = useParams();
  const Url = "http://localhost:3220";

  useEffect(() => {
    let deviceWidth = window.innerWidth;
    let link = Url + "/dealit/api/products/" + productId;

    const getProduct = async () => {
      let res = await axios.get(link);
      setProduct(res.data);
    };

    const getDeviceType = () => {
      if (deviceWidth < 464) {
        setDeviceType("mobile");
      } else if (deviceWidth < 1024) {
        setDeviceType("tablet");
      } else {
        setDeviceType("desktop");
      }
    };

    getProduct();
    console.log(product);
    getDeviceType();
  }, [window.innerWidth, deviceType]);

  return (
    <PDPContainer>
      <ProductContainer>
        {deviceType === "desktop" && (
          <ProductDetailsPhotosDesktop deviceType={deviceType} />
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
