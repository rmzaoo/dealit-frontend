import axios from "axios";
import { toast } from "react-toastify";

const baseUrl = "https://dealit-backend.herokuapp.com/dealit/api";

export const updateUsername = async (
  id: number,
  valToUpdate: string,
  jwt: string
) => {
  const headers = {
    "Content-Type": "application/json",
    "x-access-token": jwt || "null",
  };

  const val = { username: valToUpdate };
  const response = await axios
    .patch(`${baseUrl}/users/${id}`, val, {
      headers,
    })
    .catch((error: any) => {
      if (error.response) {
        error.response.status === 400
          ? error.response.data.error.message.map((message: string) =>
              toast.error(message)
            )
          : toast.error("Something went wrong");
      }
    });
  return response!.data;
};

export const updateUserEmail = async (
  id: number,
  valToUpdate: string,
  jwt: string
) => {
  const headers = {
    "Content-Type": "application/json",
    "x-access-token": jwt || "null",
  };

  const val = { email: valToUpdate };
  const response = await axios
    .patch(`${baseUrl}/users/${id}`, val, {
      headers,
    })
    .catch((error: any) => {
      if (error.response) {
        error.response.status === 400
          ? error.response.data.error.message.map((message: string) =>
              toast.error(message)
            )
          : toast.error("Something went wrong");
      }
    });
  return response!.data;
};

export const updateUserPhoneNumber = async (
  id: number,
  valToUpdate: string,
  jwt: string
) => {
  const headers = {
    "Content-Type": "application/json",
    "x-access-token": jwt || "null",
  };

  const val = { phone: valToUpdate };
  const response = await axios
    .patch(`${baseUrl}/users/${id}`, val, {
      headers,
    })
    .catch((error) => {
      if (error.response) {
        error.response.status === 400
          ? error.response.data.error.message.map((message: string) =>
              toast.error(message)
            )
          : toast.error("Something went wrong");
      }
    });
  return response!.data;
};

export const updateUserPassword = async (
  id: number,
  oldPass: string,
  newPass: string,
  jwt: string
) => {
  const headers = {
    "Content-Type": "application/json",
    "x-access-token": jwt || "null",
  };

  const val = { oldPassword: oldPass, newPassword: newPass };
  const response = await axios
    .patch(`${baseUrl}/users/${id}`, val, { headers })
    .catch((error) => {
      if (error.response) {
        error.response.status === 400
          ? error.response.data.error.message.map((message: string) =>
              toast.error(message)
            )
          : toast.error("Something went wrong");
      }
    });
  return response!.data;
};
