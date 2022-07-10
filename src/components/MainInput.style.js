import styled from "styled-components";
import MainInput from "./MainInput";

const MainInputStyled = styled(MainInput)`
    display: flex;
    margin-top: 1rem;
    flex-basis: 2rem;
    width: 80%;
    margin-bottom: 1rem;
    
    & input {
        flex-basis: calc(100% - 4rem);
        padding: 0rem 0.5rem 0rem 0.5rem;
        font-size: 1rem;       
    }
    & button {
        font-size: 1.5rem;
        height: 100%;
        flex-basis: 2rem;
        padding: 1px;
        margin-left: 1px;
        min-width: 2rem; 
        border-width: 1px;
    }
    
    & button:hover{
        background-color: #e6e6e6;
        cursor: pointer;
        box-shadow: 2px 2px 4px 
    }
`;

export default MainInputStyled;
