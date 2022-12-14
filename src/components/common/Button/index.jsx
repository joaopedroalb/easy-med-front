import React from 'react';
import { ButtonTheme } from './style';

export default function Button({children,handleClick,theme, disabled}) {
  
    return(
        <ButtonTheme onClick={handleClick} theme={theme} disabled={disabled}>
            {children}
        </ButtonTheme>
    )
}
