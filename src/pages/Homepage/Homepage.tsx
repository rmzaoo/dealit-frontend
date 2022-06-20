import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import {
  FullDiv,
  LogoStyled,
  LogoColor,
  Description,
  ImageFull,
  FullDivFilter,
  RandomProductsDiv,
  RandomProductTitle,
  RandomProductSubtitle,
  RandomProduct,
  ContainerDealitDetails,
  DetailsInfo,
  FaqContainer,
  RecentProductsContainer,
} from "./style";
import detailsSVG from "../../assets/details.svg";
import ProductListing from "../../components/ProductListing/ProductListing";
import { faqQuestions } from "../../api/faqFetch";
import { ProductProps } from "../../components/Product/Product";
import { useRandomProductFetcher } from "../../hooks/products/useRandomProductFetcher";
import { useAllProductsFetcher } from "../../hooks/products/useAllProductsFetcher";
import { useRecentProductsFetcher } from "../../hooks/products/useRecentProductsFetcher";

const Homepage = () => {
  const alignCenter = { display: "flex", alignItems: "center" };
  const randomProduct: ProductProps[] = useRandomProductFetcher(2) || [
    { id: 0, name: "Loading...", photos: [""], price: 0 },
    { id: 0, name: "Loading...", photos: [""], price: 0 },
  ];
  const recentProducts: ProductProps[] = useRecentProductsFetcher(10) || [
    { id: 0, name: "Loading...", photos: [""], price: 0 },
  ];

  return (
    <Parallax
      pages={8}
      style={{
        backgroundColor: "#27364b",
        color: "white",
        backgroundImage: "linear-gradient(175deg, #27364b 5%, #0e1318 100%)",
      }}
    >
      <ParallaxLayer
        offset={0}
        speed={0.5}
        style={{ ...alignCenter, justifyContent: "center" }}
      >
        <FullDiv>
          <ImageFull src="https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
          <FullDivFilter>
            <LogoStyled>
              Deal<LogoColor>it</LogoColor>
            </LogoStyled>
            <Description>Buy and sell products with ease</Description>
          </FullDivFilter>
        </FullDiv>
      </ParallaxLayer>

      <ParallaxLayer sticky={{ start: 1, end: 5.5 }} style={{ ...alignCenter }}>
        <RandomProductsDiv>
          <RandomProductTitle> Don't know what to buy?</RandomProductTitle>
          <RandomProductSubtitle>
            Let us show some of the products that are available
          </RandomProductSubtitle>
        </RandomProductsDiv>
      </ParallaxLayer>

      <ParallaxLayer
        speed={0.5}
        sticky={{ start: 2.2, end: 3 }}
        style={{ ...alignCenter, justifyContent: "flex-end" }}
      >
        <RandomProduct
          id={randomProduct[0].id}
          name={randomProduct[0].name}
          photos={randomProduct[0].photos}
          price={randomProduct[0].price}
        />
      </ParallaxLayer>

      <ParallaxLayer
        speed={0.5}
        sticky={{ start: 4.1, end: 5.5 }}
        style={{ ...alignCenter, justifyContent: "flex-end" }}
      >
        <RandomProduct
          id={randomProduct[1].id}
          name={randomProduct[1].name}
          photos={randomProduct[1].photos}
          price={randomProduct[1].price}
        />
      </ParallaxLayer>

      <ParallaxLayer
        speed={-2.5}
        offset={6}
        sticky={{ start: 5.5, end: 5.8 }}
        style={{
          ...alignCenter,
          justifyContent: "center",
          backgroundColor: "#141414",
        }}
      >
        <RecentProductsContainer>
          <h2>Recent Products</h2>
          <ProductListing oneColumn={true} products={recentProducts} />
        </RecentProductsContainer>
      </ParallaxLayer>
      <ParallaxLayer
        speed={0.5}
        offset={7}
        sticky={{ start: 7 }}
        style={{
          ...alignCenter,
          justifyContent: "center",
        }}
      >
        <ContainerDealitDetails>
          <DetailsInfo>
            <h1>About Us</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, quisquam.
            </p>
            <img src={detailsSVG} alt="details" />
          </DetailsInfo>
          <FaqContainer
            title="FAQ"
            description="Were you can find the answer to your question"
            mapQuestions={faqQuestions}
          />
        </ContainerDealitDetails>
      </ParallaxLayer>
    </Parallax>
  );
};

export default Homepage;
