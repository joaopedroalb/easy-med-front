import { createContext, useCallback, useEffect, useState } from "react";
import { AuthService } from "../services/auth/AuthService";

export const UserContext = createContext()

export const UserProvider = ({children}) =>{

    const [loadingAuth, setLoadingAuth] = useState(true)
    const [user,setUser] = useState(null)

    const userLogin = (id,name,email,isDoctor=false) =>{
        setUser({id,name,email,isDoctor})
    } 

    const userIsDoctor = () => {
        if(!user) return false

        return user.isDoctor
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
    
            console.log(res.data)
            const {id, name, email} = res.data
            userLogin(id, name, email)
        } catch (e) {

        } finally {
            setLoadingAuth(false)
        }


        
    },[])

    useEffect(()=>{
        userAuth()
    },[])

    return(
        <UserContext.Provider value={{user,userLogin,userIsDoctor, loadingAuth}}>
            {children}
        </UserContext.Provider>
    )
}