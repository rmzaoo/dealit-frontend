import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import products from "../../products.json";
import {
  ProductShowcasedPhoto,
} from "../ProductDetailsPhotosDesktop/style";
import { MobileProductImgContainer } from "./style";

interface Props {
  deviceType?: string;
}

const ProductDetailsPhotosMobileTablet = (Props: Props) => {
  const responsive = {
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  let prodImageList: any[] = [];

  products.img.forEach((value, index) => {
    prodImageList.push(
      <ProductShowcasedPhoto alt="product photo" src={value} />
    );
  });
  return (
    <MobileProductImgContainer>
      <Carousel
        ssr
        partialVisbile
        itemClass="image-item"
        responsive={responsive}
        deviceType={Props.deviceType}
        infinite={false}
        autoPlay={false}
        containerClass="carousel-container"
      >
        {prodImageList}
      </Carousel>
    </MobileProductImgContainer>
  );
};

export default ProductDetailsPhotosMobileTablet;
