import styled from "styled-components";

export const OrderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 60%;
  height: 25%;
  border: 1px solid #116699;
  margin-top: 20px;

  //Laptops and small screens
  @media screen and (max-width: 1024px) {
    width: 70%;
  }

  //Tablets
  @media screen and (max-width: 768px) {
    width: 75%;
  }
`;
