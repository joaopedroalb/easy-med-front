import styled from "styled-components"

export const DoctorProfileContainer = styled.div`
    flex: 1;
    width: 100%;
    height: fit-content;
    padding: 2.5rem 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
`

export const FormContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    margin-top: 1rem;
`

export const SelectArea = styled.div`
    width: 45%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

export const BtnContainer = styled.div`
    width: 100%;
    padding: 1rem 0;
    display: flex;
    align-items: center;
    justify-content: center;

    .btnSave {
        padding: 1rem;
        min-width: 200px;
        border: none;
        background: #104e92;
        color: #ffff;
        font-weight: bold;
        border-radius: 4px;
        cursor: pointer;
    }
`