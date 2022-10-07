import axios from 'axios'

export const Api = () => {
    return axios.create({
        baseURL:'https://easymed-api.herokuapp.com/api/v1',
    })
}