import * as CONSTANTS from "./constant";
const initialState = {
  Reducer: { data: [], loading: false, error: null },
};

export function ProductsReducer(state = initialState, action) {

  switch (action.type) {
    case CONSTANTS.LOADING:
      return { ...state, loading: true };
    case CONSTANTS.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    case CONSTANTS.FETCH_FAILED:
      return { ...state, loading: false, error: action.payload };

    case CONSTANTS.DELETE_PRODUCT:
      return {
        ...state,
        loading: false,
        data: state.data?.filter((product) => {
          console.log(product);
          return product.id !== action.payload;
        }),
      };
    default:
      return state;
  }
}
