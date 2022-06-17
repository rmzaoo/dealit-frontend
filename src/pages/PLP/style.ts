import styled from "styled-components";
import ProductListing from "../../components/ProductListing/ProductListing";

const Container = styled.div`
  width: 100%;
  height: 120vh;
  background-color: #27364b;
  color: white;
  background-image: linear-gradient(175deg, #27364b 5%, #0e1318 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SafeContainer = styled.div`
  margin-top: 110px;
  height: 100%;
  width: 100%;

  @media screen and (max-width: 768px) {
    margin-top: 50px;
  }
`;

const Category = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ContainerProducts = styled.div`
  margin: 15px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80%;
`;

const StyledProductListing = styled(ProductListing)`
  margin: 0;
`;

const PageBottoms = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  > * {
    margin: 0 10px;
  }
`;

export {
  Container,
  Category,
  ContainerProducts,
  SafeContainer,
  PageBottoms,
  StyledProductListing,
};
