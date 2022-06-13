import styled from "styled-components";

export const MobileProductImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;

  //Tablets
  @media screen and (max-width: 768px) {
    width: 60%;
  }

  //Mobile
  @media screen and (max-width: 480px) {
  }
`;

export const MobileProductImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;

  
`;
