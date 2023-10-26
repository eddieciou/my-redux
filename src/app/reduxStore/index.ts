import { counterSlice } from './counterSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    [counterSlice.name]: counterSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
