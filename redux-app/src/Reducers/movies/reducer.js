import {
  DELETE,
  FAILED_GET_DATA,
  LOADING,
  SUCCESS_GET_DATA,
} from "./constants";

const initState = {
  loading: false,
  error: null,
  data: [],
};

export default function movieReducer(state = initState, action) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case SUCCESS_GET_DATA: {
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    }
    case FAILED_GET_DATA:
      return { ...state, loading: false, error: action.payload };
    case DELETE:
      return {
        ...state,
        loading: false,
        data: state.data.filter((e) => e.id != action.payload),
      };
    default:
      return state;
  }
}
