import React from 'react';
import { ModalBg } from './style'

export default function Modal({children, open, handleClose}) {
    if(!open) return null
    
    return (
        <ModalBg onClick={handleClose}>
            {children}
        </ModalBg>
    )
}
