import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ProductDetailsProp } from "../../hooks/products/useProductByIdFetcher";
import SimpleImageSlider from "react-simple-image-slider";
import {
  MobileProductImgContainer,
  MobileProductImg,
  ProductMobileShowcasedPhotoContainer,
} from "./style";
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

  let productImages: any[] = [];

  product.photos.forEach((value: string, index: number) => {
    productImages.push(value);
  });

  const images = () => {};

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
            <ProductMobileShowcasedPhotoContainer>
              <MobileProductImg
                onError={(e) => (e.currentTarget.src = noImage)}
                alt="product photo"
                key={index.toString()}
                src={value}
              />
            </ProductMobileShowcasedPhotoContainer>
          );
        })}
      </Carousel>
    </MobileProductImgContainer>
  );
};

export default ProductDetailsPhotosMobileTablet;
