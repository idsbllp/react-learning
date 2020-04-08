import React, { useState } from 'react';

export default function StateHook() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount1] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount1(count + 1)}>
        Click me
      </button>
    </div>
  );
}

