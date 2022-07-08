import React, { useState } from "react";

const OneItemList = ({
    index,
    text,
    finished,
    todoList,
    setTodoList
}) => {
    const [onEdit, setOnEdit] = useState(false);
    const [newText, setNewText] = useState(text);
    const deleteHandler = (e) => {
        setTodoList(todoList.filter((item, curIndex) => index !== curIndex))
    }
    const editHandler = (e) => {
        if (onEdit&&newText!==text) {
            setTodoList(todoList.map((item, curIndex) =>
                index === curIndex ? { ...item, text: newText } : item));
        }
        setOnEdit(!onEdit);
    }
    const onChangeHandler = (e) => {
        setNewText(e.target.value)
    }
    const finishHandler = (e) => {
        setTodoList(todoList.map((item, curIndex) =>
            index === curIndex ? { ...item, finished: !item.finished } : item));
    }
    return (
        <div key={"tl" + index + "div"} className="ListInputBlock">
            <input
                key={"tl" + index + "input"}
                value={newText}
                type="text"
                readOnly={!onEdit}
                onChange={onChangeHandler}
                className={`ListInput ${finished ? 'Crossed' : ''}`}
            ></input>

            <button
                key={"tl" + index + "edit"}
                onClick={editHandler}
                className={`${onEdit ? 'ButtonSave' : 'ButtonEdit'}`}
            ></button>
            <button
                key={"tl" + index + "delete"}
                onClick={deleteHandler}
                className="ButtonDelete"
            ></button>
            <button
                key={"tl" + index + "finish"}
                onClick={finishHandler}
                className="ButtonFinish"
            ></button>
        </div>
    )
}

export default OneItemList;