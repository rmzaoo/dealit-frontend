import styled from "styled-components";

export const OrderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 60%;
  height: 50%;
  border: 1px solid #116699;
  margin-top: 20px;
  border-radius: 7px;

  //Laptops and small screens
  @media screen and (max-width: 1024px) {
    width: 65%;
  }

  //Tablets
  @media screen and (max-width: 768px) {
    width: 75%
  }

  //Mobile
  @media screen and (max-width: 480px) {
    width: 85%
  }
`;

export const OrderContainerHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 25%;
  background-color: #00bcd4;
  width: 100%;
  border: 1px solid #116699;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
`;

export const OrderContainerBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 75%;
  width: 100%;
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
`;
