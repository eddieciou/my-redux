import React from 'react';
import { useAppSelector } from '../../../reduxStore/hooks';
import { useDispatch } from 'react-redux';
import { increment, decrement } from '../../../reduxStore/counterSlice';

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
