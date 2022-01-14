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
  UpdateTodoError,
  UpdateTodoLoading,
  UpdateTodoSuccess,
} from "../Store/Todos/Actions";
import { Link } from "react-router-dom";
import EditModal from "./EditModal";
import { Div, Input, Button } from "./Todo.Style";
import { context } from "../Context/ContextProvoder";

export default function Todos() {
  const [text, setText] = React.useState();
  const [defaultText, setDefaultText] = React.useState();
  const { editBox, setEditBox } = React.useContext(context);
  const [id, setId] = React.useState();
  const [update, setUpdate] = React.useState(false);

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
    if (e?.target?.checked || !e?.target?.checked) {
      console.log(e.target.checked);
      dispatch(UpdateTodoLoading());
      fetch(`http://localhost:3001/todos/${e.target.id}`, {
        method: "PATCH",
        body: JSON.stringify({ completed: e.target.checked }),
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          dispatch(UpdateTodoSuccess());
          setUpdate((p) => ~p);
        })
        .catch((error) => {
          dispatch(UpdateTodoError(error));
        });
      return;
    }
    setText(e.target.value);
  };

  const addTodos = () => {
    dispatch(AddTodoLoading());
    fetch("http://localhost:3001/todos", {
      method: "POST",
      body: JSON.stringify({ status: false, title: text, completed: false }),
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
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUpdate((p) => ~p);
      })
      .catch((error) => {
        console.log(error);
        dispatch(RemoveTodoError(error));
      });
  };

  return (
    <div>
      <Input onChange={handleChange} type="text" placeholder="Add Todos" />
      <Button onClick={handleSubmit}>Add</Button>
      <hr />
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>something went wrong.</p>
      ) : todos ? (
        <Div>
          <div>
            <p className="complete">Completd</p>
            <p className="title">Title</p>
            <p className="status">Status</p>
            <p className="edit">Edit</p>
            <p className="delete">Delete</p>
          </div>
          {todos.map((e) => (
            <div key={e.id}>
              {e.completed ? (
                <input
                  id={e.id}
                  onChange={handleChange}
                  className="complete"
                  type="checkbox"
                  name="completed"
                  checked
                />
              ) : (
                <input
                  id={e.id}
                  onChange={handleChange}
                  className="complete"
                  type="checkbox"
                  name="completed"
                />
              )}
              <p className="title">
                <Link to={`/todo/${e.id}`}>{e.title}</Link>
              </p>
              <p className="status">{String(e.status)}</p>
              <button
                value={e.title}
                id={e.id}
                onClick={() => {
                  window.location.href = `/todo/:${e.id}/edit`;
                }}
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
      <Link to="/todos/pending">See total pending task</Link>
    </div>
  );
}
