import React, { useState } from "react";
import { useSelector } from "react-redux";
import PrimaryInput from "../../components/PrimaryInput/PrimaryInput";
import {
  SecurityPageBody,
  SecurityPageTitle,
  AccOptionTextContainer,
  AccOptionText,
  AccOptionContainer,
  AccInputContainer,
} from "./style";

export interface InitialStateProps {
  user: {
    id: null;
    username: null;
    email: null;
    phone: null;
    photo: null;
    token: null;
  };
  cart: never[];
  orders: never[];
  addresses: never[];
  creditCards: never[];
}

const AccountSettingsPage = () => {
  const user = useSelector((state: InitialStateProps) => state.user);
  console.log(user);

  const [values, setValues] = React.useState({
    name: user.username,
    email: user.email,
    phoneNumber: user.phone,
    password: "**************",
  });

  const onInputChange = (e: any) => {
    const { name, value } = e.target;
    console.log(e.current.value);
    setValues({ ...values, [name]: value });
  };

  console.log(values.name);

  if (user) {
    return (
      <SecurityPageBody>
        <SecurityPageTitle>
          <h2>Log In and Securitiy</h2>
        </SecurityPageTitle>
        <AccOptionContainer>
          <AccOptionTextContainer>
            <AccOptionText>Name</AccOptionText>
          </AccOptionTextContainer>
          <AccInputContainer>
            <PrimaryInput
              type="text"
              placeholder="CurrentName"
              value={values.name}
              name="name"
              onChange={onInputChange}
              required={false}
            />
          </AccInputContainer>
        </AccOptionContainer>
      </SecurityPageBody>
    );
  }
};

export default AccountSettingsPage;
