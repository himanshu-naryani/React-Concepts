import React, { useState } from "react";
import useDocumentTitle from "./useDocumentTitle";

function DemoDocumentTitle() {
  const [count, setCount] = useState(0);

  useDocumentTitle(count);

  return (
    <div>
      <button onClick={() => setCount(() => count + 1)}>Click Here!</button>
    </div>
  );
}

export default DemoDocumentTitle;
