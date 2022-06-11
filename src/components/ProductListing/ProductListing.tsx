import data from "../../utils/data.json";
import {
  AddToCart,
  DataDiv,
  ImgDiv,
  PageData,
  ProductDiv,
  ProductImg,
} from "./styles";
import { useState } from "react";

const ProductListing = () => {
  const [productsArray] = useState(Object.entries(data));

  return (
    <PageData>
      {productsArray.map(([key, value]: any) => {
        return (
          <ProductDiv>
            <ImgDiv>
              <ProductImg
                src={value.img[0]}
                alt={value.name}
                effect={"blur"}
                onClick={() => console.log("img clicked")}
              />
            </ImgDiv>
            <DataDiv>
              <h3>{value.name}</h3>
              <p>{"Price: " + value.price + " €"}</p>
            </DataDiv>
            <AddToCart>Add to cart</AddToCart>
          </ProductDiv>
        );
      })}
    </PageData>
  );
};

export default ProductListing;
