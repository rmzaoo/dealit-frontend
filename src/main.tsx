import ReactDOM from "react-dom/client";
import GlobalStyle from "./global";
import Navigation from "./Navigation";
import { Provider } from "react-redux";
import store from "./redux/store";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <GlobalStyle />
    <Navigation />
  </Provider>
);
