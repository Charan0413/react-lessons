import React, { useState } from "react";
import App20a from "./App20a";
import App20b from "./App20b";
import AppContext from "./AppContext"; // Import the context from its own file

export default function App20() {
  const [count, setCount] = useState(0);

  return (
    <AppContext.Provider value={{ count, setCount }}>
      <div>
        <h1>App20</h1>
        <h2>useContext hook - sharing variables across components</h2>
        <p>{count}</p>
        <p>
          <button onClick={() => setCount(count + 1)}>Update Count</button>
        </p>
        <hr />
        <App20a />
        <hr />
        <App20b />
      </div>
    </AppContext.Provider>
  );
}
