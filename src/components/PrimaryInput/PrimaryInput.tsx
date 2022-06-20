import React from "react";
import { StyledInput } from "./styled";

interface InputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  name?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; 
}

const PrimaryInput = ({ type, placeholder, value, onChange, name}: InputProps) => {
  return <StyledInput type={type} placeholder={placeholder} value={value} name={name} onChange={onChange} />;
};

export default PrimaryInput;
