import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import OneItem from "../../OneItem";

interface PayloadModify {
  newText: string;
  indexOftask: number;
}

interface TodoList {
  list: OneItem[];
}
const initialState: TodoList = {
  list : [],
}

const todoListSlice = createSlice({
  name: "todoList",
  initialState,

  reducers: {
    addItem(state, action: PayloadAction<OneItem>) {
      // it's okay to do this because immer makes it immutable
      // under the hood
      state.list.push(action.payload);
    },

    deleteItem(state) {
      state.list = state.list.filter((item: OneItem) => !item.deleted);
    },

    markDeleted(state, action: PayloadAction<number>) {
      state.list[action.payload].deleted = true;
    },

    markFinish(state, action: PayloadAction<number>) {
      state.list[action.payload].finished =
        !state.list[action.payload].finished;
    },

    changeItem(state, action: PayloadAction<PayloadModify>) {
      state.list[action.payload.indexOftask].text = action.payload.newText;
    },

    resetTodoList(state) {
      state.list = [];
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
