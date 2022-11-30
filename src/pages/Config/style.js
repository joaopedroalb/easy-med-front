import styled from "styled-components";

export const PageBg = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    background: #242323;
    color: #ffff;

    h1{
        text-align: center;
        font-size: 3.5rem;
    }

    input{
        width: 80%;
        padding: 16px;
        border-radius: 8px;
        border: 1px solid #838080b8;
    }

    button{
        width: 150px;
        font-size: 1rem;
        font-weight: bold;
        padding: 8px;
        border-radius: 4px;
        border: none;
        background: var(--blue-500);
        color: #ffff;
        cursor: pointer;
    }
`