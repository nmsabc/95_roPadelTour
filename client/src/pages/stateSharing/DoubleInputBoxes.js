import React from "react";
import { useState } from "react";

// Problem
// These two inputs are independent.
//  Make them stay in sync:
//  editing one input should update the other
//  input with the same text, and vice versa.

function DoubleInputBoxes() {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }
  return (
    <div className="simple-panel">
      <Input label="1_st input  " text={text} onChange={handleChange} />
      <Input label="2_nd input  " text={text} onChange={handleChange} />
    </div>
  );
}

function Input({ label, text, onChange }) {
  // stage 2 - add the props to the list of props
  // const [text, setText] = useState(''); -- stage 1 - remove state from child

  return (
    <label>
      {label}
      {" ..::.. "}
      <input value={text} onChange={onChange} />
    </label>
  );
}

export default DoubleInputBoxes;
