import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  height: 100px;
  background: var(--blue-600);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 35px 0 35px;

  .link-container{
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`

export const TitleLogo = styled.h1`
  color: var(--white);
  font-style: italic;
  font-size: 2.5rem;

`

export const ButtonLogin = styled.button`
  cursor: pointer;
  width: 200px;
  height: 60px;
  background-color: transparent;
  border: 1px solid var(--white);
  border-radius: 4px;
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  
  .text-btn{
    font-size: 1.5rem;
    font-weight: bold;
  }
`

export const IconContent = styled.div`
  padding: 8px;
  border: 2px solid var(--white);
  border-radius: 50%;
`