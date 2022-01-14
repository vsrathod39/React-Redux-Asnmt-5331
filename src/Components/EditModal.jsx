import React from "react";
import { Div } from "./EditModal.Style";
import { context } from "../Context/ContextProvoder";
import { useSelector, useDispatch } from "react-redux";
import {
  UpdateTodoError,
  UpdateTodoLoading,
  UpdateTodoSuccess,
} from "../Store/Todos/Actions";

export default function EditModal({ defaultText, id }) {
  const [text, setText] = React.useState();
  const { setEditBox } = React.useContext(context);
  const { loading, error } = useSelector((state) => ({
    loading: state.loading,
    todos: state.data,
    error: state.error,
  }));
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setText(e.target.value);
    const { name, value } = e.target;
    setText({
      ...text,
      [name]: value,
    });
  };

  const handleClose = () => {
    setEditBox(false);
  };

  const updateTodo = (id) => {
    dispatch(UpdateTodoLoading());
    fetch(`http://localhost:3001/todos/${id}`, {
      method: "PATCH",
      body: JSON.stringify(text),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch(UpdateTodoSuccess());
        setEditBox(false);
      })
      .catch((error) => {
        dispatch(UpdateTodoError(error));
      });
  };

  const handleSubmit = () => {
    updateTodo(id);
  };
  return (
    <Div>
      <p className="title">Updated Details</p>
      <button onClick={handleClose} className="close">
        close
      </button>
      <textarea
        defaultValue={defaultText}
        onChange={handleChange}
        name="title"
        cols="30"
        rows="3"
      ></textarea>
      <select onChange={handleChange} name="status">
        <option value="false">False</option>
        <option value="true">True</option>
      </select>
      <button onClick={handleSubmit} className="updated-btn">
        {loading ? "Loading..." : "Update"}
      </button>
      {error ? (
        <p style={{ color: "red" }} className="update-state">
          Error
        </p>
      ) : null}
    </Div>
  );
}
