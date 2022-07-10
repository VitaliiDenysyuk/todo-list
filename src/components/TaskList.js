import React from "react";

import {OneItemListStyled} from "./OneItemList.style";

const TaskList = ({
    className,
    todoList,
    setTodoList,
    counter,
    setCounter,
    filter
}) => {
    return (
        <div className={className}>
            {todoList.map((item, index) =>
                !filter || !item.finished ?
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
                    />
                    : undefined
            )}
        </div>
    )
}

export default TaskList;