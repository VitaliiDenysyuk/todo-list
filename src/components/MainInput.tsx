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
import { InputBlockStyled, InputBlockTytleStyled, InputStyled } from "./MainInput.style";

import uploadPng from "../img/upload.png";
import closePng from "../img/cross.png";
import plusPng from "../img/plus.png";

export interface MainInputProps {
  className?: string;
}

interface OneItemUpload {
  text: string;
  isCompleted: boolean;
  id: string;
}

const MainInput = ({ className }: MainInputProps) => {
  const dispatch = useAppDispatch();

  const inputText = useAppSelector((state) => state.inputText.value);
  const modalIsOpenKind = useAppSelector((state) => state.modal.kind);
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
      dispatch(incrementCreated(1));
      dispatch(cleanInputText());
      document.getElementById("mainInput")?.focus();
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

  const uploadButtonHadler = async () => {
    if (!inputText) {
      return;
    }
    try {
      const response = await fetch(inputText, {
        method: "GET",
      });
      const body = await response.json();
      body.map((item: OneItemUpload) =>
        dispatch(
          addItem({
            text: item.text,
            finished: item.isCompleted,
            key: item.id + " " + Date.now(),
            deleted: false,
            textColor: getRandomColor(),
          })
        )
      );
      dispatch(cleanInputText());
      dispatch(incrementCreated(body.length));
      closeModal();
    } catch (err) {
      dispatch(setInputText(`Error: ${err}`));
    }
  };

  return (
    <div className={className}>
      <InputBlockTytleStyled>
        <h2>{modalIsOpenKind} new tasks</h2>
        <ButtonWithImage
          type="button"
          onClick={closeModal}
          backgroundurl={closePng}
        ></ButtonWithImage>
      </InputBlockTytleStyled>
      <InputBlockStyled>
        <InputStyled
          autoComplete="off"
          placeholder={modalIsOpenKind === "Add" ?"":"Set url for upload here"}
          id="mainInput"
          autoFocus
          onChange={inputTextHandler}
          onKeyDown={onKeyDownHandler}
          type="text"
          value={inputText}
        ></InputStyled>
        {modalIsOpenKind === "Add" ? (
          <ButtonWithImage
            type="button"
            onClick={buttonAddClick}
            backgroundurl={plusPng}
          ></ButtonWithImage>
        ) : (
          <ButtonWithImage
            type="button"
            onClick={uploadButtonHadler}
            backgroundurl={uploadPng}
          ></ButtonWithImage>
        )}
      </InputBlockStyled>
    </div>
  );
};

export default MainInput;
