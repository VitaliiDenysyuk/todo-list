import React from "react";

import { OneItemListStyled } from "./OneItemList.style";
import Counter from "../Counter";
import OneItem from "../OneItem";

export interface TaskListProps {
  className?: string;
  todoList: any;
  setTodoList: any;
  counter: Counter;
  setCounter: React.Dispatch<React.SetStateAction<Counter>>;
  filter: boolean;
}

const TaskList = ({
  className,
  todoList,
  setTodoList,
  counter,
  setCounter,
  filter,
}: TaskListProps) => {
  return (
    <div className={className}>
      {todoList.map((item:OneItem, index: number) =>
        !filter || !item.finished ? (
          <OneItemListStyled
            key={"oneItemList" + item.key}
            innerKey={item.key}
            indexOftask={index}
            text={item.text}
            finished={item.finished}
            todoList={todoList}
            setTodoList={setTodoList}
            counter={counter}
            setCounter={setCounter}
            textColor={item.textColor}
          />
        ) : undefined
      )}
    </div>
  );
};

export default TaskList;
