import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

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
  categories: []
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
