import React, { useLayoutEffect, useRef, useState } from "react";

function DemoUseLayoutEffect() {
  const [show, setShow] = useState(false);
  const popupRef = useRef();

  useLayoutEffect(() => {
    console.log("Layout");
    if (popupRef.current == null) {
      return;
    }
    popupRef.current.style.marginTop = "300px";
  }, [show]);

  console.log("Here");

  return (
    <div>
      <button onClick={() => setShow((prev) => !prev)}>Click Here!</button>
      {show && <p ref={popupRef}>This is a Popup</p>}
    </div>
  );
}

export default DemoUseLayoutEffect;
