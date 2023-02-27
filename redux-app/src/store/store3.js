import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import userReducers from "../Reducers/users/reducer";
const allReducers=combineReducers({
    users:userReducers
})

export const store3=createStore(allReducers,{},applyMiddleware(thunk))