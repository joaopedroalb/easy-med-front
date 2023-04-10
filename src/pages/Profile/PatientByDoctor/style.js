import styled from "styled-components";

export const ProfileBg = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    flex:1;
    gap: 2rem;

    .info-container{
        padding: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 4.5rem;
        flex-wrap: wrap;

        .title{
            font-size: 4.5rem;
            text-align: center;
            margin-bottom: 1rem;
        }

        .row-item{
            display: flex;
            width: 100%;
            justify-content: space-between;
            align-items: center;
            gap: 1rem;
        }

        .info-box{
            display: flex;
            flex-direction: column;
            gap: .75rem;
        }
    }
`

export const ImageContainer = styled.div`
    height: 400px;
    width: 400px;
    border-radius: 50%;
    overflow: hidden;

    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        -webkit-transition: all 400ms ease-in-out;
        -moz-transition: all 400ms ease-in-out;
        -o-transition: all 400ms ease-in-out;
        -ms-transition: all 400ms ease-in-out;
        transition: all 400ms ease-in-out;

        &:hover{
            -webkit-transform: scale(1.2); 
            -moz-transform: scale(1.2);
            -o-transform: scale(1.2);
            transform: scale(1.2);
        }
    }

`

export const BtnAction = styled.button`
    border: none;
    padding: 1rem;
    border-radius: 8px;
    background: var(--green);
    color: #000;
    font-weight: 800;
    font-size: 1rem;
    cursor: pointer;
`