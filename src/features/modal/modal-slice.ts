import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
  value: boolean;
  kind: string;
}

const initialState: ModalState = {
  value: false,
  kind: "",
};

const modalSlice = createSlice({
  name: "modal",
  initialState,

  reducers: {
    setModalIsOpen(state, action: PayloadAction<string>) {
      // it's okay to do this because immer makes it immutable
      // under the hood
      state.value = true;
      state.kind = action.payload;
    },

    setModalIsClosed(state) {
      state.value = false;
      state.kind = "";
    },
  },
});

export const { setModalIsOpen, setModalIsClosed } = modalSlice.actions;

export default modalSlice.reducer;
