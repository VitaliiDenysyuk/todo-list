import styled from "styled-components";
import MainInput, { MainInputProps } from "./MainInput";

export const InputBlockTytleStyled = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1rem;
  flex-wrap: wrap;
`;

export const InputBlockStyled = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1rem;
  flex-wrap: wrap;
`;

const MainInputStyled = styled(MainInput)<MainInputProps>`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  flex-basis: 2rem;
  width: 100%;
  margin-bottom: 1rem;

  & input {
    flex-basis: calc(100% - 3.5rem);
    padding: 0rem 0.5rem 0rem 0.5rem;
    font-size: 1.4rem;
  }

  & button {
    font-size: 2rem;
    height: 2rem;
    flex-basis: 2rem;
    padding: 1px;
    margin-left: 1px;
    min-width: 2rem;
    border-width: 1px;
  }

  & button:hover {
    background-color: #e6e6e6;
    cursor: pointer;
    box-shadow: 2px 2px 4px;
  }
`;

export default MainInputStyled;
