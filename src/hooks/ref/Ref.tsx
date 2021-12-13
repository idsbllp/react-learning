import React, {
  forwardRef,
  useState,
  Ref,
  ForwardRefExoticComponent,
  RefAttributes,
  useRef,
  PropsWithoutRef,
  useImperativeHandle,
} from 'react';

// tslint:disable-next-line: max-line-length
export type getRef<T> = T extends ForwardRefExoticComponent< PropsWithoutRef<infer P> & RefAttributes<infer T2>> ? T2 : never;

export const Child = forwardRef(
  (props: {
    defaultCount: number,
  }, ref: Ref<{
  updateCount(count: number): void;
}>) => {
  const [count, setCount] = useState(props.defaultCount);
  useImperativeHandle(ref, () => ({
    updateCount(count: number) {
      setCount(count);
    },
  }));
  return (
    <div>count: {count}</div>
  );
});
export const Parent = () => {
  const childRef = useRef<getRef<typeof Child>>(null);
  return (
    <div>
    <div onClick={() => {
      childRef.current?.updateCount(10);
    }}>update child</div>
    <Child defaultCount={1} ref={childRef}/>
    </div>
  );
};

