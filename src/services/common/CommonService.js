import { Api } from "../api/ApiConfig"
import { ApiException } from "../api/ApiExpection"


const getMedications = async () => {
    try{
        const { data } = await Api().get('/medicines')
        return {data: data, error:false}
    }catch(err){
        return new ApiException(err.message || 'Erro ao buscar lista de medicamentos.')
    }
}

const getConditions = async () => {
    try{
        const { data } = await Api().get('/patients/conditions/list')
        return {data: data, error:false}
    }catch(err){
        return new ApiException(err.message || 'Erro ao buscar lista de doenças.')
    }
}

const getAllergies = async () => {
    try{
        const { data } = await Api().get('/patients/allergies/list')
        return {data: data, error:false}
    }catch(err){
        return new ApiException(err.message || 'Erro ao buscar lista de alergias.')
    }
}



export const CommonService = {
    getMedications,
    getConditions,
    getAllergies
}