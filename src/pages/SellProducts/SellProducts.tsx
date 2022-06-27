import { values } from "lodash";
import React from "react";
import { AiOutlineCamera } from "react-icons/ai";
import { MdArrowRight } from "react-icons/md";
import SecundaryButton from "../../components/SecundaryButton/SecundaryButton";
import {
  BoxCategoriesButton,
  HideInput,
  ImageUploadArea,
  ImageUploader,
  SellDetailsContainer,
  SellProductsContainer,
  StyledDescriptionInput,
  StyledIcon,
  StyledPrimaryInput,
  TitlePage,
} from "./style";

const SellProducts = () => {
  const [productsImage, setProductsImage] = React.useState<
    Array<string | null>
  >([null, null, null, null, null, null]);

  const onFileUpload = (e: any) => {
    const files = e.target.files;

    if (!productsImage.includes(null)) {
      alert("You can only upload 6 images");
      return;
    }

    Object.values(files).map((file: any) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        const image = event.target?.result;

        productsImage.find((item, index) => {
          if (item === null) {
            productsImage[index] = "" + image;
            setProductsImage([...productsImage]);
            console.log(productsImage[0]);
            return true;
          }
        });
      };
    });
  };

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
          <BoxCategoriesButton>
            <p>Choose a category</p>
            <StyledIcon />
          </BoxCategoriesButton>
        </div>
      </SellDetailsContainer>
      <SellDetailsContainer>
        <h3>Photos</h3>
        <ImageUploadArea>
          <ImageUploader>
            {!productsImage[0] ? (
              <>
                Upload your photos
                <HideInput
                  id="photo-attachment-files"
                  type="file"
                  accept="image/heic, image/png, image/jpeg, image/webp"
                  data-testid="attach-photos-input"
                  data-cy="attach-photos-input"
                  title=""
                  multiple
                  onChange={(e) => onFileUpload(e)}
                />
              </>
            ) : (
              <img
                src={productsImage[0]}
                alt="product image"
                style={{
                  objectFit: "scale-down",
                  width: "100%",
                  height: "100%",
                }}
              />
            )}
          </ImageUploader>
          {productsImage.slice(1).map((image, index) => {
            return image ? (
              <ImageUploader>
                <img
                  src={image}
                  alt="product image"
                  style={{
                    objectFit: "scale-down",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </ImageUploader>
            ) : (
              <ImageUploader>
                <AiOutlineCamera style={{ fontSize: "50px" }} />
                <HideInput
                  id="photo-attachment-files"
                  type="file"
                  accept="image/heic, image/png, image/jpeg, image/webp"
                  data-testid="attach-photos-input"
                  data-cy="attach-photos-input"
                  title=""
                  multiple
                  onChange={(e) => onFileUpload(e)}
                />
              </ImageUploader>
            );
          })}
        </ImageUploadArea>
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
    </SellProductsContainer>
  );
};
export default SellProducts;
