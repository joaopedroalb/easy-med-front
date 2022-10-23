import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'
import Loading from '../common/Loading'

export default function ProtectedRoute({children}) {
    const {user, loadingAuth} = useContext(UserContext)

    if (loadingAuth) return <Loading/>
    if(user === null)  return <Navigate to="/"/>
    
    return <>{children}</>
}