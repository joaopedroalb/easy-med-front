import { Api } from "../api/ApiConfig"
import { ApiException } from "../api/ApiExpection"


const getPatientList = async () => {
    try{
        const { data } = await Api().get('/patients/')
        return {data: data.filter(x=>x.name!==''), error:false}
    }catch(err){
        return new ApiException(err.message || 'Erro ao buscar lista de medicamentos.')
    }
}

const getById = async (doctorId) => {
    try {
        const {data} = await Api().get(`/doctors/${doctorId}`)
        return {data: data, error:false} 
    } catch {
        return new ApiException(err.message || 'Erro ao buscar doutor.')
    }
}

const getSpecialties = async () => {
    try {
        const {data} = await Api().get('/doctors/specialties')
        return {data: data, error:false}
    } catch(err) {
        return new ApiException(err.message || 'Erro ao buscar lista de especialidades.')
    }
}

const updateById = async (doctorId, doctorUpdated) => {
    try {
        const { data } = await Api().patch(`/doctors/${doctorId}`,{
            name: doctorUpdated.name,
            email: doctorUpdated.email,
            profilePicture: doctorUpdated.profilePicture,
            phone: doctorUpdated.phone,
            specialtyId: doctorUpdated.specialtyId,
            description: doctorUpdated.description,
            insurance: doctorUpdated.insurance,
        })

        return {data: data, error: false}
     } catch {
        return new ApiException(err.message || 'Erro ao atualizar dados do medico.')
     }
}


export const DoctorService = {
    getPatientList,
    getSpecialties,
    updateById,
    getById
}