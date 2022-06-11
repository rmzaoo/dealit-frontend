import React from "react";
import {
  MainCategory,
  MainText,
  LayerDividing,
  MainContainer,
  GoToTop,
  ArrowUp,
} from "./style";
import { useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import "react-lazy-load-image-component/src/effects/blur.css";
import ProductListing from "../../components/ProductListing/ProductListing";
import { IoIosArrowRoundUp } from "react-icons/io";

const PLP = () => {
  const parallax = useRef<IParallax>(null!);

  return (
    <MainContainer>
      <GoToTop onClick={() => parallax.current.scrollTo(0)}>
        <ArrowUp />
      </GoToTop>
      <Parallax ref={parallax} pages={3}>
        <ParallaxLayer
          offset={0}
          speed={0.1}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              paddingTop: "12vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <MainCategory>Category:</MainCategory>
            <MainText>Scroll down to see all the products!</MainText>
          </div>
          <ProductListing />
        </ParallaxLayer>

        <LayerDividing
          offset={0.95}
          speed={0.8}
          style={{
            backgroundColor: "white",
          }}
        >
          <LayerDividing
            offset={0.95}
            speed={1}
            style={{
              clipPath: "polygon(100% 20%, 100% 56%, 0 100%, 0 65%)",
              backgroundColor: "rgb(0, 180, 204)",
            }}
          />
        </LayerDividing>

        <ParallaxLayer
          offset={1.2}
          speed={0.5}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            objectFit: "cover",
          }}
        >
          <ProductListing />
        </ParallaxLayer>
        <ParallaxLayer
          offset={1.9}
          speed={0.8}
          style={{
            backgroundColor: "white",
            clipPath: "polygon(100% 14%, 100% 56%, 0 100%, 0 66%)",
          }}
        >
          <LayerDividing
            offset={1}
            speed={1.5}
            style={{
              clipPath: "polygon(100% 20%, 100% 56%, 0 100%, 0 65%)",
              backgroundColor: "rgb(0, 180, 204)",
            }}
          />
        </ParallaxLayer>
      </Parallax>
    </MainContainer>
  );
};
export default PLP;
