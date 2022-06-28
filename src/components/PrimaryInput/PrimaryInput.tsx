import React, { InputHTMLAttributes } from "react";
import { StyledInput } from "./styled";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  // type?: HTMLInputTypeAttribute;
  // placeholder?: string;
  // value?: string;
  // name?: string;
  // required?: boolean;
  // onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // className?: string;
}

const PrimaryInput = (Props: InputProps) => {
  return <StyledInput {...Props} />;
};

export default PrimaryInput;
