import styled from "styled-components";
import DashboardPageTitle from "../../components/DashboardPageTitle/DashboardPageTitle";

export const CardPageBody = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 10px;
`;

export const CardPageTitle = styled(DashboardPageTitle)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 80%;
  height: 20%;
`;

