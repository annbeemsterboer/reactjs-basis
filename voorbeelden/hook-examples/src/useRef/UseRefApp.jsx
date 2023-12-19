import React, { useRef } from "react";

// Demonstratie input focus, evt vervolg met on render focus
function UseRefApp() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  inputRef && inputRef.current && inputRef.current.focus();

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <input type="text" ref={inputRef} />
          {/* <button onClick={handleClick}>Focus Input</button> */}
        </div>
      </header>
    </div>
  );
}

export default UseRefApp;