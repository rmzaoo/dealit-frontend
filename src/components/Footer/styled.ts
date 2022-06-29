import styled from "styled-components";
import {BsChatSquareDotsFill} from "react-icons/bs";


const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #131a22;
  color: white;
  text-align: center;
  padding: 2px 0;
  border-top: 1px solid #168;
  span {
    font-size: 13px;
  }
  z-index: 10;
`;

const AIButton = styled.div`
  position: fixed;
  top: 88%;
  left: 94%;
  padding: 10px;
  cursor: pointer;
  @media(max-width: 1320px) {
    display: none;
  }
`

const ChatIcon = styled(BsChatSquareDotsFill)`
  height: 30px;
  width: 30px;
  padding: 10px;
  border-radius: 100%;
  background-color: #131a22;
  color: white;
  display: flex;
  border: 1px solid white;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;


export { Container, AIButton, ChatIcon };
