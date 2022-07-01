import ReactDOM from "react-dom/client";
import GlobalStyle from "./GlobalStyle";
import Navigation from "./Navigation";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const optionsPaypal = { "client-id": import.meta.env.REACT_APP_PAYPAL_CLIENT_ID };

console.log("Paypal client id:", optionsPaypal);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PayPalScriptProvider options={optionsPaypal}>
      <GlobalStyle />
      <Navigation />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
      />
    </PayPalScriptProvider>
  </Provider>
);
