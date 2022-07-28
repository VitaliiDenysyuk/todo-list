import styled from "styled-components";
import MainInput, { MainInputProps } from "./MainInput";

export const InputBlockTytleStyled = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1rem;
  flex-wrap: wrap;
`;

export const InputStyled = styled.input`
  flex-basis: calc(100% - 3rem);
  font-size: 1rem;
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
