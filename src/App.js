import React, { useState } from "react";
import './App.css';
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

  return (
    <div className="App">
      <section className='LeftVerticalArea'>
        <h1 className='VerticalTitle'>
          TODO
        </h1>
      </section >
      <section className='RightVerticalArea'>
        <h1 className='HorisontalTitle'>
          list
        </h1>
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
