import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  SearchBarButton,
  SearchbarContainer,
  SearchbarInput,
  SearchBarIcon,
  SearchBarResultsContainer,
  SearchBarResultItem,
  SearchBarResultItemInfo,
} from "./style";
import { fetchAllProducts } from "../../api/productsFetch";

interface Props {
  className?: string;
}

const Searchbar = ({ className }: Props) => {
  const [value, setValue] = useState("");
  const [products, setProducts] = useState<any>();
  const navigate = useNavigate();

  const filterProducts = (searchValue: string) => {
    const regex = new RegExp(`^${searchValue}`, "gi");
    const prods = products.filter((prod: any) =>
      regex.test(prod.name.toLowerCase())
    );
    return prods;
  };

  const navigateToProduct = (id: any) => {
    navigate(`/product/${id}`);
    setValue("");
  };

  useEffect(() => {
    fetchAllProducts(10000).then((products: any) => setProducts(products));
  }, []);

  return (
    <SearchbarContainer className={className}>
      <SearchbarInput
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search"
      />
      <SearchBarButton>
        <SearchBarIcon />
      </SearchBarButton>
      <SearchBarResultsContainer>
        {value.length > 0 ? (
          filterProducts(value).length > 0 ? (
            filterProducts(value).map((product: any) => {
              return (
                <SearchBarResultItem
                  onClick={() => navigateToProduct(product.id)}
                >
                  <img src={product.photos[0]} alt="product image" />
                  <SearchBarResultItemInfo>
                    <span>{product.name}</span>
                    <span>{product.price} $</span>
                  </SearchBarResultItemInfo>
                </SearchBarResultItem>
              );
            })
          ) : (
            <SearchBarResultItem>
              <span>No products found!</span>
            </SearchBarResultItem>
          )
        ) : null}
      </SearchBarResultsContainer>
    </SearchbarContainer>
  );
};

export default Searchbar;
