import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from '../../../reduxStore/counterSlice';
import { useAppSelector } from '../../../reduxStore/hooks';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

export const Counter = () => {
  const [incrementAmount, setIncrementAmount] = useState<number | ''>(0);

  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };

  return (
    <section className="flex flex-col gap-6 items-center">
      <p className="text-[100px] text-center">{count}</p>
      <div className="flex justify-center gap-4">
        <button
          className="text-[50px] bg-gray-100  w-28 h-28 border border-black"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <button
          className="text-[50px] bg-gray-100  w-28 h-28 border border-black"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      <input
        type="text"
        className="border border-black text-center w-28 h-28 text-3xl"
        value={incrementAmount}
        onChange={(e) => {
          const value = e.target.value;
          if (value === '') {
            setIncrementAmount(0);
          } else {
            const numberValue = Number(value);
            if (!Number.isNaN(numberValue)) {
              setIncrementAmount(numberValue);
            }
          }
        }}
      />

      <div className="flex justify-center gap-6">
        <button
          className="text-3xl bg-gray-100 border border-black p-5"
          onClick={() => dispatch(incrementByAmount(incrementAmount))}
        >
          Add Amount
        </button>
        <button
          className="text-3xl bg-gray-100 border border-black p-5"
          onClick={resetAll}
        >
          Reset
        </button>
      </div>
    </section>
  );
};
