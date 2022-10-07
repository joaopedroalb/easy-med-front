import { Api } from "../api/ApiConfig"
import { ApiException } from "../api/ApiExpection"

const login = async (email, password) => {
    console.log({email, password})
    try {
        const {data} = await Api().post('/login',{
            email:email,
            password:password
        })
        return {data: data, error:false}
    } catch(err) {
        return new ApiException(err.message || 'Erro na tentativa de login.')
    }
}

export const AuthService = {
    login
}