import styled from "styled-components";
import { DEVICE_RESPONSIVE_QUERY } from "../../util/consts";

export const LoginBg = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: var(--blue-400);
    display: flex;
    
`

export const LeftSide = styled.div`
    flex: 1;
    max-width: 100%;
    background-color: var(--white);
    box-shadow: 11px 0 7px 5px #000;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 2rem;
    
    padding-top: 8.5rem;

    .title{
        margin: 0 calc(5% + 20px);
        font-size: 3.5rem;
        @media ${DEVICE_RESPONSIVE_QUERY.tablet}{
            font-size: 2.5rem;
        }
        strong{
            color: var(--blue-400);
        }
    }

    @media ${DEVICE_RESPONSIVE_QUERY.tablet}{
        align-items: center;
        justify-content: center;
        padding-top: 0;
    }
`

export const RightSide = styled.div`
    width: 46%;
    background-image: url(${props=>props.urlBg});
    opacity: .65;
    background-repeat: no-repeat;
    background-size: cover;
    @media ${DEVICE_RESPONSIVE_QUERY.tablet}{
        display: none;
    }
`

export const FormBg = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    
    gap: 1.2rem;
    padding: 0 calc(5% + 20px);

    @media ${DEVICE_RESPONSIVE_QUERY.tablet}{
        align-items: center;
        justify-content: center;
    }
`

export const NewAccountMessage = styled.p`
    color: var(--gray);
    a{
        cursor: pointer;
        color: var(--blue-400);
    }
` 
