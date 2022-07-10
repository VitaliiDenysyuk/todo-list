import styled, { css } from "styled-components";

const ButtonWithImage = styled.button`

    ${props => props.backgroundurl && css`
        background: url(${props.backgroundurl});
        background-repeat: no-repeat;
        background-position: center;
        background-color: #efefef;       
    `};     
    &:hover{
        background-color: #e6e6e6;
        cursor: pointer;
        box-shadow: 2px 2px 4px 
    }  
`;

export default ButtonWithImage;