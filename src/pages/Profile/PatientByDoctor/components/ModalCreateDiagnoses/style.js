import styled from "styled-components";

export const ModalCreateForm = styled.form`
    background-color: var(--absolut-white);
    width: 850px;
    max-width: 95%;
    min-height: 50vh;
    padding: 32px 8px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;

    .col-label{
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 1rem;

        input{
            width: 100%;
        }

        textarea {
            height: 85px !important; 
        }
    }

    .row-label{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 0.5rem;
        width: 100%;
        flex-wrap: wrap;
    }
    

    textarea{
        resize: none;
    }

    input, textarea, select{
        padding: 8px;
        height: 50px;
    }

    .cancel-btn, .submit-btn {
        width: 100px;
        padding: 8px;
        cursor: pointer;
        font-weight: 600;
        transition: 400ms;
    }

    .cancel-btn{
        background-color: var(--absolut-white);
        border: 1px solid var(--black);

        &:hover{
            background-color: #76767673;
        }
    }

    .submit-btn{
        background-color: var(--blue-500);
        color: var(--absolut-white);
        border: 1px solid var(--blue-300);

        &:hover{
            background-color: var(--blue-300);
        }
    }

    .btn-container {
        margin-top: auto;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    
`