import styled from "styled-components";

export const MobileProductImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 10px;
  width: 100%;
  height: 100%;
`;

export const ProductMobileShowcasedPhotoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  height: 210px;
  width: 100%;
  padding: 0px 10px;

  //Tablets
  @media screen and (max-width: 768px) {
    height: 280px;
  }

  //Mobile
  @media screen and (max-width: 480px) {
    height: 250px;
    width: 90%;
  }
`;

export const MobileProductImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
