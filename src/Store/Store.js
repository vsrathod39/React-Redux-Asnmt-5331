import { createStore } from "redux";
import { Reducer } from "./Counter/Reducer";
import { Reducer as TodosReducer } from "./Todos/Reducer";

export const store = createStore(TodosReducer);
