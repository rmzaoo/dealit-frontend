import React, { useEffect } from "react";
import { fetchAddress } from "../../api/userFetch";

const useSearchAddressComplete = (address: string) => {
  const [addressComplete, setAddressComplete] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  useEffect(() => {
    setIsLoading(true);

    const delayDebounceFn = setTimeout(() => {
      fetchAddress(address)
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
