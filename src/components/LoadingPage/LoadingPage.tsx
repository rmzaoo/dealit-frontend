import React from "react";
import Logo from "../Logo/Logo";
import { LoadingPageContainer } from "./styled";
import loadingSVG from "../../assets/loading.svg";

const LoadingPage = () => {
  return (
    <LoadingPageContainer>
      <div>
        <img src={loadingSVG} alt="loading" />
        <div>
          <h1>Dealit </h1>
        </div>
      </div>
    </LoadingPageContainer>
  );
};

export default LoadingPage;
