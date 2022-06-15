import { useEffect, useState } from "react";
import { fetchUserById } from "../../api/userFetch";

export interface OrdersDetailsProp {
  id: number;
  buyDate: Date;
  sendDate: Date;
  deliveryDate: Date;
  userId: number;
  sellerName: string;
  creditCard: number;
}

export interface AddressesDetailsProp {
  id: number;
  country: string;
  city: string;
  zipCode: string;
  street: string;
  houseNumber: string;
  isFavorite: boolean;
  userId: number;
}

export interface CreditCardDetailsProp {
  id: number;
  userId: number;
  cardNumber: number;
  cvc: number;
  expirityDate: string;
  isFavorite: boolean;
}

export interface UserDetailsProp {
  id: number;
  username: string;
  email: string;
  phone: string;
  orders: OrdersDetailsProp[];
  addresses: AddressesDetailsProp[];
  creditCards: CreditCardDetailsProp[];
}

export const useUserByIdFetcher = (id: number) => {
  const [user, setUser] = useState<UserDetailsProp>();
  useEffect(() => {
    fetchUserById(id).then((data) => {
      setUser(data);
    });
  }, []);

  return user;
};
