import { combineReducers, applyMiddleware, createStore } from "redux";

import thunk from "redux-thunk";

import { ProductsReducer } from "../Reducers/products/reducer";
import CarsReducer from "../Reducers/cars/reducer";

const allReducers = combineReducers({
  ProductsReducer,
  CarsReducer,
});

const store = createStore(allReducers, {}, applyMiddleware(thunk));
export default store;
