import styled from "styled-components";

export const RowMedication = styled.div`
    width: 100%;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
    padding: 8px;

    .row-container, .row-input {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        text-align: center;

        select, input{
            min-width: 250px;
            width: auto;
            height: auto;
            padding: 8px;
        }
    }

    .row-container{
        gap: 1rem;
    }

    .row-input{
        gap: 4px;
    }

    .btn-actions{
        button{
            width: 200px;
        }
    }
`