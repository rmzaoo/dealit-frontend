import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

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

function reducer(state = initialState, action: { type: string }) {
  switch (action.type) {
    default:
      return state;
  }
}

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
