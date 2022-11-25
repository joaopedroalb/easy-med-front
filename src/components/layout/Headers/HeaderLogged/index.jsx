import React from 'react'
import { Header, TitleLogo, NavContainer, UserActions } from './style'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../../../../context/UserContext'

export default function HeaderLogged({user, logout}) {

  const {userIsDoctor} = useContext(UserContext)

  return (
    <Header>
      <Link to='/'>
        <TitleLogo>
          EasyMed
        </TitleLogo>
      </Link>
      <UserActions>
        {
          userIsDoctor() ? 
          (
            <>
              <Link to='/list'>
                <p>Pacientes</p>
              </Link>
              <Link to='/faq'>
                <p>FAQ</p>
              </Link>
            </>
          ) : (
            <Link to={'/profile'} className='profile-anchor'>
              <p>{user.name}</p>
              <img src={user.pictureUrl}/>
            </Link>
          )
        }
        
        <button className='btn-logout' onClick={logout}>Sair</button>
      </UserActions>
    </Header>
  )
}
