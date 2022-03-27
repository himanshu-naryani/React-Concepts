import React from "react";
import useCounter from "./useCounter";

function DemoUseCounter() {
  const [count, increment, decrement, reset] = useCounter(0, 3);
  return (
    <div>
      Counter : {count}
      <button onClick={() => increment()}>+</button>
      <button onClick={() => decrement()}>-</button>
      <button onClick={() => reset()}>Reset</button>
    </div>
  );
}

export default DemoUseCounter;
