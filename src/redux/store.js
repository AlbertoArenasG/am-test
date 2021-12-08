import { createStore, combineReducers } from "redux";
import hogwarts from "./reducers/hogwarts.js";

const reducer = combineReducers({
  hogwarts,
});

export const store = createStore(reducer);
