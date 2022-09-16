import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="contain">
      <h1>{count}</h1>
      <button
        className="btn btn-warning me-5"
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
      <button className="btn btn-warning" onClick={() => setCount(count - 1)}>
        -
      </button>
    </div>
  );
}

export default App;
