import { combineReducers, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import movieReducer from "../Reducers/movies/reducer";

const AllReducers = combineReducers({
  movieReducer: movieReducer,
});

const store = createStore(AllReducers, {}, applyMiddleware(thunk));
export default store;
