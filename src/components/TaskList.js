import React from "react";

import OneItemList from "./OneItemList";

const TaskList = ({
    todoList,
    setTodoList
}) => {
    return (
        <div className="ListInputSection">
            {todoList.map((item, index) =>
                <OneItemList
                    key={"oneItemList" + item.key}
                    innerKey = {item.key}
                    indexOftask={index}
                    text={item.text}
                    finished={item.finished}
                    todoList={todoList}
                    setTodoList={setTodoList}
                />
            )}
        </div>
    )
}

export default TaskList;