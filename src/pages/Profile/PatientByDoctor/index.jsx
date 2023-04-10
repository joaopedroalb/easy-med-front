import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { useCallback } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../../../components/common/Loading'
import LayoutPage from '../../../components/layout/LayoutPage'
import { UserContext } from '../../../context/UserContext'
import { CommonService } from '../../../services/common/CommonService'
import { PatientService } from '../../../services/patient/PatientService'
import { INFO_TYPES } from '../../../util/consts/types'
import { MaskService } from '../../../util/maskService'
import InfoList from '../Patient/components/InfoList'
import { BtnAction, ImageContainer, ProfileBg } from './style'
import ModalCreateCondition from './components/ModalCreateCondition'
import ModalCreateMedication from './components/ModalCreateMedication'
import ModalCreateExam from './components/ModalCreateExam'

const IMAGE_DEFAULT = 'https://cdn.discordapp.com/attachments/469630958811742212/1022924520002158624/unknown.png'

export default function PatientByDoctor() {
    const {id} = useParams()

    const [photo, setPhoto] = useState(null)
    const onError = () => setPhoto(IMAGE_DEFAULT);

    const [loading, setLoading] = useState(true)
    const [patient, setPatient] = useState(null)

    const [medicationsDefault, setMedicationsDefault] = useState([])

    const [medications, setMedications] = useState([])
    const [allergies, setAllergies] = useState([])
    const [conditions, setConditions] = useState([])
    const [exams, setExams] = useState([])
    const [appointments, setAppointments] = useState([])

    const [conditionModal, setConditionModal] = useState(false)
    const [medicationModal, setMedicationModal] = useState(false)
    const [examModal, setExamModal] = useState(false)


    const handleCreateCondition = async (newCondition) => {
        const result = await PatientService.createConditionByData(newCondition)

        if(result.error) return null

        setConditions([...conditions, result.data])
    }

    const handleCreateMedication = async (newMedication) => {
        const result = await PatientService.createMedicationsById(patient.id, newMedication)
        if(result.error) return null 
        setMedications([...medications, result.data])
    }

    const handleCreateExam = async (newExam) => {
        const result = await PatientService.createExam(newExam)
        if(result.error) return null
        setExams([...exams, result.data])
    }

    const getOptionsList = async () => {
        const medicationListResult = await CommonService.getMedications()
        if(!medicationListResult.error) setMedicationsDefault(medicationListResult.data)
    }

    const getUserInfos = async (id) => {
        const medicationResult = await PatientService.getMedicationsById(id)
        if(!medicationResult.error) setMedications(medicationResult.data)
    
        const allergiesResult = await PatientService.getAllergiesById(id)
        if(!allergiesResult.error) setAllergies(allergiesResult.data)
    
        const conditionsResult  = await PatientService.getConditionsById(id)
        if(!conditionsResult.error) setConditions(conditionsResult.data)

        const appointmentsResult = await PatientService.getAppointmentsById(id)
        if(!appointmentsResult.error) {
            setAppointments(appointmentsResult.data)
            const examsResult  = await PatientService.getExamsByAppointments(appointmentsResult.data)
            if(!examsResult.error) setExams(examsResult.data)
        }        
      }
    

    const getData = useCallback(async ()=>{
        const result = await PatientService.getById(id)
        if(result.error) 
            return null

        await getOptionsList()
        setPatient(result.data)
        getUserInfos(result.data.id)
        setPhoto(result.data.profilePicture)

        setLoading(false)
       
    },[])

    const MEDICATION_LIST_CARD = medications.map(med=>{
        const MEDICATION_FILTER = medicationsDefault.filter(x=> x.id === med.medicineId)[0]
        return {
            ...med, 
            name: MEDICATION_FILTER ? MEDICATION_FILTER.name : 'Não Definido'
        }
    })
    

    useEffect(()=>{
        getData()
    },[])

    if(loading)
        return (
            <Loading/>
        )

    if(!patient)
        return (
            <LayoutPage>
                Usuario não encontrado
            </LayoutPage>
        )
    return (
        <LayoutPage>
            <ProfileBg>
                <ModalCreateCondition 
                    open={conditionModal} 
                    handleClose={()=>setConditionModal(false)} 
                    handleCreate={handleCreateCondition} 
                    appointments={appointments} 
                />
                <ModalCreateMedication 
                    open={medicationModal} 
                    handleClose={()=>setMedicationModal(false)} 
                    handleCreate={handleCreateMedication} 
                    medications={medicationsDefault} 
                />
                <ModalCreateExam 
                    open={examModal} 
                    handleClose={()=>setExamModal(false)} 
                    handleCreate={handleCreateExam} 
                    appointments={appointments} 
                />
                <div className='info-container'>
                   <ImageContainer>
                        <img src={photo ? photo : IMAGE_DEFAULT} onError={onError}/>
                   </ImageContainer>
                   <div className='info-box'>
                        <h1 className='title'>{patient.name}</h1>
                        <div className='row-item'>
                            <p><strong>Telefone:</strong> {MaskService.PhoneConverter(patient.phone)}</p>
                            <p><strong>Altura:</strong> {patient.height}</p>
                        </div>
                        <div className='row-item'>
                            <p><strong>CPF:</strong> {MaskService.CpfConverter(patient.cpf)}</p>
                            <p><strong>Peso:</strong> {patient.weight}Kg</p>
                        </div>
                   </div>
                </div>
                <InfoList 
                    title='Doenças'
                    insertTitle='Adicionar nova Doença'
                    typeInfo={INFO_TYPES.CONDITION}
                    list={conditions}
                    hasDescription
                    theme='dark'
                    footer={<BtnAction onClick={()=>setConditionModal(true)}>Adicionar nova Doença</BtnAction>}
                />
                <InfoList 
                    title='Alergias'
                    insertTitle='Adicionar nova Alergia'
                    typeInfo={INFO_TYPES.ALLERGY}
                    list={allergies}
                    hasDescription
                    theme='white'
                />

                <InfoList 
                    title='Medicamentos'
                    insertTitle='Adicionar novo Medicamento'
                    typeInfo={INFO_TYPES.MEDICATION}
                    list={MEDICATION_LIST_CARD}
                    hasDescription={true}
                    theme='dark'
                    footer={<BtnAction onClick={()=>setMedicationModal(true)}>Adicionar novo Medicamento</BtnAction>}
                />

                <InfoList 
                    title='Exames'
                    insertTitle='Adicionar novo Exame'
                    typeInfo={INFO_TYPES.EXAM}
                    list={exams}
                    hasDescription={true}
                    theme='white'
                    footer={<BtnAction onClick={()=>setExamModal(true)}>Adicionar um novo exame</BtnAction>}
                />
            </ProfileBg>
        </LayoutPage>
    )
}
