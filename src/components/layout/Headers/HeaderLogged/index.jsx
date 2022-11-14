import React from 'react'
import { Header, TitleLogo, NavContainer, UserActions } from './style'
import { Link } from 'react-router-dom'

export default function HeaderLogged({user, logout}) {

  return (
    <Header>
      <Link to='/'>
        <TitleLogo>
          EasyMed
        </TitleLogo>
      </Link>
      <UserActions>
        <Link to={'/profile'} className='profile-anchor'>
          <p>{user.name}</p>
          <img src={user.pictureUrl}/>
        </Link>
        <button className='btn-logout' onClick={logout}>Sair</button>
      </UserActions>
    </Header>
  )
}
