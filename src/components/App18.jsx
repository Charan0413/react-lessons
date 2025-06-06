import React, { useMemo, useState } from "react";

export default function App18() {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(10);

  const result = useMemo(() => {
    let i;
    for (i = 1; i < flag ** 2; i++) {
      // Simulate computation
    }
    console.log("F1 function called");
    return i;
  }, [flag]);

  return (
    <div>
      <h1>App18</h1>
      <h2>useMemo hook</h2>
      <p>
        <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      </p>
      <p>
        <button onClick={() => setFlag(flag + 1)}>Flag: {flag}</button>
      </p>
      <hr />
      <p>Result: {result}</p>
    </div>
  );
}
