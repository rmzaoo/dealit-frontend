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
  className?: string;
}

const ProductListing = ({ oneColumn, products, className }: Props) => {
  return (
    <>
      {oneColumn === false ? (
        <PageData className={className}>
          {Object.values(products).map((element, index) => {
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
        <PageDataOneColumn className={className}>
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
