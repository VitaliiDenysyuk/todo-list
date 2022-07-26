import React, { useState } from "react";

import { OneItemListStyled } from "./OneItemList.style";
import OneItem from "../OneItem";
import { useAppSelector } from "../app/hook";

export interface TaskListProps {
  className?: string;
}

const TaskList = ({ className}: TaskListProps) => {
  const [filter, setFilter] = useState(false);
  const todoList = useAppSelector((state) => state.todoList.list);
  return (
    <div className={className}>
      {todoList.map((item: OneItem, index: number) =>
        !filter || !item.finished ? (
          <OneItemListStyled
            key={"oneItemList" + item.key}
            innerKey={item.key}
            indexOftask={index}
            text={item.text}
            finished={item.finished}
            textColor={item.textColor}
          />
        ) : undefined
      )}
    </div>
  );
};

export default TaskList;
