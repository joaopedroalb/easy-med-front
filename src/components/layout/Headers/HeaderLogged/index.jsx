import React, { useState } from 'react'
import { Header, TitleLogo, NavContainer, UserActions } from './style'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../../../../context/UserContext'

const IMAGE_DEFAULT = 'https://cdn.discordapp.com/attachments/469630958811742212/1022924520002158624/unknown.png'

export default function HeaderLogged({user, logout}) {

  const [photo, setPhoto] = useState(user.profilePicture)
  const onError = () => setPhoto(IMAGE_DEFAULT);

  const {userIsDoctor} = useContext(UserContext)

  return (
    <Header>
      <Link to='/'>
        <TitleLogo>
          EasyMed
        </TitleLogo>
      </Link>
      <UserActions>
        <Link to='/faq'>
          <p>Nosso FAQ</p>
        </Link>
        {
          userIsDoctor() ? 
          (
            <>
              <Link to='/list'>
                <p>Pacientes</p>
              </Link>
              <Link to={'/profile'} className='profile-anchor'>
                <p>{user.name}</p>
                <img src={photo ? photo : IMAGE_DEFAULT} onError={onError}/>
              </Link>
            </>
          ) : (
            <Link to={'/profile'} className='profile-anchor'>
              <p>{user.name}</p>
              <img src={photo ? photo : IMAGE_DEFAULT} onError={onError}/>
            </Link>
          )
        }
        
        <button className='btn-logout' onClick={logout}>Sair</button>
      </UserActions>
    </Header>
  )
}
