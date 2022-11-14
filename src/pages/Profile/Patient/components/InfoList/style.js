import styled from "styled-components";

export const InfoCardContainer = styled.div`
    width: 100%;
    padding: 2rem 4%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;

    .title-content, .insert-row{
        width: 100%;
        max-width: 1400px;
    }

    .title-content {
        margin-bottom: .85rem;
        color: #626262;
        font-weight: 500;
    }

    .insert-content{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: .35rem;
        background-color: var(--white);
        padding: 8px;
        border-radius: 4px;
        width: fit-content;
        align-self: flex-start;
        cursor: pointer;
        transition: 400ms;

        &:hover{
            background-color: #dddddd;
        }

        p{
            font-size: 1.35rem;
            font-weight: 600;
            color: var(--green-blue-400);
        }

        .insert-icon{
            font-size: 1.65rem;
            color: var(--green-blue-400);
        }
    }
`