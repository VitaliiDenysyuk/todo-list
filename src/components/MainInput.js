import React from "react";
import filterPng from "../img/filter.png";
import noFilterPng from "../img/nofilter.png"
import ButtonWithImage from "./ButtonWithImage.style";
import { getRandomColor } from "./help/general";

const MainInput = ({
    className,
    todoList,
    setTodoList,
    inputText,
    setInputText,
    counter,
    setCounter,
    filter,
    setFilter
}) => {

    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    }
    const buttonAddClick = () => {
        if (inputText !== '') {
            setTodoList([...todoList, {
                text: inputText,
                finished: false,
                key: Date.now(),
                deleted: false,
                textColor: getRandomColor()
            }])
            setInputText('');
            setCounter({ ...counter, created: ++counter.created })
        }
    }
    const buttonFilterClick = () => {
        setFilter(!filter);
    }    
    const onKeyDownHandler = (e) => {
        if (e.key === 'Enter') {
            buttonAddClick();
        }
    }
    return (
        <div className={className}>
            <input onChange={inputTextHandler} onKeyDown={onKeyDownHandler} type="text" value={inputText} ></input>
            <button onClick={buttonAddClick}>+</button>
            <ButtonWithImage backgroundurl={filter ? noFilterPng:filterPng} onClick={buttonFilterClick}></ButtonWithImage>
        </div>
    )
}

export default MainInput;