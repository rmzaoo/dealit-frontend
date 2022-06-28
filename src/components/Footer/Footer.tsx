import React, { useState } from "react";
import { Container, AIButton, ChatIcon } from "./styled";
import ChatBox from "../ChatBox/ChatBox";



const Footer = () => {
  const year = new Date().getFullYear();
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <>
      <Container>
        <span>&#169; Dealit {year}</span>
      </Container>
      <AIButton onClick={() => setIsOpen(!isOpen)}>
        <ChatIcon/>
      </AIButton>
      <ChatBox isOpen={isOpen}/>
    </>
  );
};

export default Footer;
