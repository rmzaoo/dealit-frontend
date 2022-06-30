import styled from "styled-components";

export const DashboardPageContainer = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: calc(100vh - 130px);
  margin-top: 108px;
  width: 100%;
  position: absolute;
  background-color: #27364b;
  background-image: linear-gradient(175deg, #27364b 5%, #0e1318 100%);
  color: white;

  @media (max-width: 768px) {
    margin-top: 70px;
    height: calc(100vh - 90px);
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
  border-right: 1px solid #168;
`;

export const DashboardPageContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
