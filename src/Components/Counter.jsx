import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Increment_Counter, Decrement_Counter } from "../Store/Counter/Actions";

export default function Counter() {
  const counter = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Counter: {counter}</h1>
      <button
        onClick={() => {
          dispatch(Decrement_Counter(1));
        }}
      >
        -1
      </button>
      <button
        onClick={() => {
          dispatch(Increment_Counter(1));
        }}
      >
        +1
      </button>
    </>
  );
}
