import styled from "styled-components";


export const Header = styled.div`
  width: 100%;
  height: 100px;
  padding: 12px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--blue-600);
  color: var(--white);
`

export const TitleLogo = styled.h1`
  font-style: italic;
  font-size: 2.5rem;
`

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 40px;
`

export const UserActions = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`