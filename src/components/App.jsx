import React, { useState } from "react";

function App() {
  var [name, setName] = useState("");
  var [headingText, setHeadingText] = useState("");
  var [isMouseOver, setMouseOver] = useState(false);
  function handelMouseOver() {
    return setMouseOver(true);
  }
  function handelMouseOut() {
    return setMouseOver(false);
  }
  function handelChange(event) {
    setName(event.target.value);
  }
  function handelClick(event) {
    setHeadingText(name);
  }
  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <input
        type="text"
        placeholder="What's your name?"
        onChange={handelChange}
        value={name}
      />
      <button
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onClick={handelClick}
        onMouseOver={handelMouseOver}
        onMouseOut={handelMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
