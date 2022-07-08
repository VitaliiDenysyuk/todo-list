import React, { useEffect, useState } from "react";

const MainInput = ({
    todoList,
    setTodoList,
    inputText,
    setInputText
}) => {

    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    }
    const buttonAddClick = () => {
        if (inputText !== '') {
            setTodoList([...todoList, inputText])
            setInputText('')
        }
    }
    const onKeyDownHandler = (e) => {
        if (e.key === 'Enter') {
            buttonAddClick();
        }
    }
    return (
        <div className="MainInputBlock">
            <input onChange={inputTextHandler} onKeyDown={onKeyDownHandler} className="MainInput" type="text" value={inputText} ></input>
            <button className="ButtonAdd">+</button>
        </div>
    )
}

export default MainInput;