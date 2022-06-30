import styled from "styled-components";
import { BsChatSquareDotsFill } from "react-icons/bs";

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

  @media (max-width: 1000px) {
    left: 90%;
  }
  @media (max-width: 650px) {
    left: 85%;
  }
  @media (max-width: 400px) {
    left: 80%;
  }
  @media (max-width: 300px) {
    display: none;
  }
`;

const AIButtonAfter = styled.div`
  position: fixed;
  top: 88%;
  left: 94%;
  padding: 10px;
  cursor: pointer;

  @media (max-width: 1000px) {
    left: 90%;
  }
  @media (max-width: 650px) {
    left: 85%;
  }
  @media (max-width: 400px) {
    left: 80%;
  }
  @media (max-width: 300px) {
    display: none;
  }

  -webkit-animation: flip-scale-up-hor 0.5s linear both;
  animation: flip-scale-up-hor 0.5s linear both;

  @-webkit-keyframes flip-scale-up-hor {
    0% {
      -webkit-transform: scale(1) rotateX(0);
      transform: scale(1) rotateX(0);
    }
    50% {
      -webkit-transform: scale(2.5) rotateX(-90deg);
      transform: scale(2.5) rotateX(-90deg);
    }
    100% {
      -webkit-transform: scale(1) rotateX(-180deg);
      transform: scale(1) rotateX(-180deg);
    }
  }
  @keyframes flip-scale-up-hor {
    0% {
      -webkit-transform: scale(1) rotateX(0);
      transform: scale(1) rotateX(0);
    }
    50% {
      -webkit-transform: scale(2.5) rotateX(-90deg);
      transform: scale(2.5) rotateX(-90deg);
    }
    100% {
      -webkit-transform: scale(1) rotateX(-180deg);
      transform: scale(1) rotateX(-180deg);
    }
  }

  -webkit-animation: flip-scale-up-hor-end 0.5s linear both;
  animation: flip-scale-up-hor-end 0.5s linear both;

  @-webkit-keyframes flip-scale-up-hor-end {
    0% {
      -webkit-transform: scale(1) rotateX(-180deg);
      transform: scale(1) rotateX(-180deg);
    }
    50% {
      -webkit-transform: scale(2.5) rotateX(-90deg);
      transform: scale(2.5) rotateX(-90deg);
    }
    100% {
      -webkit-transform: scale(1) rotateX(0);
      transform: scale(1) rotateX(0);
    }
  }
  @keyframes flip-scale-up-hor-end {
    0% {
      -webkit-transform: scale(1) rotateX(-180deg);
      transform: scale(1) rotateX(-180deg);
    }
    50% {
      -webkit-transform: scale(2.5) rotateX(-90deg);
      transform: scale(2.5) rotateX(-90deg);
    }
    100% {
      -webkit-transform: scale(1) rotateX(0);
      transform: scale(1) rotateX(0);
    }
  }
`;

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

export { Container, AIButton, ChatIcon, AIButtonAfter };
