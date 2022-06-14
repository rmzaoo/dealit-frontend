import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  OtherPhoto,
  OtherPhotoContainer,
  OtherProductPhotosContainer,
  ProductPhotosContainer,
  ProductShowcasedPhoto,
  ProductShowcasedPhotoContainer,
} from "./style";
import noImage from "../../assets/noImageAvailable.png";
import products from "../../products.json";
import { ProductDetailsProp } from "../../hooks/products/useProductByIdFetcher";

interface Props {
  product: ProductDetailsProp;
  deviceType?: string;
}

const ProductDetailsPhotos = (props: Props) => {
  const [chosenPhoto, setChosenPhoto] = useState(0);
  const product = props.product;

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 2,
    },
  };

  return (
    <ProductPhotosContainer>
      <ProductShowcasedPhotoContainer>
        <ProductShowcasedPhoto
          alt="Product showcased photo"
          src={product.photos[chosenPhoto]}
          onError={(e) => (e.currentTarget.src = noImage)}
        />
      </ProductShowcasedPhotoContainer>
      <OtherProductPhotosContainer>
        <Carousel
          ssr
          partialVisbile
          itemClass="image-item"
          responsive={responsive}
          deviceType={props.deviceType}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          infinite={false}
          autoPlay={false}
          containerClass="carousel-container"
        >
          {product.photos.map((value, index) => {
            return (
              <OtherPhotoContainer>
                <OtherPhoto
                  alt="product photo"
                  src={value}
                  onClick={() => setChosenPhoto(index)}
                  active={value === product.photos[chosenPhoto]}
                  onError={(e) => (e.currentTarget.src = noImage)}
                />
              </OtherPhotoContainer>
            );
          })}
        </Carousel>
      </OtherProductPhotosContainer>
    </ProductPhotosContainer>
  );
};

export default ProductDetailsPhotos;
