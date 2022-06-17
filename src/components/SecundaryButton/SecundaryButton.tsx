import React from "react";
import { SecundaryButtonStyle } from "./style";

interface Props {
    children?: React.ReactNode;
    onClick?: () => void;
  }

const SecundaryButton = ({ onClick, children }: Props) => {
    
    return(
    <SecundaryButtonStyle onClick={onClick}>
      {children}
    </SecundaryButtonStyle>
    );
}

export default SecundaryButton;