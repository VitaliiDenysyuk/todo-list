import React, {
  useEffect,
  useState,
  MouseEvent,
  ChangeEvent,
  KeyboardEvent,
} from "react";
import { InputWithEffectStyled } from "./OneItemList.style";
import ButtonWithImage from "./ButtonWithImage.style";

import savePng from "../img/save.png";
import editPng from "../img/pencil.png";
import deletePng from "../img/trash.png";
import finishPng from "../img/check.png";
import pinnedPng from "../img/pinned.png";

import Counter from "../Counter";
import OneItem from "../OneItem";

export interface OneItemListProps {
  className?: string;
  innerKey: string;
  indexOftask: number;
  text: string;
  finished: boolean;
  todoList: any;
  setTodoList: any;
  counter: Counter;
  setCounter: React.Dispatch<React.SetStateAction<Counter>>;
  textColor: string;
}

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
  textColor,
}: OneItemListProps) => {
  const [onEdit, setOnEdit] = useState(false);
  const [newText, setNewText] = useState(text);
  const [startedDelete, setstartedDelete] = useState(false);

  useEffect(() => {
    setNewText(newText);
  }, [todoList, setTodoList]);

  useEffect(() => {
    if (startedDelete) {
      //waited finish effect delete css
      setTimeout(() => deleteFinish(), 400);
    }
  }, [startedDelete]);

  const deleteHandler = (e: MouseEvent<HTMLButtonElement>) => {
    setCounter({ ...counter, deleted: ++counter.deleted });
    setstartedDelete(true);
    setTodoList(
      todoList.map((item: OneItem, curIndex: number) =>
        indexOftask === curIndex ? { ...item, deleted: true } : item
      )
    );
  };

  const deleteFinish = () => {
    //can be not one marked delete
    setTodoList(todoList.filter((item:OneItem) => !item.deleted));
  };

  const editHandler = (e?: MouseEvent<HTMLButtonElement>) => {
    if (onEdit && newText !== text) {
      setTodoList(
        todoList.map((item: OneItem, curIndex: number) =>
          indexOftask === curIndex ? { ...item, text: newText } : item
        )
      );
      setCounter({ ...counter, updated: ++counter.updated });
    }
    setOnEdit(!onEdit);
  };
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNewText(e.target.value);
  };
  const finishHandler = (e: MouseEvent<HTMLButtonElement>) => {
    setTodoList(
      todoList.map((item:OneItem, curIndex: number) =>
        indexOftask === curIndex ? { ...item, finished: !item.finished } : item
      )
    );
  };
  const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && onEdit) {
      editHandler(undefined);
    }
  };
  return (
    <div key={"tl" + innerKey + "div"} className={className}>
      <InputWithEffectStyled
        key={"tl" + innerKey + "input"}
        value={newText}
        type="text"
        readOnly={!onEdit}
        onChange={onChangeHandler}
        onKeyDown={onKeyDownHandler}
        finished={finished}
        startedDelete={startedDelete}
        textColor={textColor}
      ></InputWithEffectStyled>

      <ButtonWithImage
        key={"tl" + innerKey + "edit"}
        onClick={editHandler}
        backgroundurl={onEdit ? savePng : editPng}
      ></ButtonWithImage>
      <ButtonWithImage
        key={"tl" + innerKey + "delete"}
        onClick={deleteHandler}
        backgroundurl={deletePng}
      ></ButtonWithImage>
      <ButtonWithImage
        key={"tl" + innerKey + "finish"}
        onClick={finishHandler}
        backgroundurl={finished ? pinnedPng : finishPng}
      ></ButtonWithImage>
    </div>
  );
};

export default OneItemList;
