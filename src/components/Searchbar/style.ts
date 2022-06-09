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

export { SearchbarInput, SearchbarContainer, SearchBarButton, SearchBarIcon };
