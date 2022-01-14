import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  AddTodoError,
  AddTodoLoading,
  AddTodoSuccess,
  GetTodoError,
  GetTodoLoading,
  GetTodoSuccess,
  RemoveTodoError,
  RemoveTodoLoading,
  RemoveTodoSuccess,
} from "../Store/Todos/Actions";
import EditModal from "./EditModal";
import { Div, Input, Button } from "./Todo.Style";
import { context } from "../Context/ContextProvoder";

export default function Todos() {
  const [text, setText] = React.useState();
  const [defaultText, setDefaultText] = React.useState();
  const { editBox, setEditBox } = React.useContext(context);
  const [id, setId] = React.useState();
  const [update, setUpdated] = React.useState(false);

  const { loading, todos, error } = useSelector((state) => ({
    loading: state.loading,
    todos: state.data,
    error: state.error,
  }));

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(GetTodoLoading());
    fetch("http://localhost:3001/todos")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch(GetTodoSuccess(data));
      })
      .catch((error) => {
        dispatch(GetTodoError(error));
      });
  }, [editBox, update]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const addTodos = () => {
    dispatch(AddTodoLoading());
    fetch("http://localhost:3001/todos", {
      method: "POST",
      body: JSON.stringify({ status: false, title: text }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch(AddTodoSuccess(data));
      })
      .catch((error) => {
        dispatch(AddTodoError(error));
      });
  };

  const handleSubmit = () => {
    addTodos();
  };

  const handleEditClick = (e) => {
    setEditBox(true);
    setDefaultText(e.target.value);
    setId(e.target.id);
  };

  const handleDeleteClick = (e) => {
    dispatch(RemoveTodoLoading());
    fetch(`http://localhost:3001/todos/${e.target.id}`, {
      method: "DELETE",
      // body: JSON.stringify(text),
      // headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUpdated((p) => !p);
      })
      .catch((error) => {
        console.log(error);
        dispatch(RemoveTodoError(error));
      });
  };

  return (
    <div>
      <Input onChange={handleChange} type="text" placeholder="Todos" />
      <Button onClick={handleSubmit}>Add</Button>
      <hr />
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>something went wrong.</p>
      ) : todos ? (
        <Div>
          <div>
            <p className="title">Title</p>
            <p className="status">Status</p>
            <p className="edit">Edit</p>
            <p className="delete">Delete</p>
          </div>
          {todos.map((e) => (
            <div key={e.id}>
              <p className="title">{e.title}</p>
              <p className="status">{String(e.status)}</p>
              <button
                value={e.title}
                id={e.id}
                onClick={handleEditClick}
                className="edit"
                style={{ cursor: "pointer" }}
              >
                Edit
              </button>
              <button
                onClick={handleDeleteClick}
                id={e.id}
                className="delete"
                style={{ cursor: "pointer" }}
              >
                Delete
              </button>
            </div>
          ))}
        </Div>
      ) : null}
      {editBox ? <EditModal id={id} defaultText={defaultText} /> : null}
    </div>
  );
}
