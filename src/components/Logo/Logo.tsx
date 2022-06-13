import React from "react";
import * as Icon from "./style";
interface Props {
  onClick?: () => void;
}

const Logo = ({onClick}:Props) => {
  return (
    <Icon.LogoStyled onClick={onClick}>
      Deal<Icon.LogoColor>it</Icon.LogoColor>
    </Icon.LogoStyled>
  );
};

export default Logo;
