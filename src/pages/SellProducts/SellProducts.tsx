import { useState } from "react";
import { Link } from "react-router-dom";
import ChooseCategoryModal from "../../components/ChooseCategoryModal/ChooseCategoryModal";
import ImageProductUploader from "../../components/ImageProductUploader/ImageProductUploader";
import SecundaryButton from "../../components/SecundaryButton/SecundaryButton";
import {
  BoxCategoriesButton,
  SellDetailsContainer,
  SellProductsContainer,
  StyledDescriptionInput,
  StyledIcon,
  StyledPrimaryInput,
  TitlePage,
} from "./style";

const SellProducts = () => {
  const [productsImage, setProductsImage] = useState([]);
  const [showCategoryModal, setShowCategoryModal] = useState(false);

  return (
    <SellProductsContainer>
      <TitlePage>Publish your product</TitlePage>

      <SellDetailsContainer>
        <h3>More details, more opportunities</h3>
        <div className="input-sell-container">
          <span>Name? Think about some catchy name</span>
          <StyledPrimaryInput placeholder="e.g. iphone 11 128GB" />
        </div>
        <div className="input-sell-container">
          <span>Category</span>
          <BoxCategoriesButton
            onClick={() => setShowCategoryModal(!showCategoryModal)}
          >
            <p>Choose a category</p>
            <StyledIcon />
          </BoxCategoriesButton>
        </div>
      </SellDetailsContainer>
      <SellDetailsContainer>
        <h3>Photos</h3>
        <ImageProductUploader />
      </SellDetailsContainer>
      <SellDetailsContainer>
        <h3>How it is your product?</h3>
        <div className="input-sell-container">
          <span>Description</span>
          <StyledDescriptionInput placeholder="e.g. iphone 11 128GB" />
        </div>
        <div className="input-sell-container">
          <span>price? We work with prices in US dollars</span>
          <div>
            <StyledPrimaryInput placeholder="e.g. 100" />
          </div>
        </div>
      </SellDetailsContainer>

      <SellDetailsContainer>
        <h3>You read the rules?</h3>
        <p>
          <input type="checkbox" />
          To publish your product, you must agree to the{" "}
          <Link to="/rules">rules</Link>
        </p>
        <SecundaryButton>Publish my product</SecundaryButton>
      </SellDetailsContainer>
      {showCategoryModal && (
        <ChooseCategoryModal closeModal={() => setShowCategoryModal(false)} />
      )}
    </SellProductsContainer>
  );
};
export default SellProducts;
