import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'

export default function ProtectedRoute({children}) {
    const {user} = useContext(UserContext)
    if(user === null)  return <Navigate to="/"/>
    
    return <>{children}</>
}