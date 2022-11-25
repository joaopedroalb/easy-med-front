import { createContext, useCallback, useEffect, useState } from "react";
import { AuthService } from "../services/auth/AuthService";

export const UserContext = createContext()

export const UserProvider = ({children}) =>{

    const [loadingAuth, setLoadingAuth] = useState(true)
    const [user,setUser] = useState(null)

    const userLogin = (id,name,email,isDoctor=false, pictureUrl) =>{
        setUser({id,name,email,isDoctor,pictureUrl})
    } 

    const userIsDoctor = () => {
        if(!user) return false

        return user.isDoctor
    }

    const userLogout = () => {
        setUser(null)
        localStorage.removeItem('token')
    }

    const userAuth = useCallback(async () => {
        const token = localStorage.getItem('token')

        if(!token){
            setLoadingAuth(false)
            return null
        } 

        try {
            const res = await AuthService.authUser(token)

            if(res.error) 
                return null
                
            const {id, name, email, pictureUrl,role} = res.data
            const isDoctor = !!role && role==='doctor' 

            userLogin(id, name, email,isDoctor,pictureUrl)
        } catch (e) {

        } finally {
            setLoadingAuth(false)
        }


        
    },[])

    useEffect(()=>{
        userAuth()
    },[])

    return(
        <UserContext.Provider value={{user,userLogin,userIsDoctor, loadingAuth, userLogout}}>
            {children}
        </UserContext.Provider>
    )
}