import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";

import myReducer from "../Reducers/myReducer";
import productReducer from "../Reducers/productReducers";

import logger from "redux-logger"; // middleware

const combinedReducers = combineReducers({
  myReducer,
  productReducer,
});

//creating redux store
const myStore = createStore(combinedReducers, applyMiddleware(logger));

export default myStore;
