import { useEffect, useLayoutEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { PostProduct } from "../../api/productsFetch";
import ChooseCategoryModal from "../../components/ChooseCategoryModal/ChooseCategoryModal";
import ImageProductUploader from "../../components/ImageProductUploader/ImageProductUploader";
import SecundaryButton from "../../components/SecundaryButton/SecundaryButton";
import useAuthenticationValidation from "../../hooks/user/useAuthenticationValidation";
import { getCookie } from "../../utils/cookies";
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
  const navigate = useNavigate();
  const [showCategoryModal, setShowCategoryModal] = useState(false);

  interface sellProductProps {
    title: string;
    description: string;
    price: number;
    category: string;
    photos: File[];
    subcategory: string;
  }

  let [sellProduct, setSellProduct] = useState<sellProductProps>({
    title: "",
    description: "",
    category: "",
    photos: [],
    subcategory: "",
    price: 0,
  });

  const [readRules, setReadRules] = useState(false);

  const user = useSelector((state: any) => state.user);

  const onCategorySelected = (category: string) => {
    setSellProduct({ ...sellProduct, category, subcategory: "" });
  };

  const onSubCategorySelected = (subcategory: string) => {
    setSellProduct({ ...sellProduct, subcategory });
    setShowCategoryModal(false);
  };

  const onPhotoSubmit = (photos: File[]) => {
    const tempPhotos = [...sellProduct.photos, ...photos];
    [...sellProduct.photos, ...photos].length > 6 && tempPhotos.splice(6);
    setSellProduct({ ...sellProduct, photos: tempPhotos });
  };

  const onSubmitProduct = () => {
    if (
      sellProduct.title.length === 0 ||
      sellProduct.category.length === 0 ||
      sellProduct.subcategory.length === 0 ||
      sellProduct.description.length === 0 ||
      sellProduct.photos.length === 0 ||
      sellProduct.price === 0
    ) {
      toast.error("Fill all the fields");
      return;
    }

    if (readRules === false) {
      toast.error("Please, read the rules and accept them");
      return;
    }

    const preparePost = {
      name: sellProduct.title,
      description: sellProduct.description,
      category: sellProduct.subcategory,
      photos: sellProduct.photos,
      price: sellProduct.price,
      userId: user.id,
      jwt: user.token,
    };

    PostProduct(preparePost)
      .then((data) => {
        toast.success("Product added successfully");
        navigate("/dashboard");
        console.log("success", data);
      })
      .catch((error) => {
        error.response.status === 401 &&
          navigate("/login?redirect=/sell-product");
        error.response.status === 403 &&
          navigate("/login?redirect=/sell-product");
        error.response.status === 400 && toast.error("Fill all the fields");
        error.response.status === 500 &&
          toast.error("Error while adding product");
      });
  };

  const { isLogged, isLoading, error } = useAuthenticationValidation(
    getCookie("token")
  );

  useLayoutEffect(() => {
    if (!isLoading && !isLogged) {
      navigate("/login?redirect=/sell-product");
    }
  }, [isLoading]);

  return (
    <SellProductsContainer>
      <TitlePage>Publish your product</TitlePage>
      <SellDetailsContainer>
        <h3>More details, more opportunities</h3>
        <div className="input-sell-container">
          <span>Name? Think about some catchy name</span>
          <StyledPrimaryInput
            placeholder="e.g. iphone 11 128GB"
            onChange={(e) =>
              setSellProduct({ ...sellProduct, title: e.target.value })
            }
          />
        </div>
        <div className="input-sell-container">
          <span>Category</span>
          <div>
            <BoxCategoriesButton onClick={() => setShowCategoryModal(true)}>
              <p>Choose a category</p>
              <StyledIcon />
            </BoxCategoriesButton>

            <span>
              {sellProduct.category != ""
                ? sellProduct.subcategory != ""
                  ? sellProduct.category + " - " + sellProduct.subcategory
                  : sellProduct.category
                : null}
            </span>
          </div>
        </div>
      </SellDetailsContainer>
      <SellDetailsContainer>
        <h3>Photos</h3>
        <ImageProductUploader
          onPhotoSubmit={(photos: File[]) => onPhotoSubmit(photos)}
        />
      </SellDetailsContainer>
      <SellDetailsContainer>
        <h3>How it is your product?</h3>
        <div className="input-sell-container">
          <span>Description</span>
          <StyledDescriptionInput
            placeholder="e.g. iphone 11 128GB"
            onChange={(e) =>
              setSellProduct({ ...sellProduct, description: e.target.value })
            }
          />
        </div>
        <div className="input-sell-container">
          <span>price? We work with prices in US dollars</span>
          <div>
            <StyledPrimaryInput
              placeholder="e.g. 100"
              onChange={(e) => {
                setSellProduct({
                  ...sellProduct,
                  price: Number(e.target.value),
                });
              }}
              type="number"
              min="1"
              step="any"
            />
          </div>
        </div>
      </SellDetailsContainer>

      <SellDetailsContainer>
        <h3>You read the rules?</h3>
        <p>
          <input type="checkbox" onChange={() => setReadRules(!readRules)} />
          To publish your product, you must agree to the{" "}
          <Link to="/rules">rules</Link>.
        </p>

        <div className="btnsubmit">
          <SecundaryButton onClick={onSubmitProduct}>
            Publish my product
          </SecundaryButton>
        </div>
      </SellDetailsContainer>
      {showCategoryModal && (
        <ChooseCategoryModal
          closeModal={() => setShowCategoryModal(false)}
          onCategorySelected={(category) => onCategorySelected(category)}
          onSubCategorySelected={(subcategory) =>
            onSubCategorySelected(subcategory)
          }
        />
      )}
    </SellProductsContainer>
  );
};
export default SellProducts;
