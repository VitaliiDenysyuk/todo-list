import React, { useEffect, useState } from "react";

const MainInput = ({
    todoList,
    setTodoList,
    inputText,
    setInputText,
    counter,
    setCounter
}) => {

    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    }
    const buttonAddClick = () => {
        if (inputText !== '') {
            setTodoList([...todoList, {
                text:inputText,
                finished:false,
                key:Date.now()
            }])
            setInputText('');
            setCounter({...counter, created:++counter.created})
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
            <button className="ButtonAdd" onClick={buttonAddClick}>+</button>
        </div>
    )
}

export default MainInput;