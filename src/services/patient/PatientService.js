import { Api } from "../api/ApiConfig"
import { ApiException } from "../api/ApiExpection"

const create = async (newPatient) => {
    try{
        const { data } = await Api().post('/patients/',{
            name: newPatient.name,
            cpf: newPatient.cpf,
            email: newPatient.email,
            password: newPatient.password
        })
        localStorage.setItem('token',data.token)
        return {data: data.patient, error:false}
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
            profilePicture: updatePatient.profilePicture,
            height: updatePatient.height,
            gender: updatePatient.gender,
            birthDate: updatePatient.birthDate,
            weight: updatePatient.weight
        })
        return {data: data.patient, error:false}
    }catch(err){
        return new ApiException(err.message || 'Erro ao atualizar as informações do paciente.')
    }
}


const createAllergyById = async (idPatient, allergyData) => {
    try{
        const { data } = await Api().post(`/patients/allergies/${idPatient}`, {
            idAllergy: allergyData.idAllergy,
            symptoms: allergyData.symptoms
        })
        return {data: data, error:false}
    }catch(err){
        return new ApiException(err.message || 'Erro ao buscar paciente.')
    }
    
}

const getAllergiesById = async (idPatient) => {
    try{
        const { data } = await Api().get(`/patients/${idPatient}/allergies`)
        return {data: data.map(item=>{
            return {
                allergyId: item.allergyId,
                symptons: item.symptons,
                name: item.allergy.name
            }
        }), error:false}
    }catch(err){
        return new ApiException(err.message || 'Erro ao buscar paciente.')
    }
}

const deleteAllergiesById = async (idAllergy, idPatient) => {
    try{
        const { data } = await Api().delete(`/patients/allergies/${idPatient}`,{
           data: { idAllergy: idAllergy }
        })
        return {data:data, error:false}
    }catch(err){
        return new ApiException(err.message || 'Erro ao deletar doença')
    }
}

const createConditionByData = async (conditionData) => {
    try{
        const { data } = await Api().post(`/appointments/${conditionData.appointmentId}/conditions`,{
            name: conditionData.name,
            isInFamily: conditionData.isInFamily,
            description: conditionData.description
        })
        return {data: data, error:false}
    }catch(err){
        return new ApiException(err.message || 'Erro ao criar doença.')
    }
}

const getConditionsById = async (idPatient) => {
    try{
        const { data } = await Api().get(`/patients/${idPatient}/conditions`)
        return {data: data, error:false}
    }catch(err){
        return new ApiException(err.message || 'Erro ao buscar paciente.')
    }
}

const deleteConditionById = async (idCondition) => {
    try{
        const { data } = await Api().delete(`/conditions/${idCondition}`)
        return {data:data, error:false}
    }catch(err){
        return new ApiException(err.message || 'Erro ao deletar doença')
    }
}


const getMedicationsById = async (idPatient) => {
    try{
        const { data } = await Api().get(`/patients/${idPatient}/medicines`)
        return {data: data, error:false}
    }catch(err){
        return new ApiException(err.message || 'Erro ao buscar medicamento.')
    }
} 

const createMedicationsById = async (idPatient, medication) => {

    try{
        const { data } = await Api().post(`/patients/${idPatient}/medicines/${medication.medicineId}`,{
            frequency: medication.frequency,
            startedAt: medication.startedAt
        })
        return {data: data, error:false}
    }catch(err){
        return new ApiException(err.message || 'Erro ao criar medicamento.')
    }
} 


const getExamsByAppointments = async (appointments) => {
    try{

        let exams = []

        for (let i = 0; i<appointments.length ; i++) {
            const { data } = await Api().get(`/appointments/${appointments[i].id}/exams`)
            if (data.error)  
                throw new Error('Error ao buscar exame')
            exams = [...exams, ...data]
        }
        return {data: exams, error:false}
    }catch(err){
        return new ApiException(err.message || 'Erro ao buscar Exame por Consultas.')
    }
} 

const createExam = async (examData) => {
    try{
        const { data } = await Api().post(`/appointments/${examData.appointmentId}/exams`,{
            examType: examData.examType,
            result: examData.result,
            location: examData.location,
        })
        return {data: data, error:false}
    }catch(err){
        return new ApiException(err.message || 'Erro ao criar exame.')
    }
}

const deleteExamById = async (idExam) => {
    try{
        const { data } = await Api().delete('/patients/exams',{
           data: { idExam: idExam }
        })
        return {data:data, error:false}
    }catch(err){
        return new ApiException(err.message || 'Erro ao deletar exame')
    }
}

const editExam = async (examEdit) => {
    try{
        const { data } = await Api().patch('/patients/exams',{...examEdit})
        return {data:data, error:false}
    }catch(err){
        return new ApiException(err.message || 'Erro ao editar exame')
    }
}

const getDiagnosesById = async (idPatient) => {
    try{
        const { data } = await Api().get(`/patients/diagnoses/${idPatient}`)
        return {data: data, error:false}
    }catch(err){
        return new ApiException(err.message || 'Erro ao buscar diagnostico.')
    }
}

const createDiagnosis = async (newDiagnose) => {
    try{
        const { data } = await Api().post('/patients/diagnoses',{...newDiagnose})
        return {data: data, error:false}
    }catch(err){
        return new ApiException(err.message || 'Erro ao criar diagnostico.')
    }
}

const getAppointmentsById = async (idPatient) => {
    try{
        const { data } = await Api().get(`/patients/${idPatient}/appointments`)
        return {data: data, error:false}
    }catch(err){
        return new ApiException(err.message || 'Erro ao buscar consultas.')
    }
}

export const PatientService = {
    getById,
    create,
    updateById,

    getAllergiesById,
    createAllergyById,
    deleteAllergiesById,

    getConditionsById,
    createConditionByData,
    deleteConditionById,

    getMedicationsById,
    createMedicationsById,
    
    getExamsByAppointments,
    createExam,
    deleteExamById,
    editExam,

    getDiagnosesById,
    createDiagnosis,

    getAppointmentsById
}