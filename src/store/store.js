import { createStore } from "redux";
import allReducers from "./reducer";

const store = createStore(
  allReducers,
);

store.getState();

export default store;