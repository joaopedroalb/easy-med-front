import React, { useCallback, useContext, useState } from 'react'
import { UserContext } from '../../../context/UserContext'
import HeaderHome from '../Headers/HeaderHome'
import HeaderLogged from '../Headers/HeaderLogged'
import { LayoutContainer } from './style'

const USER_STATUS = {
    NONE: 'none',
    DOCTOR: 'doctor',
    COMMON: 'common'
}

export default function LayoutPage({children}) {
    const {user} = useContext(UserContext)

    const getUserStatus = useCallback(()=>{
        if(!user) return USER_STATUS.NONE

        return USER_STATUS.COMMON 
    },[user])

    const RenderHeader = () =>{
        switch(getUserStatus()){
            case USER_STATUS.NONE: 
                return(
                    <HeaderHome/>
                )

            case USER_STATUS.COMMON:
                return(
                    <HeaderLogged/>
                )
            
            case USER_STATUS.DOCTOR:
                return(
                    <HeaderLogged/>
                )
            default:
                return null
        }
    }
    
    return (
        <LayoutContainer>
            <RenderHeader/>
            {children}
        </LayoutContainer>
    )
}
