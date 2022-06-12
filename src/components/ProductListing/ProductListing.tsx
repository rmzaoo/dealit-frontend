import data from "../../utils/data.json";
import {
  AddToCart,
  AddToCartMobile,
  DataDiv,
  ImgDiv,
  PageData,
  ProductDiv,
  ProductImg,
} from "./styles";
import { useState } from "react";
import { BsCart2 } from "react-icons/bs";

const ProductListing = () => {
  const [productsArray] = useState(Object.entries(data));

  const width = window.innerWidth;

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

            {width > 768 ? (
              <>
                <DataDiv>
                  <h3>{value.name}</h3>
                  <div
                    style={{
                      margin: 0,
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <p>{"Price: " + value.price + " €"}</p>
                    <AddToCart>Add to cart</AddToCart>
                  </div>
                </DataDiv>
              </>
            ) : (
              <>
                <DataDiv>
                  <h3>{value.name}</h3>
                  <div
                    style={{
                      margin: 0,
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <p>{"Price: " + value.price + " €"}</p>
                    <AddToCartMobile>
                      <BsCart2 />
                    </AddToCartMobile>
                  </div>
                </DataDiv>
              </>
            )}
          </ProductDiv>
        );
      })}
    </PageData>
  );
};

export default ProductListing;
