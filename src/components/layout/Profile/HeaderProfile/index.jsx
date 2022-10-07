import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {FiArrowLeftCircle} from 'react-icons/fi'
import { UserContext } from '../../../../context/UserContext';
import { HeaderProfileContent, RowContent } from './style';

const IMAGE_DEFAULT = 'https://cdn.discordapp.com/attachments/469630958811742212/1022924520002158624/unknown.png'

function HeaderProfile({title, hasBack = false, name, photoUrl}) {

  const [photo, setPhoto] = useState(photoUrl)
  const onError = () => setPhoto(IMAGE_DEFAULT);
  const imageChange = () => {
    setPhoto(photoUrl)
  }
  useEffect(()=>{
    console.log(photoUrl)
    imageChange()
  },[photoUrl])

  return (
    <HeaderProfileContent>
        <img 
          src={photo ? photo : IMAGE_DEFAULT}
          onError={onError}
        />
        <RowContent isTop>
            {
                hasBack && <button><FiArrowLeftCircle/></button>
            }
            <h1>{title}</h1>
        </RowContent>
        <RowContent>
            <h2>{name}</h2>
        </RowContent>
    </HeaderProfileContent>
  )
}

export default HeaderProfile;