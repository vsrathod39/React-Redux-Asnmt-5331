import React from "react";
import { Routes, Route } from "react-router-dom";
import Todos from "../Components/Todos";
import TodoDetails from "../Components/TodoDetails";
import EditModal from "../Components/EditModal";
import Total from "../Components/Total";

export default function RoutesHandler() {
  return (
    <Routes>
      <Route path="/" element={<Todos />} />
      <Route path="/todo/:id" element={<TodoDetails />} />
      <Route path="/todo/:id/edit" element={<EditModal />} />
      <Route path="/todos/pending" element={<Total />} />
    </Routes>
  );
}
