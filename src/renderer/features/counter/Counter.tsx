import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';

import { decrement, increment } from './counterSlice';

export default function Counter() {
  // The `state` arg is correctly typed as `RootState` already
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  // omit rendering logic
  return (
    <div>
      <div className="text-2xl">{count}</div>
      <button type="button" onClick={() => dispatch(increment())}>
        increment
      </button>
      <button type="button" onClick={() => dispatch(decrement())}>
        decrement
      </button>
    </div>
  );
}
