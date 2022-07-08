import React, { useEffect, useState } from "react";

const TaskList = ({
    todoList,
    setTodoList
}) => {
    return (
        <div className="ListInputSection">
            {todoList.map((item) =>
                <div className="ListInputBlock">
                    <input value={item} type="text" className="ListInput"></input>
                    <button className="ButtonEdit"></button>
                    <button className="ButtonDelete"></button>
                    <button className="ButtonFinish"></button>
                </div>
            )}
        </div>
    )
}

export default TaskList;