import React, { useLayoutEffect, useState } from "react";
import {
  Category,
  Container,
  ContainerProducts,
  DisabledButton,
  PageBottoms,
  SafeContainer,
  StyledProductListing,
  StyledSpan,
} from "./style";
import { useParams } from "react-router-dom";
import { PrimaryButton } from "../../components/PrimaryButton/style";
import axios from "axios";

const PLP = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentProds, setCurrentProds]: any = useState([]);
  const { category1, category2 }: any = useParams();

  useLayoutEffect(() => {
    if (category1) {
      axios
        .get(
          `https://dealit-backend.herokuapp.com/dealit/api/products/category/${category1}?page=${currentPage}`
        )
        .then((response: any) => {
          setCurrentProds(response.data);
          return currentProds;
        });
    }
    if (category2) {
      axios
        .get(
          `https://dealit-backend.herokuapp.com/dealit/api/products/category/${category2}?page=${currentPage}`
        )
        .then((response: any) => {
          setCurrentProds(response.data);
          return currentProds;
        });
    }
  }, [currentPage]);

  return (
    <Container>
      <SafeContainer>
        <Category>
          <h1>Category</h1>
          <span>{category1}</span>
        </Category>

        <ContainerProducts>
          <StyledProductListing oneColumn={false} products={currentProds} />
        </ContainerProducts>

        <PageBottoms>
          {currentPage === 1 ? (
            <DisabledButton>Previous</DisabledButton>
          ) : (
            <PrimaryButton
              onClick={() => setCurrentPage((currentPage) => currentPage - 1)}
            >
              Previous
            </PrimaryButton>
          )}
          <StyledSpan>Page {currentPage}</StyledSpan>
          {currentPage === 2 ? (
            <DisabledButton>Next</DisabledButton>
          ) : (
            <PrimaryButton
              onClick={() => setCurrentPage((currentPage) => currentPage + 1)}
            >
              Next
            </PrimaryButton>
          )}
        </PageBottoms>
      </SafeContainer>
    </Container>
  );
};
export default PLP;
