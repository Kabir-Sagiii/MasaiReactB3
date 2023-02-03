import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";

import thunk from "redux-thunk";

import myReducer from "../Reducers/myReducer";
import productReducer from "../Reducers/productReducers";

import logger from "redux-logger"; // middleware

const combinedReducers = combineReducers({
  myReducer,
  productReducer,
});

// custom Middleware
const myLogger = (store) => {
  return (next) => {
    console.log(next);
    return (action) => {
      console.log("Prev State", store.getState());
      console.log("Action", action);
      next(action); // It is Responsible for calling the Reducer
      console.log("New State", store.getState());
    };
  };
};

//creating redux store
const myStore = createStore(combinedReducers, applyMiddleware(myLogger, thunk));

export default myStore;
