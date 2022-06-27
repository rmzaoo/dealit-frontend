import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { fetchCategories } from "../api/productsFetch";

const initialState = {
  user: {
    id: null,
    username: null,
    email: null,
    phone: null,
    photo: null,
    token: null,
  },
  cart: [],
  orders: [],
  addresses: [],
  creditCards: [],
  categories: await fetchCategories().then((data) =>
    data.map((e: any) => {
      return {
        mainCategory: e.name,
        subCategories: e.subcategories.map((s: any) => s.name),
      };
    })
  ),
};

function reducer(state = initialState, action: { type: string; payload: any }) {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };
    default:
      return state;
  }
}

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
