import { createStore, applyMiddleware } from "redux";
import myReducer from "../Reducers/myReducer";

import logger from "redux-logger"; // middleware

//creating redux store
const myStore = createStore(myReducer, applyMiddleware(logger));

export default myStore;
