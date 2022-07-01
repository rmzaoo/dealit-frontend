import styled from "styled-components";
import DashboardPageTitle from "../../components/DashboardPageTitle/DashboardPageTitle";
import TextLink from "../../components/TextLink/TextLink";

export const OrderPageBody = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const OrderIllustrationPageBody = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 90%;
  overflow: hidden;
`;

export const OrderPageHeader = styled(DashboardPageTitle)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 80%;
  height: 20%;
`;

export const OrdersButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  width: 15%;
  margin-top: 10px;

  p {
    font-size: 1rem;
  }
`;

export const StyledTextLink = styled(TextLink)`
  border-bottom: ${(props) =>
    props.active ? "1px solid #02a4e3" : "1px solid transparent"};
`;

export const OrderButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const OrderImageContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  height: 80%;
  width: 100%;

  img {
    width: 60%;
    height: 60%;
  }
`;

export const OrderPageImgAndTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 90%;
  width: 100%;
  margin-top: 50px;
`;

export const OrderPageTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10%;
  margin-bottom: 30px;
`;

export const OrderPageText = styled.h2`
  font-size: 1.3rem;

  //Tablets
  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }

  //Mobile
  @media screen and (max-width: 480px) {
    font-size: 1.1rem;
  }
`;
