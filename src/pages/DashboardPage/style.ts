import styled from "styled-components";

export const DashboardPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #27364b;
  flex-direction: row;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(175deg, #27364b 5%, #0e1318 100%);
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
`;

export const DashboardPageContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 85%;
  height: 100%;
  padding: 10px;
`;
