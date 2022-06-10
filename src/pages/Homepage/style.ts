import styled from "styled-components";
import Logo from "../../components/Logo/Logo";

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
`;

const RandomProduct = styled.div`
  width: 500px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(14px) saturate(200%);
  -webkit-backdrop-filter: blur(14px) saturate(200%);
  background-color: rgba(31, 37, 45, 0.59);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);
  margin-top: 20px;
  margin-bottom: 20px;
  margin-right: 50px;
`;


const RandomProductTitle = styled.h1`
  font-size: 50px;

`;

const RandomProductSubtitle = styled.p`
  font-size: 20px;
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
  RandomProduct,
  RandomProductTitle,
  RandomProductSubtitle
};
