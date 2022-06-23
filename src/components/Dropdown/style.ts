import styled, { keyframes } from "styled-components";

interface Props {
  active?: boolean;
}

const fadeIn = keyframes`
  0% {
        transform: scaleY(0)
    }
    80% {
        transform: scaleY(1.1)
    }
    100% {
        transform: scaleY(1)
    }
`;

export const DropdownAndTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 4px;
`;

export const Text = styled.p`
  font-size: 1.2rem;
  color: white;
  font-weight: bold;

  //Laptop and small screens
  @media screen and (max-width: 1024px) {
    font-size: 1rem;
  }

  //Tablets
  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
  }

  //Mobile
  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  justify-content: center;
  align-items: center;
  width: 20%;
  margin-left: 4px;
`;

export const StyledDropdown = styled.div<Props>`
  display: flex;
  position: relative;
  justify-content: space-around;
  align-items: center;
  border: ${(props) =>
    props.active ? "2px solid #02a4e3" : "2px solid white"};
  cursor: pointer;
  height: 27px;
  padding: 5px;
  width: 100%;

  &:hover {
    border: 2px solid #02a4e3;
  }
`;

export const DropdownText = styled.p`
  font-size: 1.1rem;
  color: white;

  //Laptop and small screens
  @media screen and (max-width: 1024px) {
    font-size: 1rem;
  }

  //Tablets
  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
  }

  //Mobile
  @media screen and (max-width: 480px) {
    font-size: 0.8;
  }
`;

export const DrodownArrowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  color: white;

  //Laptop and small screens
  @media screen and (max-width: 1024px) {
    font-size: 1.3rem;
  }

  //Tablets
  @media screen and (max-width: 768px) {
    font-size: 1.1rem;
  }

  //Mobile
  @media screen and (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const DropdownContentContainer = styled.div`
  position: absolute;
  min-width: 100%;
  border-left: 2px solid #02a4e3;
  border-right: 2px solid #02a4e3;
  border-bottom: 2px solid #02a4e3;
  width: 15%;
  overflow: auto;
  z-index: 2;
  transition: all 0.3s ease-out;
  animation: 300ms ease-in-out forwards;
  transform-origin: top center;
  padding: 5px;
  background-color: #e9e9ed;
  animation: ${fadeIn} 0.4s ease-in-out;
  cursor: pointer;

  //Tablets
  @media screen and (max-width: 768px) {
    font-size: 1.1rem;
    overflow-y: scroll;
    height: 100px;
  }

  //Mobile
  @media screen and (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const DropdownContentOption = styled.button<Props>`
  width: 100%;
  border: 0px 2px 2px 2px solid black;
  border-style: none;
  text-align: center;
  cursor: pointer;
  background-color: ${(props) => (props.active ? "#27364b" : "#e9e9ed")};
  color: ${(props) => (props.active ? "white" : "black")};

  &:hover {
    background-color: ${(props) => (props.active ? "#27364b" : "#cdcdcd")};
  }
`;
