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
import products from "../../products.json";

interface Props {
  deviceType?: string;
}

const ProductDetailsPhotos = (Props: Props) => {
  const [chosenPhoto, setChosenPhoto] = useState(0);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 2,
    },
  };

  let prodImageList: any[] = [];

  products.img.forEach((value, index) => {
    prodImageList.push(
      <OtherPhotoContainer>
        <OtherPhoto
          alt="product photo"
          src={value}
          onClick={() => setChosenPhoto(index)}
          active={value === products.img[chosenPhoto]}
        />
      </OtherPhotoContainer>
    );
  });

  return (
    <ProductPhotosContainer>
      <ProductShowcasedPhotoContainer>
        <ProductShowcasedPhoto src={products.img[chosenPhoto]} />
      </ProductShowcasedPhotoContainer>
      <OtherProductPhotosContainer>
        <Carousel
          ssr
          partialVisbile
          itemClass="image-item"
          responsive={responsive}
          deviceType={Props.deviceType}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          infinite={false}
          autoPlay={false}
          containerClass="carousel-container"
        >
          {prodImageList}
        </Carousel>
      </OtherProductPhotosContainer>
    </ProductPhotosContainer>
  );
};

export default ProductDetailsPhotos;
