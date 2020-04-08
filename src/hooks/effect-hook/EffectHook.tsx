import React, { useEffect, useState } from 'react';

interface IChildProps {
  count: number;
}

const Child: React.FC<IChildProps> = props => {
  useEffect(() => {
    const handleClick = () => {
      console.log('EffectHook Click');
    };

    document.body.addEventListener('click', handleClick);

    return () => {
      document.body.removeEventListener('click', handleClick);
    };
  }, [props.count]);

  return (
    <div>I will hide by click {5 - props.count} times</div>
  );
};

const StateHook: React.FC = () => {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <div>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
      {
        count < 5 ? (
          <Child count={count} />
        ) : (
          <button onClick={() => setCount(0)}>
            restore count
          </button>
        )
      }
    </div>
  );
};

export default StateHook;
