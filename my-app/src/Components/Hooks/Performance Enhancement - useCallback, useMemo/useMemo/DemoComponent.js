import React, { useState, useMemo } from "react";

function DemoComponent() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return count1 % 2 === 0;
  }, [count1]);

  return (
    <div>
      <button onClick={() => setCount1((prevVal) => prevVal + 1)}>
        Count One - {count1}
        <span>{isEven ? " Even" : " Odd"}</span>
      </button>
      <button onClick={() => setCount2((prevVal) => prevVal + 1)}>
        Count Two - {count2}
      </button>
    </div>
  );
}

export default DemoComponent;
