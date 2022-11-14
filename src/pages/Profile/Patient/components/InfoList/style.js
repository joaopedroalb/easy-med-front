import styled from "styled-components";

export const InfoCardContainer = styled.div`
    width: 100%;
    padding: 2rem 4%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;

    background-color: ${({theme}) => theme ==='dark' ? '#85c3e159':'var(--white)'};

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
        background-color: transparent;
        padding: 8px;
        border-radius: 4px;
        width: fit-content;
        align-self: flex-start;
        cursor: pointer;
        transition: 400ms;

        &:hover{
            opacity: 0.95;
            background-color: ${({theme}) => theme ==='dark' ? '#0000000d':'#0000001c'};
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