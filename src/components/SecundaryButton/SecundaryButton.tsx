import React from "react";
import { SecundaryButtonStyle } from "./style";

interface Props {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const SecundaryButton = ({ onClick, children, className }: Props) => {
  return (
    <SecundaryButtonStyle onClick={onClick} className={className}>
      {children}
    </SecundaryButtonStyle>
  );
};

export default SecundaryButton;
