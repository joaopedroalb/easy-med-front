import { Api } from "../api/ApiConfig"
import { ApiException } from "../api/ApiExpection"


const getPatientList = async () => {
    try{
        const { data } = await Api().get('/patients/list')
        return {data: data, error:false}
    }catch(err){
        return new ApiException(err.message || 'Erro ao buscar lista de medicamentos.')
    }
}


export const DoctorService = {
    getPatientList
}