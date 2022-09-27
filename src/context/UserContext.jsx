import { createContext, useState } from "react";
import { MOCK_USER } from "../util/mocks";

export const UserContext = createContext()

export const UserProvider = ({children}) =>{
    const [user,setUser] = useState(null)

    const [mocksInfo, setMocksInfo] = useState({
        general: MOCK_USER.general,
        patient: MOCK_USER.patient,
        login:MOCK_USER.login
    })

    //MOCKS FUNCTIONS 
    const mockInfoLogin = (email, password) => {
        setMocksInfo({...mocksInfo, login:{email, password}})
    }

    const setNewMockInfos = (newMockInfo) =>{
        setMocksInfo(newMockInfo)
    }


    //END MOCKS FUNCTIONS

    const userLogin = (id,name,login,email,isDoctor=false) =>{
        setUser({id,name,login,email,isDoctor})
    } 
    
    const userIsDoctor = () => {
        if(!user) return false

        return user.isDoctor
    }

    return(
        <UserContext.Provider value={{user,userLogin,userIsDoctor, mockInfoLogin, setNewMockInfos, mocksInfo}}>
            {children}
        </UserContext.Provider>
    )
}