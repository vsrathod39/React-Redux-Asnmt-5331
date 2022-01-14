import {
  ADD_TODO_ERROR,
  ADD_TODO_LOADING,
  ADD_TODO_SUCCESS,
  GET_TODO_ERROR,
  GET_TODO_LOADING,
  GET_TODO_SUCCESS,
  UPDATE_TODO_ERROR,
  UPDATE_TODO_LOADING,
  UPDATE_TODO_SUCCESS,
  REMOVE_TODO_ERROR,
  REMOVE_TODO_LOADING,
  REMOVE_TODO_SUCCESS,
} from "./ActionTypes";

const init = { loading: false, data: [], error: false };
export const Reducer = (state = init, { type, payload }) => {
  switch (type) {
    case ADD_TODO_LOADING:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case ADD_TODO_SUCCESS:
      return {
        ...state,
        data: [...state.data, payload],
        loading: false,
        error: false,
      };
    case ADD_TODO_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      };
    case GET_TODO_LOADING:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case GET_TODO_SUCCESS:
      return {
        ...state,
        data: payload,
        loading: false,
        error: false,
      };
    case GET_TODO_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      };
    case UPDATE_TODO_LOADING:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case UPDATE_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
      };
    case UPDATE_TODO_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      };
    case REMOVE_TODO_LOADING:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case REMOVE_TODO_SUCCESS:
      console.log(state);
      return {
        ...state,
        loading: false,
        error: false,
      };
    case REMOVE_TODO_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      };
    default:
      return state;
  }
};
