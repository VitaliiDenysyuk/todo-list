import React, { useEffect, useState } from "react";
import { InputWithEffectStyled } from "./OneItemList.style";

const OneItemList = ({
    className,
    innerKey,
    indexOftask,
    text,
    finished,
    todoList,
    setTodoList,
    counter,
    setCounter,
}) => {

    const [onEdit, setOnEdit] = useState(false);
    const [newText, setNewText] = useState(text);
    const [onDelete, setOnDelete] = useState(false);

    useEffect(() => {
            setNewText(newText)
    }, [todoList, setTodoList])

    useEffect(() => {
        if (onDelete) {
            //waited finish effect delete css
            setTimeout(() => deleteFinish(), 400);
        }
    }, [onDelete])

    const deleteHandler = (e) => {
        setCounter({ ...counter, deleted: ++counter.deleted })
        console.log(indexOftask);
        setOnDelete(true);
        setTodoList(todoList.map((item, curIndex) =>
        indexOftask === curIndex ? { ...item, deleted: true } : item));   
    }

    const deleteFinish = () => {
        //can be not one marked delete
        setTodoList(todoList.filter((item) => (!item.deleted)))
    }

    const editHandler = (e) => {
        if (onEdit && newText !== text) {
            setTodoList(todoList.map((item, curIndex) =>
                indexOftask === curIndex ? { ...item, text: newText } : item));
            setCounter({ ...counter, updated: ++counter.updated })
        }
        setOnEdit(!onEdit);
    }
    const onChangeHandler = (e) => {
        setNewText(e.target.value)
    }
    const finishHandler = (e) => {
        setTodoList(todoList.map((item, curIndex) =>
            indexOftask === curIndex ? { ...item, finished: !item.finished } : item));
    }
    const onKeyDownHandler = (e) => {
        if (e.key === 'Enter' && onEdit) {
            editHandler(undefined);
        }
    }
    return (
        <div key={"tl" + innerKey + "div"} className={className}>
            <InputWithEffectStyled
                key={"tl" + innerKey+ "input"}
                value={newText}
                type="text"
                readOnly={!onEdit}
                onChange={onChangeHandler}
                onKeyDown={onKeyDownHandler}
                finished={finished}
                onDelete={onDelete}
            ></InputWithEffectStyled>

            <button
                key={"tl" + innerKey + "edit"}
                onClick={editHandler}
                className={`${onEdit ? 'ButtonSave' : 'ButtonEdit'}`}
            ></button>
            <button
                key={"tl" + innerKey + "delete"}
                onClick={deleteHandler}
                className="ButtonDelete"
            ></button>
            <button
                key={"tl" + innerKey + "finish"}
                onClick={finishHandler}
                className={`${finished ? 'ButtonPinned' : 'ButtonFinish'}`}
            ></button>
        </div>
    )
}

export default OneItemList;