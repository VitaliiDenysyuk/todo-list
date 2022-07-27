import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterReducer from "../features/counters/counter-slice";
import modalReducer from "../features/modal/modal-slice";
import todoListReducer from "../features/todoList/todoList-slice";
import inputTextReducer from "../features/inputText/inputText-slice";
import filterReducer from "../features/filter/filter-slice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ['counters','todoList']
};

const rootReducer = combineReducers({
  counters: counterReducer,
  modal: modalReducer,
  todoList: todoListReducer,
  inputText: inputTextReducer,
  filter: filterReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
