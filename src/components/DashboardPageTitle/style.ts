import styled from "styled-components";

export const HeaderComponentContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

  h2 {
    color: white;
    border-bottom: 1px solid #02a4e3;
    padding: 10px 5px;
    font-size: 30px;

    //Laptops and small screens
    @media screen and (max-width: 1024px) {
      font-size: 26px;
    }

    //Tablets
    @media screen and (max-width: 768px) {
      font-size: 20px;
    }

    //Mobile
    @media screen and (max-width: 480px) {
      font-size: 18px;
    }
  }
`
