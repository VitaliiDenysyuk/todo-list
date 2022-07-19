import styled, { css } from "styled-components";
import OneItemList, {OneItemListProps} from "./OneItemList";

export const OneItemListStyled = styled(OneItemList)<OneItemListProps>`
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

  & button {
    font-size: 1rem;
    height: 100%;
    flex-basis: 1.5rem;
    padding: 0rem 0.5rem 0rem 0.5rem;
    border-width: 1px;
    min-width: 1.5rem;
  }
`;

interface AdditionalState{
  textColor: string;
  finished: boolean;
  startedDelete: boolean;
}

export const InputWithEffectStyled = styled.input<AdditionalState>`
  color: ${(props) => props.textColor || "black"};
  ${(props) =>
    props.finished &&
    css`
      text-decoration: line-through solid green 2px;
    `};
  ${(props) =>
    props.startedDelete &&
    css`
      transform: scalex(0.1);
      transition: 500ms;
    `};
`;
