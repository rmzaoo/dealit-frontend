import data from "../../utils/data.json";
import {
  PageData,
  MainProductCard,
  MainProductCardOneColumn,
  PageDataOneColumn,
} from "./styles";
import { useState } from "react";

interface Props {
  oneColumn: boolean;
}

const ProductListing = ({ oneColumn }: Props) => {
  const [productsArray] = useState(Object.entries(data));

  return (
    <>
      {oneColumn === false ? (
        <PageData>
          {productsArray.map(([key, value]: any) => {
            return (
              <MainProductCard
                name={value.name}
                photos={value.img}
                price={value.price}
              />
            );
          })}
        </PageData>
      ) : (
        <PageDataOneColumn>
          {productsArray.map(([key, value]: any) => {
            return (
              <MainProductCardOneColumn
                name={value.name}
                photos={value.img}
                price={value.price}
              />
            );
          })}
        </PageDataOneColumn>
      )}
    </>
  );
};

export default ProductListing;
