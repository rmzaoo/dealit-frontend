import data from "../../utils/data.json";
import { ImgDiv, PageData, ProductDiv, ProductImg } from "./styles";
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
            <h3>{value.name}</h3>
            <p>{"Price: " + value.price + " €"}</p>
          </ProductDiv>
        );
      })}
    </PageData>
  );
};

export default ProductListing;
