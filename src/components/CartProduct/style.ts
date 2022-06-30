import styled from "styled-components";
import { TbTrash } from "react-icons/tb";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  color: white;
  box-shadow: none;
  border-top: 1px solid #e9e9e9;
  border-bottom: 1px solid #e9e9e9;
  border-radius: 0px;
  background-color: transparent;
  background-image: none;

  button {
    background-color: transparent;
    border: 1px solid #e9e9e9;
    color: white;
    cursor: pointer;
    align-self: center;
    width: 30px;
    margin-bottom: 10px;
  }
  @media only screen and (min-width: 300px) {
    width: 90%;
    height: 220px;
    margin-top: 28px;
  }
`;
const Trash = styled(TbTrash)`
  width: 25px;
  height: 25px;
`;

const ProductPhotoDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 100%;

  img {
    width: 12vh;
    height: 20vh;
    object-fit: cover;
    cursor: pointer;
  }
`;

const ProductDetails = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin-left: 10px;

  h1 {
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
  }

  span {
    font-size: 18px;
    letter-spacing: 1.5px;
  }
`;

export { Container, ProductPhotoDiv, ProductDetails, Trash };
