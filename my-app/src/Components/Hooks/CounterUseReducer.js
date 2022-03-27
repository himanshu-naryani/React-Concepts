import React, { useReducer } from "react";

const initialState = {
  firstCount: 0,
  secondCount: 0,
};
const countReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, firstCount: state.firstCount + action.payload };
    case "DECREMENT":
      return { ...state, firstCount: state.firstCount - action.payload };
    case "INCREMENT2":
      return { ...state, secondCount: state.secondCount + action.payload };
    case "DECREMENT2":
      return { ...state, secondCount: state.secondCount - action.payload };
    default:
      return state;
  }
};

export default function CounterUseReducer() {
  const [count, dispatch] = useReducer(countReducer, initialState);
  return (
    <div>
      <div>
        Counter1 : {count.firstCount}
        <button onClick={() => dispatch({ type: "INCREMENT", payload: 5 })}>
          +
        </button>
        <button onClick={() => dispatch({ type: "DECREMENT", payload: 5 })}>
          -
        </button>
      </div>

      <div>
        Counter2 : {count.secondCount}
        <button onClick={() => dispatch({ type: "INCREMENT2", payload: 2 })}>
          +
        </button>
        <button onClick={() => dispatch({ type: "DECREMENT2", payload: 2 })}>
          -
        </button>
      </div>
    </div>
  );
}
