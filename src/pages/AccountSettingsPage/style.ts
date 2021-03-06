import styled from "styled-components";
import DashboardPageTitle from "../../components/DashboardPageTitle/DashboardPageTitle";

export const SecurityPageBody = styled.div`
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

export const SecurityPageTitleContainer = styled(DashboardPageTitle)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 10%;
`;


