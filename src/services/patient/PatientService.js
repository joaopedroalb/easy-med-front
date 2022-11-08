import { Api } from "../api/ApiConfig"
import { ApiException } from "../api/ApiExpection"

const create = async (newPatient) => {
    try{
        const { data } = await Api().post('/patients/signup',{
            name: newPatient.name,
            cpf: newPatient.cpf,
            phone: newPatient.phone,
            email: newPatient.email,
            password: newPatient.password
        })
        localStorage.setItem('token',data.token)
        return {data: data, error:false}
    }catch(err){
        return new ApiException(err.message || 'Erro ao criar paciente.')
    }
}

const getById = async (idPatient) => {
    try{
        const { data } = await Api().get(`/patients/${idPatient}`)
        return {data: data, error:false}
    }catch(err){
        return new ApiException(err.message || 'Erro ao buscar paciente.')
    }
}

const updateById = async (idPatient, updatePatient) => {
    try{
        const { data } = await Api().patch(`/patients/${idPatient}`,{
            name: updatePatient.name,
            cpf: updatePatient.cpf,
            phone: updatePatient.phone,
            email: updatePatient.email,
            password: updatePatient.password,
            pictureUrl: updatePatient.pictureUrl,
            height: updatePatient.height,
            gender: updatePatient.gender,
            birthDate: updatePatient.birthDate,
            weight: updatePatient.weight
        })
        return {data: data, error:false}
    }catch(err){
        return new ApiException(err.message || 'Erro ao atualizar as informações do paciente.')
    }
}

const getAllergiesById = async (idPatient) => {
    try{
        const { data } = await Api().get(`/patients/allergies/${idPatient}`)
        return {data: data, error:false}
    }catch(err){
        return new ApiException(err.message || 'Erro ao buscar paciente.')
    }
    
}

const getConditionsById = async (idPatient) => {
    try{
        const { data } = await Api().get(`/patients/conditions/${idPatient}`)
        return {data: data, error:false}
    }catch(err){
        return new ApiException(err.message || 'Erro ao buscar paciente.')
    }
}

const getMedicationsById = async (idPatient) => {
    try{
        const { data } = await Api().get(`/patients/medications/${idPatient}`)
        return {data: data, error:false}
    }catch(err){
        return new ApiException(err.message || 'Erro ao buscar paciente.')
    }
}   

export const PatientService = {
    getById,
    create,
    updateById,
    getAllergiesById,
    getConditionsById,
    getMedicationsById
}