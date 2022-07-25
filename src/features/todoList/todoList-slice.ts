import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import OneItem from "../../OneItem";
import { getStorageValue, setStorageValue } from "../../useLocalStorage";

interface PayloadModify {
  newText: string;
  indexOftask: number;
}

const todoListSlice = createSlice({
  name: "todoList",
  initialState: { list: getStorageValue("todoList", []) },
  reducers: {
    addItem(state, action: PayloadAction<OneItem>) {
      // it's okay to do this because immer makes it immutable
      // under the hood
      //state = {...state, newItem};
      state.list.push(action.payload);
      setStorageValue("todoList", state.list);
    },
    deleteItem(state) {
      // it's okay to do this because immer makes it immutable
      // under the hood
      state.list = state.list.filter((item: OneItem) => !item.deleted);

      setStorageValue("todoList", state.list);
    },
    markDeleted(state, action: PayloadAction<number>) {
      // it's okay to do this because immer makes it immutable
      // under the hood
      state.list[action.payload].deleted = true;
      setStorageValue("todoList", state.list);
    },
    markFinish(state, action: PayloadAction<number>) {
      // it's okay to do this because immer makes it immutable
      // under the hood
      state.list[action.payload].finished = !state.list[action.payload].finished;
      setStorageValue("todoList", state.list);
    },
    changeItem(state, action: PayloadAction<PayloadModify>) {
      // it's okay to do this because immer makes it immutable
      // under the hood
      state.list[action.payload.indexOftask].text = action.payload.newText;
      setStorageValue("todoList", state.list);
    },
    resetTodoList(state) {
      state.list = [];
      setStorageValue("todoList", state.list);
    },
  },
});

export const {
  addItem,
  markDeleted,
  deleteItem,
  resetTodoList,
  changeItem,
  markFinish,
} = todoListSlice.actions;
export default todoListSlice.reducer;
