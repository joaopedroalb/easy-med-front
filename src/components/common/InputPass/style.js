import styled from "styled-components";

export const InputContainer = styled.div`
    display: flex;
    width: 215px;
    max-width: 100%;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: .75rem;
`

export const InputStyled = styled.input`
    width: 100%;
    padding: 0.75rem;
    height: 2.85rem; 
    border-radius:4px;  
    border: 1px solid var(--black);

    &:focus,&:active{
        outline-color:var(--blue);
    }
`