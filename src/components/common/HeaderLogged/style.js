import styled from "styled-components";


export const Header = styled.div`
  width: 100%;
  padding: 0 34px;
  background-color: #104E92;
  height: 137px;

  display: flex;
  gap: 300px;
  align-items: center;

  a {
    color: #FFFFFF;
  }

  div {
    display: flex;
    gap: 114px;
  }
  
  div + div {
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