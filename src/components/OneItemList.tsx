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

import { useAppDispatch } from "../app/hook";
import {
  incrementUpdated,
  incrementDeleted,
} from "../features/counters/counter-slice";
import {
  changeItem,
  deleteItem,
  markDeleted,
  markFinish,
} from "../features/todoList/todoList-slice";

export interface OneItemListProps {
  className?: string;
  innerKey: string;
  indexOftask: number;
  text: string;
  finished: boolean;
  textColor: string;
}

const OneItemList = ({
  className,
  innerKey,
  indexOftask,
  text,
  finished,
  textColor,
}: OneItemListProps) => {
  const dispatch = useAppDispatch();
  const [onEdit, setOnEdit] = useState(false);
  const [newText, setNewText] = useState(text);
  const [startedDelete, setstartedDelete] = useState(false);

  useEffect(() => {
    setNewText(newText);
  }, []);

  useEffect(() => {
    if (startedDelete) {
      //waited finish effect delete css
      setTimeout(() => deleteFinish(), 400);
    }
  }, [startedDelete]);

  const deleteHandler = (e: MouseEvent<HTMLButtonElement>) => {
    dispatch(incrementDeleted(1));
    setstartedDelete(true);
    dispatch(markDeleted(indexOftask));
  };

  const deleteFinish = () => {
    //can be not one marked delete
    dispatch(deleteItem());
  };

  const editHandler = (e?: MouseEvent<HTMLButtonElement>) => {
    if (onEdit && newText !== text) {
      dispatch(changeItem({ indexOftask, newText }));
      dispatch(incrementUpdated(1));
    }
    setOnEdit(!onEdit);
  };
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNewText(e.target.value);
  };
  const finishHandler = (e: MouseEvent<HTMLButtonElement>) => {
    dispatch(markFinish(indexOftask));
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
