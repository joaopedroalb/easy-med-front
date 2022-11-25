import styled from "styled-components";

export const ListBg = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--white);
    flex: 1;
    padding: 16px;
    gap: 1rem;
`

export const ListContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
`

export const PatientCard = styled.div`
    width: 800px;
    max-width: 100%;
    background: #ffffff;
    gap: 1rem;
    padding: 12px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 1px 2px 9px 2px rgb(0 0 0 / 34%);

    .userInfo {
        display: flex;
        align-items: center;
        gap: 2.5rem;

        p{
            font-size: 18px;
            font-weight: 700;
            overflow: hidden;
            max-width: 400px;
            text-overflow: ellipsis;
        }
    }

    .btnActions {
        display: flex;
        align-items: center;

        button{
            width: 85px;
            padding: 8px;
            background: var(--blue-600);
            color: var(--white);
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
    }

    img{
        width: 85px;
        height: 85px;
        object-fit: cover;
        border-radius: 50%;
    }


`