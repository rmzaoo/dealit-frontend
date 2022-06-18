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
  height: 100%;
`;

export const ProductShowcasedPhotoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 350px;
  padding: 5px;

  //Laptops and small screens
  @media screen and (max-width: 1024px) {
    height: 240px;
    width: 260px;
  }
`;

export const ProductShowcasedPhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const OtherProductPhotosContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 10px 5px;
  width: 70%;

  //Laptops and small screens
  @media screen and (max-width: 1024px) {
  }

  //Tablets
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const OtherPhotoContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 5px;
  height: 100px;
  width: 100px;

  //Laptops
  @media screen and (max-width: 1380px) {
    height: 70px;
    width: 70px;
  }
`;

export const OtherPhoto = styled.img<Props>`
  width: 100%;
  height: 100%;
  cursor: pointer;
  object-fit: cover;
  box-shadow: ${(props) =>
    props.active ? "0 0 1px 1px #02a4e3" : "0 0 3px 3px #1b2533"};

  &:hover {
    box-shadow: 0 0 1px 1px #02a4e3;
  }
`;
