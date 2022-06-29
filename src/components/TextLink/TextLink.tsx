import React from "react";
import { TextLinkContainer } from "./style";

interface Props {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  active?: boolean;
}

const TextLink = ({ children, onClick, className }: Props) => {
  return (
    <TextLinkContainer onClick={onClick} className={className} > 
      {children}
    </TextLinkContainer>
  );
};

export default TextLink;
