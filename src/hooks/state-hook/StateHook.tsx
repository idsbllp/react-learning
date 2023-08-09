import React, { useEffect, useLayoutEffect, useState } from 'react';

export default function StateHook() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount1] = useState(0);

  useLayoutEffect(() => {
    console.log('useLayoutEffect 111111');
    return () => {
      console.log('useLayoutEffect 22222');
    }
  }, [count]);


  useEffect(() => {
    console.log('useEffect 111111');
    return () => {
      console.log('useEffect 22222');
    }
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      {
        count % 2 ? <div> 11111111 </div> : null
      }
      <button onClick={() => setCount1(count + 1)}>
        Click me
      </button>
    </div>
  );
}

