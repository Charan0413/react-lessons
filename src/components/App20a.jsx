import React, { useContext } from "react";
import { AppContext } from "./AppContext"; // if moved

export default function App20a() {
  const { count, setCount } = useContext(AppContext);

  return (
    <div>
      <h3>App20a</h3>
      <p>{count}</p>
      <p>
        <button onClick={() => setCount(count + 1)}>Update Count</button>
      </p>
    </div>
  );
}
