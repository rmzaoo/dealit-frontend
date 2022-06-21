import React from "react";
import { StyledInput } from "./styled";

interface InputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  name?: string;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PrimaryInput = ({
  type,
  placeholder,
  value,
  onChange,
  name,
  required,
}: InputProps) => {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      value={value}
      name={name}
      onChange={onChange}
      required={required}
    />
  );
};

export default PrimaryInput;
