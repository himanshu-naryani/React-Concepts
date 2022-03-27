import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <>
      <h2>{props.name}</h2>
      <input ref={ref} type="text" />
    </>
  );
});
export default Input;
