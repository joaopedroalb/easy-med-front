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
        const { data } = await Api().get(`/patients/allergies/${idPatient}`)
        return {data: data, error:false}
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

const createConditionById = async (idPatient, conditionData) => {
    try{
        const { data } = await Api().post(`/patients/conditions/${idPatient}`,{
            idCondition: conditionData.idCondition,
            isActive: conditionData.isActive,
            isInFamily: conditionData.isInFamily,
            symptoms: conditionData.symptoms,
            startedAt: conditionData.startedAt
        })
        return {data: data, error:false}
    }catch(err){
        return new ApiException(err.message || 'Erro ao criar doença.')
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

const deleteConditionById = async (idCondition) => {
    try{
        const { data } = await Api().delete('/patients/conditions',{
           data: { idRelation: idCondition }
        })
        return {data:data, error:false}
    }catch(err){
        return new ApiException(err.message || 'Erro ao deletar doença')
    }
}


const getMedicationsById = async (idPatient) => {
    try{
        const { data } = await Api().get(`/patients/medications/${idPatient}`)
        return {data: data, error:false}
    }catch(err){
        return new ApiException(err.message || 'Erro ao buscar medicamento.')
    }
} 

const createMedicationsById = async (idPatient, medication) => {
    try{
        const { data } = await Api().post(`/patients/medications/${idPatient}`,{...medication})
        return {data: data, error:false}
    }catch(err){
        return new ApiException(err.message || 'Erro ao criar medicamento.')
    }
} 


const getExamsById = async (idPatient) => {
    try{
        const { data } = await Api().get(`/patients/exams/${idPatient}`)
        return {data: data, error:false}
    }catch(err){
        return new ApiException(err.message || 'Erro ao buscar Exame.')
    }
} 

const createExam = async (examData) => {
    try{
        const { data } = await Api().post('/patients/exams',{
            idPatient: examData.idPatient,
            idDoctor: examData.idDoctor,
            examType: examData.examType,
            location: examData.location,
            summary: examData.description,
            date:  examData.date
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

export const PatientService = {
    getById,
    create,
    updateById,

    getAllergiesById,
    createAllergyById,
    deleteAllergiesById,

    getConditionsById,
    createConditionById,
    deleteConditionById,

    getMedicationsById,
    createMedicationsById,
    
    getExamsById,
    createExam,
    deleteExamById,
    editExam,

    getDiagnosesById,
    createDiagnosis
}