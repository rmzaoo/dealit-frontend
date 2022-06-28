import React, { useState } from "react";
import { toast } from "react-toastify";
import {
  updateUserEmail,
  updateUsername,
  updateUserPassword,
  updateUserPhoneNumber,
} from "../../api/updateUser";
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
  type: string;
  currentValue: string;
  setCurrentValue: React.Dispatch<React.SetStateAction<string>>;
  token: string;
  originalValue?: string;
  valueToChange: string;
  placeholderText: string;
}

const AccountOptionChange = ({
  id,
  type,
  optionName,
  currentValue,
  setCurrentValue,
  token,
  originalValue,
  valueToChange,
  placeholderText,
}: Props) => {
  const dispatch = useDispatch();
  const [oldPass, setOldPass] = useState("");

  const onInputChange = (e: any) => {
    const { value } = e.target;
    setCurrentValue(value);
  };
  const onInputChangePassword = (e: any) => {
    const { value } = e.target;
    setOldPass(value);
  };

  const saveChange = async () => {
    if (valueToChange === "username") {
      const res = await updateUsername(id, currentValue, token);
      dispatch({ type: "SET_USER", payload: res.user });
    }
    if (valueToChange === "email") {
      const res = await updateUserEmail(id, currentValue, token);
      dispatch({ type: "SET_USER", payload: res.user });
    }
    if (valueToChange === "phone") {
      const res = await updateUserPhoneNumber(id, currentValue, token);
      dispatch({ type: "SET_USER", payload: res.user });
    }
    if (valueToChange === "password") {
      const res = await updateUserPassword(id, oldPass, currentValue, token);
      dispatch({ type: "SET_USER", payload: res.user });
    }
    toast.success("Changed information successfully!");
  };

  const resetChanges = () => {
    if (originalValue) {
      if (currentValue !== originalValue) {
        setCurrentValue(originalValue);
        toast.success("Changes were resetted successfully!");
      } else {
        toast.error("That field is unchanged!");
      }
    }
  };

  return (
    <AccOptionContainer>
      <AccOptionTitleAndInputContainer>
        <AccOptionTextContainer>
          <AccOptionText>{optionName}</AccOptionText>
        </AccOptionTextContainer>
        <AccInputContainer>
          {valueToChange === "password" && (
            <PrimaryInput
              type="password"
              placeholder="Old password"
              value={oldPass}
              name="password"
              onChange={onInputChangePassword}
              required={false}
            />
          )}
          <PrimaryInput
            type={type}
            placeholder={placeholderText}
            value={currentValue}
            name={type}
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
