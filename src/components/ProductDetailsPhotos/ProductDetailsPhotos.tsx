import React, { useState } from "react";
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

const ProductDetailsPhotos = () => {
  const [chosenPhoto, setChosenPhoto] = useState(0);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      paritialVisibilityGutter: 60,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1.2,
      paritialVisibilityGutter: 60,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      paritialVisibilityGutter: 60,
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
          deviceType="desktop"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          infinite={true}
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
