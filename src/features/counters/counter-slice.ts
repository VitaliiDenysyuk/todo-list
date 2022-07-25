import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Counter from "../../Counter";
import { getStorageValue, setStorageValue } from "../../useLocalStorage";

const resetState: Counter = {
  created: 0,
  updated: 0,
  deleted: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: getStorageValue("counter", resetState),
  reducers: {
    incrementCreated(state, action: PayloadAction<number>) {
      // it's okay to do this because immer makes it immutable
      // under the hood
      state.created += action.payload;
      setStorageValue("counter", state);
    },
    incrementUpdated(state, action: PayloadAction<number>) {
      // it's okay to do this because immer makes it immutable
      // under the hood
      state.updated += action.payload;
      setStorageValue("counter", state);
    },
    incrementDeleted(state, action: PayloadAction<number>) {
      // it's okay to do this because immer makes it immutable
      // under the hood
      state.deleted += action.payload;
      setStorageValue("counter", state);
    },

    resetCounter(state) {
      console.log(resetState);
      console.log(state);
      (Object.keys(resetState) as (keyof typeof resetState)[]).forEach(
        (key) => (state[key] = resetState[key])
      );
      setStorageValue("counter", state);
    },
  },
});

export const { incrementCreated, incrementDeleted, incrementUpdated, resetCounter } =
  counterSlice.actions;
export default counterSlice.reducer;
