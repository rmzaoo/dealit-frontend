import React from "react";
import Logo from "../Logo/Logo";
import { LoadingPageContainer } from "./styled";
import loadingGif from "../../assets/loading.gif";

const LoadingPage = () => {
  return (
    <LoadingPageContainer>
      <div>
        <img src={loadingGif} alt="loading" />
        <div>
          <h1>Dealit </h1>
        </div>
      </div>
    </LoadingPageContainer>
  );
};

export default LoadingPage;
