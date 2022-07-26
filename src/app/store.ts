
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counters/counter-slice';
import modalReducer from '../features/modal/modal-slice';
import todoListReducer from '../features/todoList/todoList-slice';
import inputTextReducer from '../features/inputText/inputText-slice';
import filterReducer from '../features/filter/filter-slice';

export const store = configureStore({
  reducer: {
    counters: counterReducer,
    modal: modalReducer,
    todoList: todoListReducer,
    inputText: inputTextReducer,
    filter: filterReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;