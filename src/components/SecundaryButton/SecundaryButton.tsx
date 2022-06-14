import React from "react";

interface Props {
    children?: React.ReactNode;
    onClick?: () => void;
  }

const SecundaryButton = ({ onClick, children }: Props) => {
    
    return(
    <SecundaryButton onClick={onClick}>
      {children}
    </SecundaryButton>
    );
}

export default SecundaryButton;