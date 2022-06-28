import { clone } from "lodash";
import styled from "styled-components";

const ModalCategoryContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: all 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;

const ModalCategory = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 700px;
  height: 50%;
  background-color: #169;
  z-index: 11;
  border-radius: 10px;
  padding: 15px;

  animation: fadeIn 0.5s ease-in-out;

  h3 {
    font-size: 25px;
  }

  @media screen and (max-width: 768px) {
    margin-top: 70px;
    width: 100%;
    height: 100%;
    padding: 0;
    border-radius: 0;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const PrincipalContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 15px;
`;

const CategoryBlock = styled.div`
  background-color: white;
  color: black;
  padding: 5px;
  border-radius: 10px;
  transition: opacity 0.3s ease-in-out;
  font-weight: bolder;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

const SecondaryContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 70%;


  .principal-category {
    width: 60%;

    > p {
      font-size: 20px;
      transition: opacity 0.3s ease-in-out;

      &:hover {
        cursor: pointer;
        opacity: 0.6;
      }
    }
  }

  .secondary-category {
    width: 80%;
    overflow: scroll;
    border-left: 2px solid white;
    padding: 0 10px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 5px;
  }
`;

export {
  ModalCategoryContainer,
  ModalCategory,
  PrincipalContainer,
  CategoryBlock,
  SecondaryContainer,
};
