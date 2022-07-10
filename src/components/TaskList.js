import React from "react";

import OneItemList from "./OneItemList";

const TaskList = ({
    todoList,
    setTodoList,
    counter,
    setCounter,
    filter
}) => {
    return (
        <div className="ListInputSection">
            {todoList.map((item, index) =>
                !filter || !item.finished ?
                    <OneItemList
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