import React from "react";
import S from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  MobileProductImgContainer,
  MobileProductImg,
  ProductMobileShowcasedPhotoContainer,
} from "./style";
import noImage from "../../assets/noImageAvailable.png";
import { ProductDetailsProp } from "../../pages/PDP/PDP";

interface Props {
  product: ProductDetailsProp;
  deviceType?: string;
}

const ProductDetailsPhotosMobileTablet = (props: Props) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const Carousel = S.default ? S.default : S;
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
