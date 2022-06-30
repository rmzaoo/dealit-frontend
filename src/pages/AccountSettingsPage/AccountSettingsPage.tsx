import React, { useState } from "react";
import { useSelector } from "react-redux";
import AccountOptionChange from "../../components/AccountOptionChange/AccountOptionChange";
import { SecurityPageBody, SecurityPageTitleContainer } from "./style";

export interface InitialStateProps {
  user: {
    id: number;
    username: string;
    email: string;
    phone: string;
    photo: string;
    token: string;
  };
  cart: [];
  orders: [];
  addresses: [];
  creditCards: [];
}

const AccountSettingsPage = () => {
  const user = useSelector((state: InitialStateProps) => state.user);
  const [currentName, setCurrentName] = useState<string>(user.username!);
  const [currentEmail, setCurrentEmail] = useState<string>(user.email!);
  const [currentPhoneNumber, setCurrentPhoneNumber] = useState<string>(
    user.phone!
  );
  const [newPassword, setNewPassword] = useState<string>("");

  if (user) {
    return (
      <SecurityPageBody>
        <SecurityPageTitleContainer>
          <h2>Account Settings</h2>
        </SecurityPageTitleContainer>
        <AccountOptionChange
          id={user.id}
          optionName="Name"
          originalValue={user.username}
          currentValue={currentName}
          setCurrentValue={setCurrentName}
          token={user.token}
          valueToChange="username"
          placeholderText="Current Name"
          type="text"
        />
        <AccountOptionChange
          id={user.id}
          optionName="Email"
          currentValue={currentEmail}
          setCurrentValue={setCurrentEmail}
          token={user.token}
          originalValue={user.email}
          valueToChange="email"
          placeholderText="Current Email"
          type="text"
        />
        <AccountOptionChange
          id={user.id}
          optionName="Phone number"
          currentValue={currentPhoneNumber}
          setCurrentValue={setCurrentPhoneNumber}
          token={user.token}
          originalValue={user.phone}
          valueToChange="phone"
          placeholderText="Current phone number"
          type="text"
        />
        <AccountOptionChange
          id={user.id}
          optionName="Password"
          currentValue={newPassword}
          setCurrentValue={setNewPassword}
          token={user.token}
          valueToChange="password"
          placeholderText="New Password"
          type="password"
        />
      </SecurityPageBody>
    );
  } else {
    return null;
  }
};

export default AccountSettingsPage;
