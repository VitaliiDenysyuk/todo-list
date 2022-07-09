import React, { useEffect, useState } from "react";

const OneItemList = ({
    innerKey,
    indexOftask,
    text,
    finished,
    todoList,
    setTodoList
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
            setTimeout(() => deleteFinish(), 900);
        }
    }, [onDelete])

    const deleteHandler = (e) => {
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
        <div key={"tl" + innerKey + "div"} className="ListInputBlock">
            <input
                key={"tl" + innerKey+ "input"}
                value={newText}
                type="text"
                readOnly={!onEdit}
                onChange={onChangeHandler}
                onKeyDown={onKeyDownHandler}
                className={`ListInput ${finished ? 'Crossed' : ''}  ${onDelete ? 'BeforeDelete' : ''} `}
            ></input>

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