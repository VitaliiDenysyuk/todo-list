import { createSlice } from "@reduxjs/toolkit";

interface FilterState {
  value: boolean;
}

const initialState: FilterState = {
  value: false,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,

  reducers: {
    setFiltered(state) {
      // it's okay to do this because immer makes it immutable
      // under the hood
      state.value = true;
    },

    setNoFiltered(state) {
      state.value = false;
    },
  },
});

export const { setFiltered, setNoFiltered } = filterSlice.actions;

export default filterSlice.reducer;