import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Counter from "../../Counter";

const resetState: Counter = {
  created: 0,
  updated: 0,
  deleted: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: resetState,

  reducers: {
    incrementCreated(state, action: PayloadAction<number>) {
      // it's okay to do this because immer makes it immutable
      // under the hood
      state.created += action.payload;
    },

    incrementUpdated(state, action: PayloadAction<number>) {
      state.updated += action.payload;
    },

    incrementDeleted(state, action: PayloadAction<number>) {
      state.deleted += action.payload;
    },

    resetCounter(state) {
      (Object.keys(resetState) as (keyof typeof resetState)[]).forEach(
        (key) => (state[key] = resetState[key])
      );
    },
  },
});

export const {
  incrementCreated,
  incrementDeleted,
  incrementUpdated,
  resetCounter,
} = counterSlice.actions;

export default counterSlice.reducer;
