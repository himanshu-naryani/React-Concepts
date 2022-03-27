import React, { useState, useEffect, useRef } from "react";

function TimerUseRef() {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((prevVal) => prevVal + 1);
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);
  return (
    <div>
      <h4>Timer: {timer}</h4>
      <button onClick={() => clearInterval(intervalRef.current)}>
        Timer Use Ref
      </button>
    </div>
  );
}

export default TimerUseRef;
