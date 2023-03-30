import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    padding: 0 2rem;
    .image-photo{
        width: 250px;
        height: 250px;
        object-fit: cover;
        border-radius: 50%;
    }
`

export const Input = styled.input`
    width: 100%;
    padding: 0.5rem;
    border-radius: 0.25px;
    border: 1px solid #b3b3b3;
`
