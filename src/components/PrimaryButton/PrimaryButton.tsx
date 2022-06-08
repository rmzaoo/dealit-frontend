import React from "react";
import { PrimaryButton as StyledPrimaryButton } from "./style";

interface Props {
  children?: React.ReactNode;
  onClick?: () => void;
}

const PrimaryButton = ({ onClick, children }: Props) => {
  return (
    <StyledPrimaryButton onClick={onClick}>
      {children}
    </StyledPrimaryButton>
  );
};

export default PrimaryButton;
