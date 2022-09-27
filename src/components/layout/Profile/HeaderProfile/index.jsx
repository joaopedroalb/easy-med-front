import React from 'react';
import {FiArrowLeftCircle} from 'react-icons/fi'
import { HeaderProfileContent, RowContent } from './style';

function HeaderProfile({title, photo, hasBack = false, name}) {
  return (
    <HeaderProfileContent>
        <img src={photo} />
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