import {
  ADD_TODO_ERROR,
  ADD_TODO_LOADING,
  ADD_TODO_SUCCESS,
  GET_TODO_LOADING,
  GET_TODO_SUCCESS,
  GET_TODO_ERROR,
  UPDATE_TODO_LOADING,
  UPDATE_TODO_SUCCESS,
  UPDATE_TODO_ERROR,
  REMOVE_TODO_LOADING,
  REMOVE_TODO_SUCCESS,
  REMOVE_TODO_ERROR,
} from "./ActionTypes";

export const AddTodoLoading = () => {
  return {
    type: ADD_TODO_LOADING,
  };
};

export const AddTodoSuccess = (data) => {
  return {
    type: ADD_TODO_SUCCESS,
    payload: data,
  };
};

export const AddTodoError = (error) => {
  return {
    type: ADD_TODO_ERROR,
    payload: error,
  };
};

export const GetTodoLoading = () => {
  return {
    type: GET_TODO_LOADING,
  };
};

export const GetTodoSuccess = (data) => {
  return {
    type: GET_TODO_SUCCESS,
    payload: data,
  };
};

export const GetTodoError = (error) => {
  return {
    type: GET_TODO_ERROR,
    payload: error,
  };
};

export const UpdateTodoLoading = () => {
  return {
    type: UPDATE_TODO_LOADING,
  };
};

export const UpdateTodoSuccess = () => {
  return {
    type: UPDATE_TODO_SUCCESS,
  };
};

export const UpdateTodoError = (error) => {
  return {
    type: UPDATE_TODO_ERROR,
    payload: error,
  };
};

export const RemoveTodoLoading = () => {
  return {
    type: REMOVE_TODO_LOADING,
  };
};

export const RemoveTodoSuccess = () => {
  return {
    type: REMOVE_TODO_SUCCESS,
  };
};

export const RemoveTodoError = (error) => {
  return {
    type: REMOVE_TODO_ERROR,
    payload: error,
  };
};
