import React, { useEffect } from "react";
import { fetchUser } from "../../api/fetch/userFetch";
import { useDispatch } from "react-redux";

const useAuthenticationValidation = (jwt: string) => {
  const [isLogged, setIsLogged] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    fetchUser(jwt)
      .then((data) => {
        console.log(data);
        dispatch({ type: "SET_USER", payload: data });
        setIsLogged(true);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [jwt]);

  return { isLogged, isLoading, error };
};

export default useAuthenticationValidation;
