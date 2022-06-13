import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
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
} from "./style";

const Homepage = () => {
  const alignCenter = { display: "flex", alignItems: "center" };

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

      <ParallaxLayer sticky={{ start: 1, end: 6 }} style={{ ...alignCenter }}>
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
          name="Lorem impsum dolor sit amet consectetur adipisicing elit"
          photos={[
            "https://m.media-amazon.com/images/I/61gmXNWdZML._AC_SY355_.jpg",
          ]}
          price={99.99}
        />
      </ParallaxLayer>

      <ParallaxLayer
        speed={0.5}
        sticky={{ start: 4.1, end: 6 }}
        style={{ ...alignCenter, justifyContent: "flex-end" }}
      >
        <RandomProduct
          name="Lorem impsum dolor sit amet consectetur adipisicing elit"
          photos={[
            "https://m.media-amazon.com/images/I/61gmXNWdZML._AC_SY355_.jpg",
          ]}
          price={99.99}
        />
      </ParallaxLayer>

      <ParallaxLayer
        speed={-2.5}
        offset={6}
        sticky={{ start: 5.5, end: 6 }}
        style={{
          ...alignCenter,
          justifyContent: "center",
          backgroundColor: "#141414",
        }}
      >
        <div>
          <p>get recent Products</p>
        </div>
      </ParallaxLayer>
      <ParallaxLayer
        speed={0.5}
        offset={8}
        sticky={{ start: 7, end: 8 }}
        style={{
          ...alignCenter,
          justifyContent: "center",
        }}
      >
        <div>
          <p></p>
        </div>
      </ParallaxLayer>
    </Parallax>
  );
};

export default Homepage;
