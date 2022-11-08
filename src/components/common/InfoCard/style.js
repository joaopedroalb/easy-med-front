import styled from "styled-components";

export const InfoCardBg = styled.div`
    width: 100%;
    max-width: 1400px;
    padding: 18px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    box-shadow: 0px 0px 7px 3px rgb(0 0 0 / 25%);
    border-radius: 4px;
    
    .description-box{
        flex: 1;
    }
`

export const InfoCardRow = styled.div` 
    display: flex;
    align-items: center;
    justify-content: space-between;
    .icon{
        font-size: 2.25rem;
        color: ${({type}) => type === 'DISEASE' ? "#62a172" : type === 'ALLERGY' ? "#db5d5d" : "#155ac3"};
    }

    .title{
        font-size: 1.85rem;
        color: var(--gray);
    }

    .buttonContainer{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;

        .switchBtn{
            font-size: 1.5rem;
            cursor: pointer;
        }

        .item-icon{
            &__delete, &__edit{
                font-size: 1.5rem;
                cursor: pointer;
            }

            &__delete{
                color: var(--red);
            }
        }
    }
`
