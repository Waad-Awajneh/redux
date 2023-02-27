import React from "react";
import * as CONSTANT from "./constants";
const initialState = {
  userReducers: { loading: false, error: null, users: [] },
};
export default function userReducers(state = initialState, actions) {
  switch (actions.type) {
    case CONSTANT.ON_LOADING:
      return {
        ...state,
        loading: true,
      };
    case CONSTANT.ON_SUCCESS:
      return {
        ...state,
        loading: false,
        users: actions.payload,
      };
    case CONSTANT.ON_ERROR:
      return { ...state, loading: false, error: actions.payload };
    default:
      return state;
  }
}
