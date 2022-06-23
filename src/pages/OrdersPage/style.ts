import styled from "styled-components";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";

export const OrderPageBody = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 10px;
`;

export const OrderPageHeader = styled(HeaderComponent)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 80%;
  height: 20%;
`;
