import React, { useEffect, useRef } from "react";

function DemoUseRef() {
  const inputRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      inputRef.current.blur();
    }, 5000);
  });

  return (
    <div>
      <input ref={inputRef} type="text" />
    </div>
  );
}

export default DemoUseRef;
