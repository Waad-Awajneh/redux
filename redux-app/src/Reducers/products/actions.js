import * as CONSTANTS from "./constant";

export const getProducts = () => async (dispatch) => {
  dispatch({ type: CONSTANTS.LOADING });
  try {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    if (data) {
      dispatch({ type: CONSTANTS.FETCH_SUCCESS, payload: data.products });
    }
  } catch (error) {
    dispatch({ type: CONSTANTS.FETCH_FAILED, payload: error });
  }
};

export const deleteProduct = (id) => (dispatch) => {
  dispatch({ type: CONSTANTS.LOADING });
  dispatch({ type: CONSTANTS.DELETE_PRODUCT, payload: id });
};
