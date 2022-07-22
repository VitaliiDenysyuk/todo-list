import React from "react";

import { OneItemListStyled } from "./OneItemList.style";
import OneItem from "../OneItem";

export interface TaskListProps {
  className?: string;
  todoList: any;
  setTodoList: any;
  filter: boolean;
}

const TaskList = ({
  className,
  todoList,
  setTodoList,
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
            textColor={item.textColor}
          />
        ) : undefined
      )}
    </div>
  );
};

export default TaskList;
