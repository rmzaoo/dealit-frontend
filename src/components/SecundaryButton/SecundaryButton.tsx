import React from "react";
import { SecundaryButton as StyledSecundaryButton } from "./style";

interface Props {
    children?: React.ReactNode;
    onClick?: () => void;
  }

const SecundaryButton = ({ onClick, children }: Props) => {
    return(
    <StyledSecundaryButton onClick={onClick}>
      {children}
    </StyledSecundaryButton>
    );
}

export default SecundaryButton;