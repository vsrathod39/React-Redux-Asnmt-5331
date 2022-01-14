import { createStore } from "redux";
import { Reducer as TodosReducer } from "./Todos/Reducer";

export const store = createStore(TodosReducer);
