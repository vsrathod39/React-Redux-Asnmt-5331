import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { Div } from "./Total.Style";

export default function Total() {
  const { total } = useSelector((state) => ({
    total: state.total,
  }));

  return total.length > 0 ? (
    <Div>
      <h3>Total Pending : {total.length}</h3>
      <ul>
        <li>
          <p className="title">Title</p>
          <p className="status">Status</p>
          <p className="state">State</p>
        </li>
        {total.map((e) => (
          <li key={e.id}>
            <p className="title">{e.title}</p>
            <p className="status">{String(e.status)}</p>
            <p className="state">Pending</p>
          </li>
        ))}
      </ul>
    </Div>
  ) : (
    <Navigate replace to={"/"} />
  );
}
