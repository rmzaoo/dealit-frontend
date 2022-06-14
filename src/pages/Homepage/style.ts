import styled from "styled-components";
import Faq from "../../components/Faq/Faq";
import Product from "../../components/Product/Product";
import ProductListing from "../../components/ProductListing/ProductListing";

const HomepageContainer = styled.div`
  background-color: blue;
  height: 100%;
`;

const FullDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;

  animation: fadeIn 1s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const LogoStyled = styled.span`
  font-weight: 100;
  font-size: 100px;
  letter-spacing: 5px;
  color: white;
  text-shadow: 0 0 10px #000;
`;

const LogoColor = styled.span`
  letter-spacing: 0px;
  color: smokewhite;
  font-weight: bold;
`;

const Description = styled.p`
  font-size: 20px;
  color: white;
  text-align: center;
`;

const ImageFull = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const FullDivFilter = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const RandomProductsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 50px;

  @media screen and (max-width: 768px) {
    margin-left: 10px;
  }
`;

const RandomProductTitle = styled.h1`
  font-size: 50px;
`;

const RandomProductSubtitle = styled.p`
  font-size: 20px;
`;

const RandomProduct = styled(Product)`
  margin-top: 20px;
  margin-bottom: 20px;
  margin-right: 50px;

  @media screen and (max-width: 768px) {
    margin: 0;
    width: 100%;
    align-items: center;
    height: 100%;
    border-radius: 0;
  }
`;

const ContainerDealitDetails = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  height: 50%;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
  }
`;

const DetailsInfo = styled.div`
  padding: 20px;
  width: 100%;

  h1 {
    color: #02a4e3;
  }

  img {
    width: 100%;
    height: 500px;

    @media screen and (max-width: 768px) {
      height: 50%;
    }
  }

  @media screen and (max-width: 768px) {
    height: 30%;
    width: 90%;
  }
`;

const FaqContainer = styled(Faq)`
  padding: 20px;
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 768px) {
    padding: 0;
    height: 55%;
    width: 95%;

    .questions {
      display: flex;
      flex-direction: row;
      display: flex;
      justify-content: flex-start;
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      scroll-behavior: smooth;
      -webkit-overflow-scrolling: touch;

      div {
        flex-shrink: 0;
        margin-right: 10px;
        position: relative;
        width: 60vw;

        h3 {
          height: 50px;
          display: flex;
          align-items: center;
          width: 100%;
        }
        p {
          bottom: 0;
          left: 0;
          height: 100%;
        }
      }
    }
  }
`;

const RecentProductsContainer = styled.div`
  width: 80%;
  height: 50%;

  h2 {
    color: white;
    border-bottom: 1px solid #02a4e3;
    padding: 10px 5px;
    font-size: 30px;

    &:hover {
      color: #02a4e3;
    }
  }
`;


export {
  HomepageContainer,
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
  RecentProductsContainer
};
