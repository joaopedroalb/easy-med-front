import axios from 'axios'

export const Api = () => {
    const baseUrl = localStorage.getItem('baseUrl')

    return axios.create({
        baseURL:baseUrl,
    })
}