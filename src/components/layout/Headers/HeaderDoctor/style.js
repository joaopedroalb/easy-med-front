import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  height: 100px;
  background: var(--blue-600);
  display: flex;
  justify-content: space-between;
  align-items: center;
  // justify-content: space-between;
  padding: 0 35px 0 35px;

`

export const TitleLogo = styled.h1`
  color: var(--white);
  font-style: italic;
  font-size: 2.5rem;
`

export const Nav = styled.div`
  height: fit-content;
  width: fit-content;
  display: flex;
  gap: 20px;
`
export const BtnHeader = styled.div`
  color: var(--absolut-white);
  cursor: pointer;
  font-weight: bold;
  font-style: italic;
  font-size: 26px;
  font-family: 'Montserrat';
  &:hover {
    color: var(--white);
  }
`