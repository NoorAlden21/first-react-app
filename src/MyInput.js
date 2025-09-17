import { useState } from "react";
export default function MyInput() {
  const [inputValue, setInputValue] = useState("");
  function inputChangeHandler(event) {
    setInputValue(event.target.value);
  }
  return (
    <div>
      <label>Enter your name:</label>
      <input value={inputValue} onChange={inputChangeHandler}></input>
    </div>
  );
}
