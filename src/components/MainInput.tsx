import React, { KeyboardEvent, ChangeEvent } from "react";
import ButtonWithImage from "./ButtonWithImage.style";
import { getRandomColor } from "../help/general";
import { useAppDispatch } from '../app/hook';
import { incrementCreated } from '../features/counters/counter-slice';
import { addItem } from "../features/todoList/todoList-slice";


export interface MainInputProps {
  className?: string;
  inputText: string;
  setInputText: React.Dispatch<React.SetStateAction<string>>;
  filter: boolean;
  setFilter: React.Dispatch<React.SetStateAction<boolean>>;
}

const MainInput = ({
  className,
  inputText,
  setInputText,
  filter,
  setFilter,
}: MainInputProps) => {
  const dispatch = useAppDispatch();
  const inputTextHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };
  const buttonAddClick = () => {
    if (inputText !== "") {
      dispatch(addItem(        {
        text: inputText,
        finished: false,
        key: "" + Date.now(),
        deleted: false,
        textColor: getRandomColor(),
      }))
      setInputText("");
      dispatch(incrementCreated(1));
    }
  };

  const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      buttonAddClick();
    }
  };
  return (
    <div className={className}>
      <input
        onChange={inputTextHandler}
        onKeyDown={onKeyDownHandler}
        type="text"
        value={inputText}
      ></input>

    </div>
  );
};

export default MainInput;
