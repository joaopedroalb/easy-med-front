import styled from "styled-components"

export const ModalBG = styled.div`
    background-color: var(--absolut-white);
    width: 600px;
    max-width: 95%;
    min-height: 20vh;
    max-height: 90vh;
    overflow-y: auto;
    padding: 48px 16px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1.5rem;
    z-index: 999;
`

export const FormBG = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: .7rem;
`

export const RowInput = styled.div`
    width: 100%;
    display: flex;
    gap: .7rem;
    align-items: center;

    input, select {
        width: 100%;
        padding: 8px;
    }
` 

export const ColInput = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: .25rem;

    textarea{
        resize: none;
        padding: 8px;
    }
`

export const FooterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 1rem;

    .btn-submit, .btn-cancel{
        width: 150px;
        font-size: 1rem;
        font-weight: bold;
        padding: 8px;
        border-radius: 4px;
        border: none;
        color: #ffff;
        cursor: pointer;
    }

    .btn-submit{
        background: var(--blue-500);
        &:disabled{
            opacity: .5;
            cursor: not-allowed;
        }
    }

    .btn-cancel{
        background: var(--red);
    }
`