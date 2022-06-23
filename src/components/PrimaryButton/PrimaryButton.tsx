import React from "react";
import { PrimaryButton as StyledPrimaryButton } from "./style";

interface Props {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const PrimaryButton = ({ onClick, children, className }: Props) => {
  return (
    <StyledPrimaryButton onClick={onClick} className={className}>
      {children}
    </StyledPrimaryButton>
  );
};

export default PrimaryButton;
