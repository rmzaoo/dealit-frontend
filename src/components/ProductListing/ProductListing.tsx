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
          {products.map((element) => {
            return (
              <MainProductCard
                name={element.name}
                photos={element.photos}
                price={element.price}
                id={element.id}
              />
            );
          })}
        </PageData>
      ) : (
        <PageDataOneColumn>
            {products.map((element) => {
              return (
                <MainProductCardOneColumn
                  name={element.name}
                  photos={element.photos}
                  price={element.price}
                  id={element.id}
                />
              );
            })}
        </PageDataOneColumn>
      )}
    </>
  );
};

export default ProductListing;
