import { decrement, increment } from '../../../reduxStore/counterSlice';
import { useAppSelector } from '../../../reduxStore/hooks';
import React from 'react';
import { useDispatch } from 'react-redux';

export const Counter = () => {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
    </section>
  );
};
