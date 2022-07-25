import { createSlice } from "@reduxjs/toolkit";

interface ModalState {
  value: boolean;
}

const initialState: ModalState = {
  value: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModalIsOpen(state) {
      // it's okay to do this because immer makes it immutable
      // under the hood
      state.value = true;
    },
    setModalIsClosed(state) {
      state.value = false;
    },
  },
});

export const { setModalIsOpen, setModalIsClosed } = modalSlice.actions;
export default modalSlice.reducer;
