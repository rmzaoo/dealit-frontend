import React from "react";
import useCategoriesFetcher from "../../hooks/categories/useCategoriesFetcher";
import useSubCategoriesFetcher from "../../hooks/categories/useSubCategoriesFetcher";
import {
  CategoryBlock,
  ModalCategory,
  ModalCategoryContainer,
  PrincipalContainer,
  SecondaryContainer,
} from "./style";

interface ChooseCategoryModalProps {
  closeModal: () => void;
}

const ChooseCategoryModal = ({ closeModal }: ChooseCategoryModalProps) => {
  const { categories } = useCategoriesFetcher();

  const [choosedPrincipalCategory, setChoosedPrincipalCategory] =
    React.useState("");
  const [choosedSecondaryCategory, setChoosedSecondaryCategory] =
    React.useState("");

  const { subCategories, isLoading } = useSubCategoriesFetcher(
    choosedPrincipalCategory
  );

  const onPrincipalCategoryClick = (category: string) => {
    setChoosedPrincipalCategory(category);
  };

  const onSecondaryCategoryClick = (category: string) => {
    setChoosedSecondaryCategory(category);
    closeModal();
  };

  return (
    <>
      <ModalCategoryContainer onClick={closeModal} />
      <ModalCategory>
        <h3>Choose a Category</h3>

        {choosedPrincipalCategory === "" ? (
          <PrincipalContainer>
            {categories.map(({ name, image }: any) => {
              return (
                <CategoryContainer
                  category={name}
                  onClick={() => onPrincipalCategoryClick(name)}
                  key={name}
                />
              );
            })}
          </PrincipalContainer>
        ) : (
          <SecondaryContainer>
            <div className="principal-category">
              {categories.map(({ name, image }: any) => {
                return choosedPrincipalCategory === name ? (
                  <p style={{ color: "black" }} key={name}>
                    {name}
                  </p>
                ) : (
                  <p onClick={() => onPrincipalCategoryClick(name)} key={name}>
                    {name}
                  </p>
                );
              })}
            </div>

            <div className="secondary-category">
              {subCategories &&
                subCategories.map(({ name, image }: any) => {
                  return (
                    <CategoryContainer
                      category={name}
                      onClick={() => onSecondaryCategoryClick(name)}
                      key={name}
                    />
                  );
                })}
            </div>
          </SecondaryContainer>
        )}
      </ModalCategory>
    </>
  );
};

const CategoryContainer = ({ category, onClick }: any) => {
  return (
    <CategoryBlock onClick={onClick}>
      <p>{category}</p>
    </CategoryBlock>
  );
};

export default ChooseCategoryModal;
