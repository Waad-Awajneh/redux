import * as CONSTANTS from "./constant";

const initialState = {
  loading: false,
  error: null,
  data: [],
};

export default function CarsReducer(state = initialState, action) {
    console.log(action.payload); 
     switch (action.type) {

    case CONSTANTS.LOADINGT:
      return { ...state, loading: true };
    case CONSTANTS.FETCH_SUCCESST:
      return { ...state, loading: false, data: action.payload };
    case CONSTANTS.FETCH_FAILEDT:
      return { ...state, loading: false, error: action.payload };
    case CONSTANTS.DELETET:
      return {
        ...state,
        loading:false,
        data: state.data?.filter((product) => action.payload !== product.id),
      };
      default:return state
  }
}
