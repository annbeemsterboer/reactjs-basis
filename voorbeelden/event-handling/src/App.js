import React from "react";
import "./App.css";

function App() {
  const clickHandler = (e, element, stopPropagation = false) => {
    if (stopPropagation) {
      e.stopPropagation();
    }

    console.info(element);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div onClick={(e) => clickHandler(e, "div-1")}>
          <span>1</span>
          <div onClick={(e) => clickHandler(e, "div-2")}>
            <span>2</span>
            <button href="" onClick={(e) => clickHandler(e, "button")}>
              button
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
