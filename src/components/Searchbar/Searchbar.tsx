import { useState, useEffect, useRef } from "react";
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
  const wrapperRef = useRef(null);
  const [value, setValue] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [products, setProducts] = useState<any>();
  const navigate = useNavigate();

  const dropDownToggle = () => {
    setIsOpen(!isOpen);
    return true;
  };

  const useOutsideAlerter = (ref: any) => {
    useEffect(() => {
      //CLICKED OUTSIDE OF ELEMENT
      const handler = (event: { target: any }) => {

        if (isOpen && ref.current && !ref.current.contains(event.target)) {
          console.log("hey there");
          setIsOpen(false);
          setValue("");
        }
      };

      //BINDE EVENT LISTENER
      document.addEventListener("mousedown", handler);
      return () => {
        // UNBIND EVENT LISTENER ON CLEANUP
        document.removeEventListener("mousedown", handler);
      };
    }, [ref, isOpen]);
  };

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

  useOutsideAlerter(wrapperRef);

  return (
    <SearchbarContainer className={className}>
      <SearchbarInput
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search"
        onClick={dropDownToggle}
      />
      <SearchBarButton>
        <SearchBarIcon />
      </SearchBarButton>
      <SearchBarResultsContainer ref={wrapperRef} isOpen={isOpen}>
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
