const { createStore, combineReducers } = require("redux");

// defining a type constants
const INCREMENT = "INCREMENT";
const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

const GET_CART = "GET_CART";
const ADD_CART = "ADD_CART";
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";

// state
const initialCounterState = {
  count: 0,
};

const initialUsersState = {
  users: [{ name: "Md. Mohon" }],
};

const initialCartState = {
  carts: ["Cycle"],
  count: 1,
};

const initialProductsState = {
  products: ["Alu", "bagun", "tometo"],
  count: 3,
};

// action - object - type- payload

const incrementCounter = () => {
  return {
    type: INCREMENT,
  };
};

const incrementBuValueCounter = (value) => {
  return {
    type: INCREMENT_BY_VALUE,
    payload: value,
  };
};

const decrementCounter = () => {
  return {
    type: DECREMENT,
  };
};

const resetCounter = () => {
  return {
    type: RESET,
  };
};

const addUser = () => {
  return {
    type: ADD_USER,
    payload: { name: "Abdur Razzak" },
  };
};

const getCarts = () => {
  return {
    type: GET_CART,
  };
};

const addCart = (cart) => {
  return {
    type: ADD_CART,
    payload: cart,
  };
};

const getProducts = () => {
  return {
    type: GET_PRODUCTS,
  };
};

const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};

// create reducer for counter
const counterReducer = (state = initialCounterState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case INCREMENT_BY_VALUE:
      return {
        ...state,
        count: state.count + action.payload,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case RESET:
      return {
        ...state,
        count: 0,
      };
    default:
      state;
  }
};

const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case GET_CART:
      return {
        ...state,
      };
    case ADD_CART:
      return {
        carts: [...state.carts, action.payload],
        count: state.count + 1,
      };
    default:
      return state;
  }
};

const productReducer = (state = initialProductsState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
      };
    case ADD_PRODUCT:
      return {
        products: [...state.products, action.payload],
        count: state.count + 1,
      };
    default:
      return state;
  }
};

// combined multiple reducer

const rootReducer = combineReducers({
  productsR: productReducer,
  cartsT: cartReducer,
});

// create store
const store = createStore(rootReducer);

store.subscribe(() => {
  console.log(store.getState());
});

// dispatch action
// store.dispatch(incrementCounter());
// store.dispatch(incrementCounter());
// store.dispatch(incrementCounter());
// store.dispatch(incrementCounter());
// store.dispatch(decrementCounter());
// store.dispatch(decrementCounter());
// store.dispatch(resetCounter());
// store.dispatch(incrementBuValueCounter(5));
// store.dispatch(incrementBuValueCounter(10));
store.dispatch(getCarts());
store.dispatch(addCart("cart nai"));

// store.dispatch(getCarts(10));
// store.dispatch(addCart(10));
