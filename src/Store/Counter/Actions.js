import { INC_COUNTER, DEC_COUNTER } from "./ActionTypes";

export const Increment_Counter = (data) => {
  return { type: INC_COUNTER, payload: data };
};

export const Decrement_Counter = (id) => {
  return { type: DEC_COUNTER, payload: id };
};
