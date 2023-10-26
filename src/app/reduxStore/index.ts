import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './counterSlice';

export const store = configureStore({
  reducer: {
    [counterSlice.name]: counterSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;