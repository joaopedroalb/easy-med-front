import { createContext, useEffect } from "react";

export const ConfigContext = createContext()

export const ConfigProvidder = ({children}) =>{

    const handleChangeUrlLocalStorage = (newUrl) => {
        localStorage.setItem('baseUrl', newUrl)
    }

    useEffect(()=>{
        if(!localStorage.getItem('baseUrl'))
            handleChangeUrlLocalStorage('https://easymed.onrender.com/api/v1')
    },[])

    return(
        <ConfigContext.Provider value={{handleChangeUrlLocalStorage}}>
            {children}
        </ConfigContext.Provider>
    )
}