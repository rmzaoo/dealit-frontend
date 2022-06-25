import styled from "styled-components";
import DashboardPageTitle from "../../components/DashboardPageTitle/DashboardPageTitle";

export const SecurityPageBody = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 10px;
`;

export const SecurityPageTitle = styled(DashboardPageTitle)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 80%;
  height: 20%;
`;


export const AccOptionContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  width: 50%;
  height: 18%;
  padding: 8px;
  border: 1px solid #116699;
`

export const AccOptionTextContainer = styled.div`
  display:flex;
  justify-content: flex-start;
  align-items: flex-start;
  height: 30%;
`

export const AccOptionText = styled.p`
  font-size: 1rem;
  font-weight: bold;
`

export const AccInputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`
