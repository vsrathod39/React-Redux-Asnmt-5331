import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  DetailsTodoSuccess,
  DetailsTodoLoading,
  DetailsTodoError,
} from "../Store/Todos/Actions";

export default function TodoDetails() {
  const { id } = useParams();

  const { loading, todos, error } = useSelector((state) => ({
    loading: state.loading,
    todos: state.details,
    error: state.error,
  }));

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(DetailsTodoLoading());
    fetch(`http://localhost:3001/todos/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch(DetailsTodoSuccess(data));
      })
      .catch((error) => {
        dispatch(DetailsTodoError(error));
      });
  }, []);
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>something went wrong</p>
      ) : (
        <div>
          <h3>This is the details page for todo having id : {id}</h3>
          <p>Title : {todos.title}</p>
          <p>Status: {String(todos.status)}</p>
        </div>
      )}
    </div>
  );
}
