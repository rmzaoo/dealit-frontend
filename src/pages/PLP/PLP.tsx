import React, { useEffect, useState } from "react";
import {
  MainCategory,
  MainText,
  LayerDividing,
  MainContainer,
  CategoryDiv,
  ScrollTo,
} from "./style";
import { useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import ProductListing from "../../components/ProductListing/ProductListing";
import { useAllProductsFetcher } from "../../hooks/products/useAllProductsFetcher";
import { ProductProps } from "../../components/Product/Product";
import { useSearchParams } from "react-router-dom";
import { useProductByCategoryFetcher } from "../../hooks/products/useProductByCategoryFetcher";

const PLP = () => {
  const parallax = useRef<IParallax>(null!);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();

  let mainProductsCategory: ProductProps[];
  const category = searchParams.get("category");
  if (category !== null) {
    mainProductsCategory = useProductByCategoryFetcher(3, category) || [
      {
        id: 0,
        name: "Loading...",
        photos: [""],
        price: 0,
      },
    ];
  }
  console.log(currentPage);
  const scroll = (to: number) => {
    if (parallax.current) {
      parallax.current.scrollTo(to);
      setCurrentPage(to);
    }
  };

  return (
    <MainContainer>
      <Parallax ref={parallax} pages={3} onScroll={() => scroll(0)}>
        <ParallaxLayer
          offset={0}
          speed={0.1}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            position: "sticky",
          }}
        >
          <CategoryDiv>
            <MainCategory>Category: {category}</MainCategory>
            <MainText>Scroll down to see all the products!</MainText>
          </CategoryDiv>
          <ProductListing oneColumn={false} products={mainProductsCategory} />
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
          <ProductListing oneColumn={false} products={mainProductsCategory} />
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
      <ScrollTo onClick={() => scroll(0)}>
        <p>Page 1</p>
      </ScrollTo>
      <ScrollTo onClick={() => scroll(1)}>
        <p>Page 2</p>
      </ScrollTo>
      <ScrollTo onClick={() => scroll(2)}>
        <p>Page 3</p>
      </ScrollTo>
    </MainContainer>
  );
};
export default PLP;
