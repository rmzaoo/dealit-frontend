import React from "react";
import { StyledInput } from "./styled";

interface InputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  name?: string;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const PrimaryInput = (
  { type, placeholder, value, onChange, name, required, className }: InputProps,
) => {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      value={value}
      name={name}
      onChange={onChange}
      required={required}
      className={className}
    />
  );
};

export default PrimaryInput;
