import React, { FormEvent } from "react";
import ReactModalInput from "react-modal";
import Counters from "./components/Counters";
import MainInputStyled from "./components/MainInput.style";
import TaskListStyled from "./components/TaskList.style";
import { TitleButtonStyled } from "./components/ButtonWithImage.style";

import { useAppDispatch, useAppSelector } from "./app/hook";
import { resetCounter } from "./features/counters/counter-slice";
import { setModalIsClosed, setModalIsOpen } from "./features/modal/modal-slice";
import { resetTodoList } from "./features/todoList/todoList-slice";

import "./App.mudule.scss";

import uploadPng from "./img/upload.png";
import cleanPng from "./img/clean.png";
import filterPng from "./img/filter.png";
import noFilterPng from "./img/nofilter.png";
import plusPng from "./img/plus.png";

import { setFiltered, setNoFiltered } from "./features/filter/filter-slice";

const customStyles = {
  content: {
    fontFamily: "cursive",
    fontStyle: "italic",
    fontSize: "2rem",
    top: "35%",
    left: "5.5%",
    right: "auto",
    bottom: "auto",
    marginRight: "10%",
    width: "70%",
    paddingTop: "0%",
    paddingBottom: "0%",
    border: "2px solid #6e6e6e",
    background: `linear-gradient(#bbb, transparent 1px),
     linear-gradient(90deg, #bbb, transparent 1px)`,
    backgroundSize: "20px 20px",
    backgroundPosition: "center center",
    backgroundColor: "white",
    boxShadow: "4px 4px 7px",
    color: "#2c2c2c",
  },
};

const App = () => {
  const counter = useAppSelector((state) => state.counters);
  const modalIsOpen = useAppSelector((state) => state.modal);
  const filter = useAppSelector((state) => state.filter.value);
  const dispatch = useAppDispatch();

  ReactModalInput.setAppElement("#root");
  const openModal = () => {
    dispatch(setModalIsOpen("Add"));
  };

  const uploadButtonHadler = async () => {
    dispatch(setModalIsOpen("Upload"));
  };

  const cleanButtonHadler = () => {
    dispatch(resetTodoList());
    dispatch(resetCounter());
  };

  const buttonFilterClick = () => {
    if (filter) {
      dispatch(setNoFiltered());
    } else {
      dispatch(setFiltered());
    }
  };

  const closeModal = () => {
    dispatch(setModalIsClosed());
  };

  const handlerOnSubmitMainInput = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div id="app" className="App">
      <ReactModalInput
        isOpen={modalIsOpen.value}
        onRequestClose={closeModal}
        shouldCloseOnEsc={true}
        style={customStyles}
        // shouldCloseOnOverlayClick={false}
        contentLabel="Add new tasks"
      >
        <form onSubmit={handlerOnSubmitMainInput}>
          <MainInputStyled />
        </form>
      </ReactModalInput>
      <section className="LeftVerticalArea">
        <h1 className="VerticalTitle">TODO</h1>
      </section>
      <section className="RightVerticalArea">
        <div className="TitleAndCounters">
          <h1 className="HorisontalTitle">
            list
            <TitleButtonStyled
              backgroundurl={uploadPng}
              onClick={uploadButtonHadler}
              title="Upload"
            ></TitleButtonStyled>
            <TitleButtonStyled
              backgroundurl={cleanPng}
              onClick={cleanButtonHadler}
              title="Clean"
            ></TitleButtonStyled>
            <TitleButtonStyled
              backgroundurl={plusPng}
              onClick={openModal}
              title="Add"
            ></TitleButtonStyled>
            <TitleButtonStyled
              backgroundurl={filter ? noFilterPng : filterPng}
              onClick={buttonFilterClick}
            ></TitleButtonStyled>
          </h1>
          <Counters {...counter} />
        </div>

        <TaskListStyled />
      </section>
    </div>
  );
};

export default App;
