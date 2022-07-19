import React from "react";

import { OneItemListStyled } from "./OneItemList.style";
import ICounter from "../Counter";

export interface TaskListProps {
  className?: string;
  todoList: any;
  setTodoList: any;
  counter: ICounter;
  setCounter: React.Dispatch<React.SetStateAction<ICounter>>;
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
      {todoList.map((item, index) =>
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
