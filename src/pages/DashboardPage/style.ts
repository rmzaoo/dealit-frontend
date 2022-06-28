import styled from "styled-components";

export const DashboardPageContainer = styled.div`
  background-color: red;
  height: 100vh;
  margin-top: 108px;
  width: 100%;
  position: absolute;
  background-color: #27364b;
  background-image: linear-gradient(175deg, #27364b 5%, #0e1318 100%);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  @media (max-width: 768px) {
    margin-top: 70px;
  }
`;

export const DashboardPageSideBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 15%;
  height: 100%;
  background-color: #131a22;
  padding: 10px;
  border-right: 1px solid #168;

  //Tablets
  @media screen and (max-width: 768px) {
    width: 10%;
  }

  //Mobile
  @media screen and (max-width: 480px) {
    width: 10%;
  }
`;

export const DashboardPageContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 85%;
  height: 95%;
  padding-bottom: 10px;
`;
