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

  .profile-anchor{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .75rem;
    padding: 8px;
    border-radius: 10px;
    transition: 450ms;
    background-color: transparent;

    p{
      font-size: 1.05rem;
      font-weight: 600;
    }

    img{
      width: 30px;
      height: 30px;
      border-radius: 50%;
      object-fit: cover;
      outline: 2px solid var(--white);
      transition: 450ms;
    }

    &:hover{
      background: white;
      color: var(--blue-600);
      
      img{
        outline: 2px solid var(--blue-600);
      }
    }
  }

  .btn-logout{
    cursor: pointer;
    width: 90px;
    height: 40px;
    font-weight: 700;
    background: transparent;
    color: var(--white);
    border: 2px solid var(--white);
    border-radius: 4px;
    transition: 450ms;

    &:hover{
      background: var(--white);
      color: var(--blue-600);
    }
  }
`