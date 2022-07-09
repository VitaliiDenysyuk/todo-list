import React, { useState } from "react";
import './App.css';
import Counters from "./components/Counters";
import MainInput from './components/MainInput';
import TaskList from "./components/TaskList";
import useLocalStorage from "./useLocalStorage";

const App = () => {

  const [todoList, setTodoList] = useLocalStorage("todoList", "");
  const [inputText, setInputText] = useState("");
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
    let response = await fetch(
      inputText,
      {
        method: "GET",
      }
    );
    let body = await response.json();
    console.log(body);

  }

  return (
    <div className="App">
      <section className='LeftVerticalArea'>
        <h1 className='VerticalTitle'>
          TODO
        </h1>
      </section >
      <section className='RightVerticalArea'>
        <div className="TitleAndCounters">
          <h1 className='HorisontalTitle'>
            list
            <button className="UploadButton" onClick={uploadButtonHadler}></button>
          </h1>
          <Counters
            counter={counter}
          />
        </div>
        <MainInput
          todoList={todoList}
          setTodoList={setTodoList}
          inputText={inputText}
          setInputText={setInputText}
          counter={counter}
          setCounter={setCounter}
        />
        <TaskList
          todoList={todoList}
          setTodoList={setTodoList}
          counter={counter}
          setCounter={setCounter}
        />
      </section>
    </div>
  );
}

export default App;
