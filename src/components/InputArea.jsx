import React, { useState } from "react";

function InputArea(props) {
  var [inputText, setInputtext] = useState("");
  function handleChange(e) {
    var value = e.target.value;
    setInputtext(value);
  }
  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={inputText} />
      <button
        onClick={() => {
          props.addItem(inputText);
          setInputtext("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
