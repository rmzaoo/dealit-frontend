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
  padding: 10px;
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

export const OrdersContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 80%;
`
export const SingleOrderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

