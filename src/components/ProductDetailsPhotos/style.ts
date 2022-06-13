import styled from "styled-components";

interface Props {
  active?: boolean;
}

export const ProductPhotosContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 33%;
`;

export const ProductShowcasedPhotoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 85%;
  height: 270px;
  padding: 5px;

  //Laptops and small screens
  @media screen and (max-width: 1024px) {
    height: 220px;
    padding: 10px;
  }

  //Tablets
  @media screen and (max-width: 768px) {
  }

  //Mobile
  @media screen and (max-width: 480px) {
  }
`;

export const ProductShowcasedPhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const OtherProductPhotosContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 10px 5px;
  width: 85%;
`;

export const OtherPhotoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  height: 90%;
`;

export const OtherPhoto = styled.img<Props>`
  width: 100%;
  height: 100%;
  cursor: pointer;
  box-shadow: ${(props) =>
    props.active ? "0 0 2px 2px #00bcd4" : "0 0 3px 3px #1b2533"};

  &:hover {
    box-shadow: 0 0 2px 2px #00bcd4;
  }
`;
