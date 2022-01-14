import { DEC_COUNTER, INC_COUNTER } from "./ActionTypes";

const init = { count: 0 };

export const Reducer = (state = init, { type, payload }) => {
  switch (type) {
    case INC_COUNTER:
      return { ...state, count: state.count + payload };
    case DEC_COUNTER:
      return { ...state, count: state.count - payload };
    default:
      return state;
  }
};
