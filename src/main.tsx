import ReactDOM from "react-dom/client";
import GlobalStyle from "./global";
import Navigation from "./Navigation";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <GlobalStyle />
    <Navigation />
  </>
);
