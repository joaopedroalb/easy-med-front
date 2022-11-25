import styled from "styled-components";

export const DiagnoseCardBg = styled.div`
    width: 100%;
    padding: 10px;
    border: 1px solid #93939387;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .exam-card-row{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .exam-header{
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .icon-container{
        cursor: pointer;
    }

    .description-box{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    }
        
`