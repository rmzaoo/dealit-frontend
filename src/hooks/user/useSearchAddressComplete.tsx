import React, { useEffect } from "react";
import { fetchAdress } from "../../api/fetch/userFetch";

const useSearchAddressComplete = (address: string) => {
  const [addressComplete, setAddressComplete] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  useEffect(() => {
    setIsLoading(true);

    const delayDebounceFn = setTimeout(() => {
      fetchAdress(address)
        .then((data) => {
          setAddressComplete(data.features);
        })
        .catch((error) => {
          setError(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, 800);

    return () => clearTimeout(delayDebounceFn);
  }, [address]);

  return { addressComplete, isLoading, error };
};

export default useSearchAddressComplete;
