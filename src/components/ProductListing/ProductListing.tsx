import { ProductProps } from "../Product/Product";
import {
  PageData,
  MainProductCard,
  MainProductCardOneColumn,
  PageDataOneColumn,
} from "./styles";

interface Props {
  oneColumn: boolean;
  products: ProductProps[];
}

const ProductListing = ({ oneColumn, products }: Props) => {
  return (
    <>
      {oneColumn === false ? (
        <PageData>
          {products.map((element, index) => {
            return (
              <MainProductCard
                name={element.name}
                photos={element.photos}
                price={element.price}
                id={element.id}
                key={index.toString()}
              />
            );
          })}
        </PageData>
      ) : (
        <PageDataOneColumn>
            {products.map((element, index) => {
              return (
                <MainProductCardOneColumn
                  name={element.name}
                  photos={element.photos}
                  price={element.price}
                  id={element.id}
                  key={index.toString()}
                />
              );
            })}
        </PageDataOneColumn>
      )}
    </>
  );
};

export default ProductListing;
