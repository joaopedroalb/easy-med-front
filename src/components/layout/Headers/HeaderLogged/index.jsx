import React from 'react'
import { Header, TitleLogo, NavContainer, UserActions } from './style'
import {IoIosArrowDown} from 'react-icons/io'

export default function HeaderLogged() {
  return (
    <Header>
      <TitleLogo>
        EasyMed
      </TitleLogo>
      <NavContainer>
        <a>Home</a>
        <a>Perfil</a>
      </NavContainer>

      <UserActions>
        <IoIosArrowDown/>
      </UserActions>
    </Header>
  )
}
