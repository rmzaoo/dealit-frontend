import { values } from "lodash";
import React from "react";
import useSearchAddressComplete from "../../hooks/user/useSearchAddressComplete";
import { ContainerSuggestion } from "./styled";

interface AddressSearchProps {
  addressSearched: string;
  values: any;
  setValues: any;
  setShowSuggestion: any;
}

const AddressContainerSuggestion = ({
  addressSearched,
  values,
  setValues,
  setShowSuggestion,
}: AddressSearchProps) => {
  let { addressComplete, isLoading, error }: any =
    useSearchAddressComplete(addressSearched);

  const onSuggestionClick = (value: any) => {
    setShowSuggestion(false);
    setValues({
      ...values,
      city: value.properties.city || "",
      street: value.properties.address_line1 || "",
      country: value.properties.country || "",
      zipCode: value.properties.postcode || "",
    });
  };

  return (
    <ContainerSuggestion>
      {addressComplete &&
        !error &&
        Object.entries(addressComplete).map(([key, value]: any) => {
          return (
            <Suggestion
              key={key}
              address={value.properties.address_line1}
              city={value.properties.city}
              country={value.properties.country}
              onClick={() => onSuggestionClick(value)}
            />
          );
        })}
    </ContainerSuggestion>
  );
};

interface AddressSuggestionProps {
  city: string;
  address: string;
  country: string;
  onClick?: () => void;
}

const Suggestion = ({
  city,
  address,
  country,
  onClick,
}: AddressSuggestionProps) => {
  return (
    <div onClick={onClick}>
      <p>{address}</p>
      <span>
        {city}, {country}
      </span>
    </div>
  );
};

export default AddressContainerSuggestion;
