import styled from "styled-components";

export const HeaderProfileContent = styled.header`
    width: 100%;
    height: 500px;
    background-color: red;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img{
        position: absolute;
        width: 230px;
        max-width: 80%;
        object-fit: cover;
        border-radius: 50%;
        outline: 4px solid var(--absolut-white);
    }
`

export const RowContent = styled.div`
    width: 100%;
    height: 250px;
    background-color: ${props=>props.isTop ? 'var(--blue-500)':'var(--white)'};
    display: flex;
    align-items: ${props=>props.isTop ? 'flex-start':'flex-end'};
    padding: 50px 0;
    justify-content: center;
    color: ${props=>props.isTop ? 'var(--absolut-white)':''};

    .text-title{
        text-align:center;
        font-size: ${props=>props.isTop ? '40px':'24px'};
    }
`