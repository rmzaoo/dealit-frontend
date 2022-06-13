import React, { useEffect, useState } from "react";
import {
  MainCategory,
  MainText,
  LayerDividing,
  MainContainer,
  GoToTop,
  ArrowUp,
  PageDown,
  ArrowDown,
  CategoryDiv,
} from "./style";
import { useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import ProductListing from "../../components/ProductListing/ProductListing";

const PLP = () => {
  const parallax = useRef<IParallax>(null!);
  const [currentPage, setCurrentPage] = useState(0);
  const [isFirstPage, setIsFirstPage] = useState(false);
  const [isLastPage, setIsLastPage] = useState(true);

  const scroll = (to: number) => {
    if (parallax.current) {
      parallax.current.scrollTo(to);
      setCurrentPage(to);
      if (currentPage === 0) {
        setIsFirstPage(true);
      }
    }
  };

  const handlePage = () => {
    if (currentPage === 2) {
      setCurrentPage(-1);
      setIsLastPage(false);
    } else {
      setIsLastPage(true);
    }
  };

  console.log(currentPage);
  return (
    <MainContainer>
      {isFirstPage && (
        <GoToTop onClick={() => scroll(0)}>
          <ArrowUp />
        </GoToTop>
      )}
      {isLastPage && (
        <PageDown>
          <ArrowDown onClick={() => scroll(currentPage + 1)} />
        </PageDown>
      )}

      <Parallax ref={parallax} pages={3} onScroll={() => scroll(0)}>
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
          <CategoryDiv>
            <MainCategory>Category:</MainCategory>
            <MainText>Scroll down to see all the products!</MainText>
          </CategoryDiv>
          <ProductListing oneColumn={false} />
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
          offset={1.12}
          speed={0.5}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <ProductListing oneColumn={false} />
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
