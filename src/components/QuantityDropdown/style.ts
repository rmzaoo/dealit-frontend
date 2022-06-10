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
  justify-content: flex-start;
`;

export const Text = styled.p`
  font-size: 1.2rem;
`;

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  justify-content: center;
  align-items: center;
  width: 14%;
  margin-left: 10px;
`;

export const StyledDropdown = styled.div`
  display: flex;
  position: relative;
  justify-content: space-around;
  align-items: center;
  border: 2px solid gray;
  cursor: pointer;
  height: 27px;
  padding: 0px 5px;
  width: 100%;

  &:hover {
    background-color: #e9e9ed;
    border: 2px solid black;
  }

  &:focs {
    background-color: #e9e9ed;
    border: 2px solid black;
  }
`;

export const DropdownText = styled.p`
  font-size: 1.1rem;
`;

export const DrodownArrowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
`;

export const DropdownContentContainer = styled.div`
  position: absolute;
  min-width: 100%;
  border-left: 2px solid black;
  border-right: 2px solid black;
  border-bottom: 2px solid black;
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
`;

export const DropdownContentOption = styled.button<Props>`
  width: 100%;
  border: 0px 2px 2px 2px solid black;
  border-style: none;
  text-align: center;
  cursor: pointer;
  background-color: ${(props) => (props.active ? "black" : "#e9e9ed")};
  color: ${(props) => (props.active ? "white" : "black")};

  &:hover {
    background-color: ${(props) => (props.active ? "black" : "#cdcdcd")}
  }
`;
