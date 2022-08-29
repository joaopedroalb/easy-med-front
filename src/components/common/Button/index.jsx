import React from 'react';
import { ButtonTheme } from './style';

export default function Button({children,handleClick,theme}) {
  
    return(
        <ButtonTheme onClick={handleClick} theme={theme}>
            {children}
        </ButtonTheme>
    )
}
