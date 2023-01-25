import { combineReducers, applyMiddleware, createStore } from "redux";

import thunk from "redux-thunk";

import { ProductsReducer } from "../Reducers/products/reducer";

const allReducers = combineReducers({
  ProductsReducer,
});

const store = createStore(allReducers, {}, applyMiddleware(thunk));
export default store;
