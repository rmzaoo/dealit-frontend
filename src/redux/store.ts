import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { fetchCategories } from "../api/categoryFetch";

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
  cartData: [],
  cartIsOpened:false,
  categories: await fetchCategories().then((data) =>
    data.map((e: any) => {
      return {
        mainCategory: e.name,
        subCategories: e.subcategories.map((s: any) => s.name),
      };
    })
  ),
};

function reducer(
  state = initialState,
  action: { type: string; payload: any }
): any {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };
    case "ADD":
      let check = false;
      state.cart.forEach((element: any, i: number) => {
        if (element.product.id === action.payload.product.id) {
          check = true;
        }
      });
      return !check
        ? { ...state, cart: [...state.cart, action.payload] }
        : {
            ...state,
            cart: state.cart.map((e: any) => {
              if (e.product.id === action.payload.product.id) {
                let numberQuantity = parseInt(e.quantity);
                e.quantity = numberQuantity + 1;
                
                return e;
              }
            }),
          };
    case "SEND_OPENED":
      return {
        ...state,
        cartIsOpened: action.payload.opened,
      };
    default:
      return state;
  }
}

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
