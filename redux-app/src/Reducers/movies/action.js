import { DELETE, LOADING } from "./constants";
import { FAILED_GET_DATA, SUCCESS_GET_DATA } from "./constants";

export const getMovieData = () => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    console.log(data);
    if (data) dispatch({ type: SUCCESS_GET_DATA, payload: data.products });
  } catch (error) {
    dispatch({ type: FAILED_GET_DATA, payload: error });
  }
};
export const deleteMovie = (id) => (dispatch) => {
  dispatch({ type: LOADING });

  dispatch({ type: DELETE, payload: id });
};
