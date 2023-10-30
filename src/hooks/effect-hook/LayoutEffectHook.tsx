import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

function LayoutEffectHook() {
  const [count, forceUpdate] = useState(0);
  const renderedCountRef = useRef(0);
  useEffect(() => {
    const renderedCount = renderedCountRef.current;
    console.log(`App effect 1111: ${renderedCountRef.current}`);
    return () => {
      console.log(
        // 注意这里 renderedCount 和 renderedCountRef 不同之处
        `App effect 1111 dispose ${renderedCount} -> ${renderedCountRef.current}`
      );
    };
  });
  useLayoutEffect(() => {
    console.log(`App layoutEffect: ${renderedCountRef.current}`);
    renderedCountRef.current++;
    return () => {
      console.log(`App layoutEffect dispose`);
    };
  });
  useEffect(() => {
    console.log(`App effect 2222: ${renderedCountRef.current}`);
    return () => {
      console.log(`App effect 2222 dispose`);
    };
  });
  return (
    <>
      {/* <Child /> */}
      <button onClick={() => forceUpdate(count+1)}>forceUpdate</button>
    </>
  );
}

function Child() {
  const renderedCountRef = useRef(0);
  useEffect(() => {
    const renderedCount = renderedCountRef.current;
    console.log(`Child effect aaaaa: ${renderedCountRef.current}`);
    return () => {
      console.log(
        `Child effect aaaaa dispose ${renderedCount} -> ${renderedCountRef.current}`
      );
    };
  });
  useLayoutEffect(() => {
    console.log(`Child layoutEffect: ${renderedCountRef.current}`);
    renderedCountRef.current++;
    return () => {
      console.log(`Child layoutEffect dispose`);
    };
  });
  useEffect(() => {
    console.log(`Child effect bbbbbb: ${renderedCountRef.current}`);
    return () => {
      console.log(`Child effect bbbbbb dispose`);
    };
  });
  return <h1>Hello world</h1>;
}

export default LayoutEffectHook;
