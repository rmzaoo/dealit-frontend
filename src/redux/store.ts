import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {
  user: {
    id: null,
    username: null,
    email: null,
    phone: null,
    orders: [],
    addresses: [],
    creditCards: [],
  },
  cart: [],
};

function reducer(
  state: any = initialState,
  action: { type: string; payload: any }
) {
  switch (action.type) {
    case "ADD":
      let check = false;
      state.cart.forEach((element: any, i: number) => {
        if (element.product.id === action.payload.product.id) {
          check = true;
        }
      });
      console.log(!check);
      return !check
        ? { ...state, cart: [...state.cart, action.payload] }
        : {
            ...state,
            cart: state.cart.map((e: any) => {
              if (e.product.id === action.payload.product.id)
                e.quantity = e.quantity + 1;
              return e;
            }),
          };

    case "REMOVE":
      return state.cart.filter((item: any) => item.id !== action.payload.id);

    case "INCREASE":
      let tempcart2 = state.cart.map((item: any) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      return tempcart2;

    case "DECREASE":
      let tempcart3 = state.cart.map((item: any) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
      return tempcart3;

    default:
      return state;
  }
}

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
