import React, { useCallback, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../../context/UserContext'
import HeaderHome from '../Headers/HeaderHome'
import HeaderLogged from '../Headers/HeaderLogged'
import { LayoutContainer, PageContainer } from './style'

const USER_STATUS = {
    NONE: 'none',
    DOCTOR: 'doctor',
    COMMON: 'common'
}

export default function LayoutPage({children}) {
    const {user, userLogout} = useContext(UserContext)
    const navigate = useNavigate()

    const getUserStatus = useCallback(()=>{
        if(!user) return USER_STATUS.NONE

        return USER_STATUS.COMMON 
    },[user])

    const handleLogout = () => {
        userLogout()
        navigate('/')
    }

    const RenderHeader = () =>{
        switch(getUserStatus()){
            case USER_STATUS.NONE: 
                return(
                    <HeaderHome/>
                )

            case USER_STATUS.COMMON:
                return(
                    <HeaderLogged user={user} logout={handleLogout} />
                )
            
            case USER_STATUS.DOCTOR:
                return(
                    <HeaderLogged user={user} logout={handleLogout} />
                )
            default:
                return null
        }
    }
    
    return (
        <LayoutContainer>
            <RenderHeader/>
            <PageContainer className='custom-scrollbar'>
                {children}
            </PageContainer>
        </LayoutContainer>
    )
}
