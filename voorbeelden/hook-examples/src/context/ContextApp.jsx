import React, { createContext } from "react";

import Main from "./components/Main";

export const UserContext = createContext();

// Demonstratie useContext in child components
function ContextApp() {
  return (
    <UserContext.Provider value={"Seth met context"}>
      <div className="App">
        <header className="App-header">
            <Main />
        </header>
      </div>
    </UserContext.Provider>
  );
}

export default ContextApp;
