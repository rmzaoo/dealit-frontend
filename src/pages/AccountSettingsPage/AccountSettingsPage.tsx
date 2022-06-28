import React, { useState } from "react";
import { useSelector } from "react-redux";
import AccountOptionChange from "../../components/AccountOptionChange/AccountOptionChange";
import { SecurityPageBody, SecurityPageTitle } from "./style";

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


  if (user) {
    return (
      <SecurityPageBody>
        <SecurityPageTitle>
          <h2>Log In and Security</h2>
        </SecurityPageTitle>
        <AccountOptionChange
          id={user.id}
          optionName={"Name"}
          originalValue={user.username}
          currentValue={currentName}
          setCurrentValue={setCurrentName}
          token={user.token}
          valueToChange={"username"}
        />
      </SecurityPageBody>
    );
  }
};

export default AccountSettingsPage;
