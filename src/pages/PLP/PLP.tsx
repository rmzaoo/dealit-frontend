import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  Category,
  Container,
  ContainerProducts,
  PageBottoms,
  SafeContainer,
  StyledProductListing,
} from "./style";
import { queryParam } from "../../utils/queryparams";
import { PrimaryButton } from "../../components/PrimaryButton/style";
import { fetchProductByCategoryPerPage } from "../../api/productsFetch";

const PLP = () => {
  const pageQueryParam = queryParam("page") || "1";
  const categoryQueryParam = queryParam("category") || "recent";

  const [currentCategory, setCurrentCategory] = useState(categoryQueryParam);
  const [currentPage, setCurrentPage] = useState(pageQueryParam);
  const [products, setProducts] = useState([]);

  useLayoutEffect(() => {
    setCurrentCategory(categoryQueryParam);
    setCurrentPage(pageQueryParam);

    fetchProductByCategoryPerPage(
      parseInt(pageQueryParam),
      categoryQueryParam
    ).then((data) => {
      setProducts(data);
    });
  }, [categoryQueryParam, pageQueryParam]);


  return (
    <Container>
      <SafeContainer>
        <Category>
          <h1>Category</h1>
          <span>{currentCategory}</span>
        </Category>

        <ContainerProducts>
          <StyledProductListing oneColumn={false} products={products} />
        </ContainerProducts>
        <PageBottoms>
          <PrimaryButton
            onClick={() => setCurrentPage(`${parseInt(currentPage) - 1}`)}
          >
            Previous
          </PrimaryButton>
          <span>Page {currentPage}</span>
          <PrimaryButton
            onClick={() => setCurrentPage(`${parseInt(currentPage) + 1}`)}
          >
            Next
          </PrimaryButton>
        </PageBottoms>
      </SafeContainer>
    </Container>
  );
};
export default PLP;
