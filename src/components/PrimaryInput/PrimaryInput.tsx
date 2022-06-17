import React from "react";
import { StyledInput } from "./styled";

interface InputProps {
  type?: string;
  placeholder?: string;
  value?: string;
}

const PrimaryInput = ({ type, placeholder, value }: InputProps) => {
  return <StyledInput type={type} placeholder={placeholder} value={value} />;
};

export default PrimaryInput;
