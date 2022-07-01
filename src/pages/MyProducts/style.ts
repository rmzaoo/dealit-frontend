import styled from "styled-components";
import DashboardPageTitle from "../../components/DashboardPageTitle/DashboardPageTitle";

export const MyProductsPageContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;

  //Tablets
  @media screen and (max-width: 768px) {
    margin-top: 10px;
  }
`;

export const MyProductsTitleContainer = styled(DashboardPageTitle)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10%;
`;

export const ProductsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  overflow: auto;
  padding-top: 60px;
`;

export const NoTextAndImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 90%;
  height: 90%;

  h2 {
    font-size: 1.3rem;
    margin-bottom: 30px;

    //Tablets
    @media screen and (max-width: 768px) {
      font-size: 1rem;
    }

    //Mobile
    @media screen and (max-width: 480px) {
      font-size: 1rem;
    }
  }
`;
