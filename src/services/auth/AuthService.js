import { Api } from "../api/ApiConfig"
import { ApiException } from "../api/ApiExpection"

const login = async (email, password) => {
    try {
        const { data } = await Api().post('auth/login',{
            email:email,
            password:password
        })
        
        localStorage.setItem("token", data.token)
        return {data: {...data.user, role:data.role}, error:false}
    } catch(err) {
        return new ApiException(err.message || 'Erro na tentativa de login.')
    }
}

const authUser = async (token) => {
    if(!token)
        return new ApiException('Erro token não existe')

    try {
        const { role, token, user } = await Api().post('/auth/refresh', { token })
        return {data: {...user, role}, error:false}
    } catch (e) {
        return new ApiException(err.message || "Erro na tentativa da Autenticação.");
    }
}

export const AuthService = {
    login,
    authUser
}