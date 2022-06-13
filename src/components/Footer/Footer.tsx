import React from "react";
import { Container } from "./styled";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Container>
      <span>&#169; Dealit {year}</span>
    </Container>
  );
};

export default Footer;
