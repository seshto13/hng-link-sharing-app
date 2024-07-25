import { configureStore } from "@reduxjs/toolkit";
import { linkReducer } from "./reducer";

const reducer = {
  info: linkReducer,
};

const store = configureStore({
  reducer,
});
export default store;
