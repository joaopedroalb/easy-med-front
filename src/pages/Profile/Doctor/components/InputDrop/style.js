import styled from "styled-components";

export const Container = styled.fieldset`
    display: flex;
    background-color: #c9c9c9a8;
    border-color: #b5b5b5ad;
    position: relative;
    justify-content: center;
    min-width: 280px;
    width: 100%;
    transition: 400ms;

    legend{
        font-size: 16px;
        font-weight: 900;
        padding: 4px 8px;
        background: #484b4e;
        color: #fff;
        position: absolute;
        top: -15px;
        transition: 400ms;
    }

    select{
        flex: 1;
        width: 100%;
        border: none;
        padding: .75rem .5rem .75rem .5rem;
        border-radius: 4px;
        background-color: transparent;
        resize: none;

        &:focus{
            outline: none;
        }
    }

    &:focus-within {
        border: 2px solid #104e92;;
        background-color: #fff;

        legend{
            background: #104e92;
        }
    }
`