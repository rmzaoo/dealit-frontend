import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";

const SearchbarInput = styled.input`
  width: 100%;
  border: none;
  border-radius: 5px 0 0 5px;
  padding: 0 10px;
  font-size: 20px;
  letter-spacing: 1px;
  &:focus {
    outline: none;
  }
`;

const SearchbarContainer = styled.div`
  margin: 0px 20px;
  width: 50%;
  display: flex;
  border: 3px solid transparent;
  border-radius: 10px;
  transition: border-color 0.2s ease-in-out, border-radius 0.2s ease-in-out;
  &:focus-within {
    border: 3px solid #00bcd4;
    border-radius: 10px;
  }
`;

const SearchBarButton = styled.button`
  height: 100%;
  width: 50px;
  border: none;
  background-color: #00bcd4;
  transition: opacity 0.2s ease-in-out;
  border-radius: 0 5px 5px 0;

  &:hover {
    outline: none;
    cursor: pointer;
    opacity: 0.9;
  }
`;

const SearchBarIcon = styled(AiOutlineSearch)`
  height: 100%;
  width: 100%;
`;

const SearchBarResultsContainer = styled.div`
  position: fixed;
  top: 52px;
  background-color: rgba(5, 40, 59, 0.6);
  width: 46%;
  margin: 5px;
  border-radius: 5px;
  overflow-y: auto;
  max-height: 250px;
  z-index: 1000;
`;

const SearchBarResultItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px 0;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
  max-height: 80px;
  color: white;

  img {
    width: 6%;
    border-radius: 4px;
    margin: 0px 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  }

  span {
    font-size: 14px;
    font-weight: bold;
  }

  &:hover {
    color: black;
    background-color: rgba(26, 99, 118, 0.9);
    cursor: pointer;
  }
`;

const SearchBarResultItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  padding: 0 10px;
`;

export {
  SearchbarInput,
  SearchbarContainer,
  SearchBarButton,
  SearchBarIcon,
  SearchBarResultsContainer,
  SearchBarResultItem,
  SearchBarResultItemInfo,
};
