import React, { useState } from "react";

const App = () => {
  const clickHandler = () => {};
  return (
    <div>
      <h3>Current Count:</h3>
      {/* Add a h2 tag here with id as "count " and inner text as count variable */}

      <p>
        Count should be initially set to 0, and increment as per the function
        (prevCount+ 1)*(prevCount+1)
      </p>
      <button id="btn" onClick={clickHandler}>
        Click me to increment
      </button>
    </div>
  );
};

export default App;
