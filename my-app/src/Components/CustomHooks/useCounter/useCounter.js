import React, { useState } from "react";

function useCounter(initalCount, payload) {
  const [count, setCount] = useState(initalCount);
  const increment = () => {
    setCount((prev) => prev + payload);
  };
  const decrement = () => {
    setCount((prev) => prev - 1);
  };
  const reset = () => {
    setCount(initalCount);
  };
  return [count, increment, decrement, reset];
}

export default useCounter;
