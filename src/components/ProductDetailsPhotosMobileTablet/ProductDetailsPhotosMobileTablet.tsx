import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ProductDetailsProp } from "../../hooks/products/useProductByIdFetcher";
import { ProductShowcasedPhoto } from "../ProductDetailsPhotosDesktop/style";
import { MobileProductImgContainer, ProductMobileShowcasedPhoto } from "./style";
import noImage from "../../assets/noImageAvailable.png";

interface Props {
  product: ProductDetailsProp;
  deviceType?: string;
}

const ProductDetailsPhotosMobileTablet = (props: Props) => {
  const product = props.product;

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

  return (
    <MobileProductImgContainer>
      <Carousel
        ssr
        partialVisbile
        itemClass="image-item"
        responsive={responsive}
        deviceType={props.deviceType}
        infinite={false}
        autoPlay={false}
        containerClass="carousel-container"
      >
        {product.photos.map((value, index) => {
          return (
            <ProductMobileShowcasedPhoto
              onError={(e) => (e.currentTarget.src = noImage)}
              alt="product photo"
              src={value}
            />
          );
        })}
      </Carousel>
    </MobileProductImgContainer>
  );
};

export default ProductDetailsPhotosMobileTablet;
