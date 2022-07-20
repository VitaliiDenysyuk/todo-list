import styled, { css } from "styled-components";

interface BackgroundurlProps {
  backgroundurl?: string;
}

export const ButtonWithImage = styled.button<BackgroundurlProps>`
  ${(props) =>
    props.backgroundurl &&
    css`
      background: url(${props.backgroundurl});
      background-repeat: no-repeat;
      background-position: center;
      background-color: #efefef;
    `};
  &:hover {
    background-color: #e6e6e6;
    cursor: pointer;
    box-shadow: 2px 2px 4px;
  }
`;

export const TitleButtonStyled = styled(ButtonWithImage)`
  height: 2.5rem;
  width: 2.5rem;
  padding: 0rem 0.5rem 0rem 0.5rem;
  border-width: 1px;
  margin-right: 2px;
`;

export default ButtonWithImage;
