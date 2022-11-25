import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  height: 100px;
  background: var(--blue-600);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 35px 0 35px;
`

export const TitleLogo = styled.h1`
  color: var(--white);
  font-style: italic;
  font-size: 2.5rem;
`
export const BtnHeader = styled.a`
  color: var(--absolut-white);
  margin-right: 30px;
  cursor: pointer;
  font-weight: bold;
  font-style: italic;
  font-family: 'Montserrat';
  &:hover {
    color: var(--white);
  }
`