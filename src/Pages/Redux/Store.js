import { configureStore } from "@reduxjs/toolkit";
// import { combineReducers, createStore } from "redux";
import { productsReducer } from "./Slice/productSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});
// const rootReducer = combineReducers({
//   products: productsReducer,
// });
// const store = createStore(rootReducer);

export default store;
