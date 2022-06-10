import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import {
  FullDiv,
  LogoStyled,
  LogoColor,
  Description,
  ImageFull,
  FullDivFilter,
  RandomProductsDiv,
  RandomProduct,
  RandomProductTitle,
  RandomProductSubtitle,
} from "./style";

const Homepage = () => {
  const alignCenter = { display: "flex", alignItems: "center" };

  return (
    <Parallax pages={5} style={{ backgroundColor: "#1a212b", color: "white" }}>
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

      <ParallaxLayer sticky={{ start: 1, end: 3.5 }} style={{ ...alignCenter }}>
        <RandomProductsDiv>
          <RandomProductTitle> Don't know what to buy?</RandomProductTitle>
          <RandomProductSubtitle>
            Let us show some of the products that are available
          </RandomProductSubtitle>
        </RandomProductsDiv>
      </ParallaxLayer>

      <ParallaxLayer
        speed={0.5}
        sticky={{ start: 1.5, end: 2 }}
        style={{ ...alignCenter, justifyContent: "flex-end" }}
      >
        <RandomProduct>
          <p>Product 1</p>
        </RandomProduct>
      </ParallaxLayer>

      <ParallaxLayer
        speed={0.5}
        sticky={{ start: 3, end: 3.5 }}
        style={{ ...alignCenter, justifyContent: "flex-end" }}
      >
        <RandomProduct>
          <p>Product 2</p>
        </RandomProduct>
      </ParallaxLayer>
      <ParallaxLayer
        speed={0.5}
        sticky={{ start: 4.5, end: 5 }}
        style={{ ...alignCenter, justifyContent: "flex-end" }}
        >
        <div>
          <p>Product 3</p>
        </div>
        </ParallaxLayer>
    </Parallax>
  );
};

export default Homepage;
