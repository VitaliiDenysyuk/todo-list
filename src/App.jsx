import React, { useState } from "react";

import Counters from "./components/Counters";
import MainInputStyled from './components/MainInput.style';
import TaskListStyled from "./components/TaskList.style";
import useLocalStorage from "./useLocalStorage";
import { TitleButtonStyled } from "./components/ButtonWithImage.style";

import './App.mudule.scss';

import uploadPng from "./img/upload.png";
import cleanPng from "./img/clean.png";

import { getRandomColor } from "./help/general";

const App = () => {

  const [todoList, setTodoList] = useLocalStorage("todoList", []);
  const [inputText, setInputText] = useState("");
  const [filter, setFilter] = useState(false);
  const [counter, setCounter] = useLocalStorage("counter", {
    created: 0,
    updated: 0,
    deleted: 0
  })

  const uploadButtonHadler = async () => {
    if (!inputText) {
      setInputText("Set url for upload here");
      return;
    }
    try {
      let response = await fetch(
        inputText,
        {
          method: "GET",
        }
      );
      let body = await response.json();
      console.log(body);
      setTodoList(
        body.map(item => ({
          text: item.text,
          finished: item.isCompleted,
          key: item.id + ' ' + Date.now(),
          deleted: false,
          textColor: getRandomColor(),
        })));
      setInputText("");
      setCounter({
        created: body.length,
        updated: 0,
        deleted: 0
      })
    } catch (err) {
      setInputText(`Error: ${err}`);
    }

  }

  const cleanButtonHadler = () => {
    setTodoList([]);
    setCounter({
      created: 0,
      updated: 0,
      deleted: 0
    })
  }

  return (
    <div className="App">
      <section  className='LeftVerticalArea'>
        <h1 className='VerticalTitle'>
          TODO
        </h1>
      </section >
      <section className='RightVerticalArea'>
        <div className="TitleAndCounters">
          <h1 className='HorisontalTitle'>
            list
            <TitleButtonStyled
              backgroundurl={uploadPng}
              onClick={uploadButtonHadler}
              title="Upload">
            </TitleButtonStyled>
            <TitleButtonStyled
              backgroundurl={cleanPng}
              onClick={cleanButtonHadler}
              title="Clean">
            </TitleButtonStyled>
          </h1>
          <Counters
            counter={counter}
          />
        </div>
        <MainInputStyled
          todoList={todoList}
          setTodoList={setTodoList}
          inputText={inputText}
          setInputText={setInputText}
          counter={counter}
          setCounter={setCounter}
          filter={filter}
          setFilter={setFilter}
        />
        <TaskListStyled
          todoList={todoList}
          setTodoList={setTodoList}
          counter={counter}
          setCounter={setCounter}
          filter={filter}
        />
      </section>
    </div>
  );
}

export default App;
