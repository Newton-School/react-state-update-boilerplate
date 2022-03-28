import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const clickHandler = () => {
    setCount(prevCount =>  (prevCount+ 1)*(prevCount+1));
  }
  return (
    <div>
      <h3>Current Count:</h3>
      <h2 id="count">{count}</h2>
      <p>Count should be initially set to 0, and increment as per the function (prevCount+ 1)*(prevCount+1)</p>
      <button id="btn" onClick={clickHandler}>
        Click me to increment
      </button>
    </div>
  );
}

export default App;