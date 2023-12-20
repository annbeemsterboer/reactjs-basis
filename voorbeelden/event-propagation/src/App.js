import React from "react"
import "./App.css"

function App() {
  const clickHandler = (e, element, stopPropagation = false) => {
    if (stopPropagation) {
      e.stopPropagation()
    }
    e.preventDefault()
    console.info('gebruiker klinkt op link')
    window.location.assign(e.target.href)

    console.info(element)
  }

  return (
    <div className="App">
      <header className="App-header">
        <div onClick={(e) => clickHandler(e, "div-1")}>
          <span>1</span>
          <div onClick={(e) => clickHandler(e, "div-2", true)}>
            <span>2</span>
            <button href="" onClick={(e) => clickHandler(e, "button")}>
              button
            </button>
            <a href="https://google.com" onClick={(e) => clickHandler(e, "a")}>
              link
            </a>
          </div>
        </div>
      </header>
    </div>
  )
}

export default App
