import styled, { css } from "styled-components";
import OneItemList from "./OneItemList";

export const OneItemListStyled = styled(OneItemList)`
  margin-top: 0.5rem;
  width: 100%;  
  display: flex;
  align-items: flex-end;
  flex-basis: 1.5rem;
  justify-content: space-between;
  
  & input {
    flex-basis: calc(100% - 6rem);
    padding: 0rem 0.5rem 0rem 0.5rem;
    font-size: 1rem;
    height: 1.5rem;  
  }
`;

export const InputWithEffectStyled = styled.input`
    ${props => props.finished && css`
        text-decoration: line-through solid green 2px;    
    `};     
    ${props => props.onDelete && css`
        transform: scalex(0.1);
        transition: 500ms;   
    `};     
     
`;

