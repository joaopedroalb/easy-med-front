import styled from "styled-components";


export const Header = styled.div`
  width: 100%;
  padding: 0 34px;
  background-color: #104E92;
  height: 137px;


  font-family: 'Montserrat', sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #AEDFFA;

  .middle {
    display: flex;
    gap: 114px;
    justify-content: space-between;

    font-size: 24px;

    width: 274px;
  }
  
  .left {
    display: flex;
    gap: 30px;
    align-items: center;
  }

  img {
    width: 100px;
    height: 100px;
  }

  a img {
    width: 30px;
    height: 30px;
  }
`