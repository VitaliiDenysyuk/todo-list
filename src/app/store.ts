
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counters/counter-slice';
import modalReduscer from '../features/modal/modal-slice';


export const store = configureStore({
  reducer: {
    counters: counterReducer,
    modal: modalReduscer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;