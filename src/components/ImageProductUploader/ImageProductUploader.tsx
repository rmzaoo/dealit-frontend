import React from "react";
import { AiOutlineCamera } from "react-icons/ai";
import { toast } from "react-toastify";
import { HideInput, ImageUploadArea, ImageUploader } from "./styled";

interface ChooseCategoryModalProps {
  onPhotoSubmit: (images: File[]) => void;
}

const ImageProductUploader = ({ onPhotoSubmit }: ChooseCategoryModalProps) => {
  const [productsImage, setProductsImage] = React.useState<
    Array<string | null>
  >([null, null, null, null, null, null]);

  const onFileUpload = (e: any) => {
    const files = e.target.files;

    if (!productsImage.includes(null) || files.length > 6) {
      toast.error("You can upload only 6 images");
      return;
    }
    onPhotoSubmit(files);

    Object.values(files).map((file: any) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        const image = event.target?.result;

        productsImage.find((item, index) => {
          if (item === null) {
            productsImage[index] = "" + image;
            setProductsImage([...productsImage]);
            return true;
          }
        });
      };
    });
  };

  return (
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
  );
};

export default ImageProductUploader;
