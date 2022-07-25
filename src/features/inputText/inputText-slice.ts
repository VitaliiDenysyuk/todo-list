import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InputText {
  value: string;
}

const initialState: InputText = {
  value: "",
};

const inputTextSlice = createSlice({
  name: "inputText",
  initialState,

  reducers: {
    setInputText(state, action: PayloadAction<string>) {
      // it's okay to do this because immer makes it immutable
      // under the hood
      state.value = action.payload;
    },

    cleanInputText(state) {
      state.value = "";
    },
  },
});

export const { setInputText, cleanInputText } = inputTextSlice.actions;

export default inputTextSlice.reducer;
