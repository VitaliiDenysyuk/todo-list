import React, { KeyboardEvent, ChangeEvent } from "react";
import ButtonWithImage from "./ButtonWithImage.style";
import { getRandomColor } from "../help/general";
import { useAppDispatch, useAppSelector } from "../app/hook";
import { incrementCreated } from "../features/counters/counter-slice";
import { addItem } from "../features/todoList/todoList-slice";
import {
  cleanInputText,
  setInputText,
} from "../features/inputText/inputText-slice";
import { setModalIsClosed } from "../features/modal/modal-slice";
import { InputBlockStyled, InputBlockTytleStyled } from "./MainInput.style";

import uploadPng from "../img/upload.png";
import closePng from "../img/cross.png";
import plusPng from "../img/plus.png";

export interface MainInputProps {
  className?: string;
}

const MainInput = ({ className }: MainInputProps) => {
  const dispatch = useAppDispatch();

  const inputText = useAppSelector((state) => state.inputText.value);

  const inputTextHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setInputText(e.target.value));
  };

  const buttonAddClick = () => {
    if (inputText !== "") {
      dispatch(
        addItem({
          text: inputText,
          finished: false,
          key: "" + Date.now(),
          deleted: false,
          textColor: getRandomColor(),
        })
      );
      dispatch(cleanInputText());
      dispatch(incrementCreated(1));
    }
  };

  const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      buttonAddClick();
    }
  };
  const closeModal = () => {
    dispatch(setModalIsClosed());
  };
  return (
    <div className={className}>
      <InputBlockTytleStyled>
        <h2>Add new tasks</h2>
        <ButtonWithImage
          type="button"
          onClick={closeModal}
          backgroundurl={closePng}
        ></ButtonWithImage>
      </InputBlockTytleStyled>
      <InputBlockStyled>
        <input
          autoFocus
          onChange={inputTextHandler}
          onKeyDown={onKeyDownHandler}
          type="text"
          value={inputText}
        ></input>
        <ButtonWithImage
          type="button"
          onClick={buttonAddClick}
          backgroundurl={plusPng}
        ></ButtonWithImage>
      </InputBlockStyled>
    </div>
  );
};

export default MainInput;
