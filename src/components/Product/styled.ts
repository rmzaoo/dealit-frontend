import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: black;
  border-radius: 3px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  background-color: white;
  width: 600px;
  height: 350px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(0.98);
    cursor: pointer;
  }
`;

const ProductPhotoDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 330px;
  width: 450px;
  margin: 10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: scale-down;
  }
`;

const ProductDetails = styled.div`
  height: 70%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  text-align: right;
  margin: 0px 20px;

  h1 {

    font-size: 30px;
    font-weight: bold;
  }

  span {
    font-size: 20px;
    letter-spacing: 1.5px;
  }
`;

export { Container, ProductPhotoDiv, ProductDetails };
