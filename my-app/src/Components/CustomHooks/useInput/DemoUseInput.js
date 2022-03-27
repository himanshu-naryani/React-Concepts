import React from "react";
import useInput from "./useInput";

function DemoUseInput() {
  const [firstName, handleFirstName, resetFirstName] = useInput("");
  const [secondName, handleSecondName, resetSecondName] = useInput("");

  const submitHandler = (e) => {
    e.preventDefault();
    alert(`Hello, ${firstName} ${secondName}`);
    resetFirstName();
    resetSecondName();
  };

  return (
    <div>
      <form onSubmit={(e) => submitHandler(e)}>
        <div>
          <label>First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => {
              handleFirstName(e);
            }}
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            type=" text"
            value={secondName}
            onChange={(e) => {
              handleSecondName(e);
            }}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default DemoUseInput;
