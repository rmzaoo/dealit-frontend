import React, { useState } from "react";
import { Container, AIButton, ChatIcon, AIButtonAfter } from "./styled";
import ChatBox from "../ChatBox/ChatBox";

const Footer = () => {
  const year = new Date().getFullYear();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Container>
        <span>&#169; Dealit {year}</span>
      </Container>
      {isOpen === false ? (
        <AIButton onClick={() => setIsOpen(!isOpen)}>
          <ChatIcon />
        </AIButton>
      ) : (
        <AIButtonAfter onClick={() => setIsOpen(!isOpen)}>
          <ChatIcon />
        </AIButtonAfter>
      )}

      <ChatBox isOpen={isOpen} />
    </>
  );
};

export default Footer;
