import axios from "axios";
import { useNavigate } from "react-router";

const baseUrl = "https://dealit-backend.herokuapp.com/dealit/api";
import { toast } from "react-toastify";

export const orderFetch = async (
  userId: number,
  creditCardId: number,
  jwt: string,
  cart: any
) => {
  const headers = {
    "Content-Type": "application/json",
    "x-access-token": jwt || "null",
  };
  const body = {
    order: { userId: userId, creditCardId: creditCardId },
    products: cart.map((item: any) => {
      return {
        productId: item.product.id,
        quantity: item.quantity,
        price: item.product.price,
      };
    }),
  };

  const response = await axios
    .post(`${baseUrl}/orders`, body, { headers })
    .then((result) => {
      return result;
    })
    .catch((error) => {
      if (error.response) {
        error.response.status === 400
          ? error.response.data.error.message.map((message: string) => {
              toast.error(message);
            })
          : toast.error("Something went wrong");
      }
    });
  return response;
};
