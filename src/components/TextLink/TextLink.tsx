import React from "react";
import { TextLinkContainer } from "./style";

interface Props {
  children?: React.ReactNode;
  onClick?: () => void;
}

const TextLink = ({ children, onClick }: Props) => {
  return <TextLinkContainer onClick={onClick}>{children}</TextLinkContainer>;
};

export default TextLink;
