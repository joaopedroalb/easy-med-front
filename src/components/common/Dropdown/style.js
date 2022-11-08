import styled from "styled-components";

export const DropdownContainer = styled.div`
    width: 200px;
    padding: 0.4rem;
    border-radius: 30px;
    border: ${({disabled}) => disabled ? 'none':'1px solid #00000029;'};
    cursor: pointer;
    background: var(--white);
    position: relative;

    -webkit-user-select: none; 
    -ms-user-select: none; 
    user-select: none; 

    .title {
        margin: 0;
        padding: 0;
        font-size: .85rem;
        font-weight: ${({disabled}) => disabled ? 'normal':'bold'};
    }
`

export const OptionsContainer = styled.div`
    position: absolute;
    background: var(--white);
    width: 100%;
    border: 1px solid #00000029;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    z-index: 2;
    top: 35px;
    left: 0;

    .option {
        cursor: pointer;
        background-color: var(--white);
        padding: 8px;
        &:hover{
            background-color: var(--gray-100);
        }
    }

    .selected {
        background-color: var(--blue-100);
        font-weight: bold;
        color: var(--dark-blue-800);
    }
`