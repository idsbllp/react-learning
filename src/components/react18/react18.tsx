import React, { Component, Children, PropsWithChildren, useState } from 'react';
import { sleep } from '$utils/timer';
import { flushSync } from 'react-dom';

interface IState {
  number: number;
}

const AutomaticBatching: React.FC<PropsWithChildren> = props => {
  console.log('自动批处理 组件渲染了！');
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <div
      onClick={async () => {
        await sleep(200);
        setCount1(count => count + 1);
        setCount2(count => count + 1);
      }}
    >
      <h4>自动批处理</h4>
      <div>count1： {count1}</div>
      <div>count2： {count2}</div>
    </div>
  )
};

const FlushSync: React.FC<PropsWithChildren> = props => {
  console.log('解除批处理 FlushSync 组件渲染了！');
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <div
      onClick={async () => {
        await sleep(200);
        flushSync(() => {
          setCount1(count => count + 1);
        });
        setCount2(count => count + 1);
      }}
    >
      <h4>解除批处理 FlushSync</h4>
      <div>count1： {count1}</div>
      <div>count2： {count2}</div>
    </div>
  )
};

const SuspenseComponent: React.FC<PropsWithChildren> = props => {
  console.log('解除批处理 FlushSync 组件渲染了！');
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <div
      onClick={async () => {
        await sleep(200);
        flushSync(() => {
          setCount1(count => count + 1);
        });
        setCount2(count => count + 1);
      }}
    >
      <h4>解除批处理 FlushSync</h4>
      <div>count1： {count1}</div>
      <div>count2： {count2}</div>
    </div>
  )
};

const React18: React.FC = () => {
  return (
    <>
      <AutomaticBatching />
      <FlushSync />
      <SuspenseComponent />
    </>
  )
};

export default React18;
