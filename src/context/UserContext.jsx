import { createContext, useState } from "react";

export const UserContext = createContext()

export const UserProvider = ({children}) =>{
    const [user,setUser] = useState(null)

    const userLogin = (id,name,login,email,isDoctor=false) =>{
        setUser({id,name,login,email,isDoctor})
    } 
    
    const userIsDoctor = () => {
        if(!user) return false

        return user.isDoctor
    }

    return(
        <UserContext.Provider value={{user,userLogin,userIsDoctor}}>
            {children}
        </UserContext.Provider>
    )
}