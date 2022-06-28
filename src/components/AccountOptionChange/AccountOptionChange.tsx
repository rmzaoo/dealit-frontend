import React, { useState } from "react";
import { toast } from "react-toastify";
import { updateUsername } from "../../api/updateUser";
import { fetchUser, fetchUserById } from "../../api/userFetch";
import PrimaryInput from "../PrimaryInput/PrimaryInput";
import {
  AccInputContainer,
  AccOptionButtonsContainer,
  AccOptionContainer,
  AccOptionText,
  AccOptionTextContainer,
  AccOptionTitleAndInputContainer,
  ResetButton,
  SaveButton,
} from "./style";
import { useDispatch } from "react-redux";

interface Props {
  id: number;
  optionName: string;
  currentValue: string;
  setCurrentValue: React.Dispatch<React.SetStateAction<string>>;
  token: string;
  originalValue: string;
  valueToChange: string;
}

const AccountOptionChange = ({
  id,
  optionName,
  currentValue,
  setCurrentValue,
  token,
  originalValue,
  valueToChange,
}: Props) => {
  const dispatch = useDispatch();
  const onInputChange = (e: any) => {
    const { value } = e.target;
    setCurrentValue(value);
  };

  const saveChange = async () => {
    if (valueToChange === "username") {
      const res = await updateUsername(id, currentValue, token);
      dispatch({ type: "SET_USER", payload: res.user });
    }
    toast.success("Changed information successfully!");
  };

  const resetChanges = () => {
    if (currentValue !== originalValue) {
      setCurrentValue(originalValue);
      toast.success("Changes were resetted successfully!");
    } else {
      toast.error("That field is unchanged!");
    }
  };

  return (
    <AccOptionContainer>
      <AccOptionTitleAndInputContainer>
        <AccOptionTextContainer>
          <AccOptionText>{optionName}</AccOptionText>
        </AccOptionTextContainer>
        <AccInputContainer>
          <PrimaryInput
            type="text"
            placeholder="CurrentName"
            value={currentValue}
            name="name"
            onChange={onInputChange}
            required={false}
          />
        </AccInputContainer>
      </AccOptionTitleAndInputContainer>
      <AccOptionButtonsContainer>
        <SaveButton onClick={() => saveChange()}>Save</SaveButton>
        <ResetButton onClick={() => resetChanges()}>Reset</ResetButton>
      </AccOptionButtonsContainer>
    </AccOptionContainer>
  );
};

export default AccountOptionChange;
function id(id: any, currentValue: string, token: string) {
  throw new Error("Function not implemented.");
}
function dispatch(arg0: any) {
  throw new Error("Function not implemented.");
}
