
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counters/counter-slice';


export const store = configureStore({
  reducer: {
    counters: counterReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;