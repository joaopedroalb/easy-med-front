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
import ModalCreateDiagnoses from './components/ModalCreateDiagnoses'
import { ImageContainer, ProfileBg } from './style'

const IMAGE_DEFAULT = 'https://cdn.discordapp.com/attachments/469630958811742212/1022924520002158624/unknown.png'

export default function PatientByDoctor() {
    const {user} = useContext(UserContext)
    const {id} = useParams()

    const [photo, setPhoto] = useState(null)
    const onError = () => setPhoto(IMAGE_DEFAULT);

    const [loading, setLoading] = useState(true)
    const [patient, setPatient] = useState(null)

    const [medicationsDefault, setMedicationsDefault] = useState([])

    const [medications, setMedications] = useState([])
    const [allergies, setAllergies] = useState([])
    const [conditions, setConditions] = useState([])
    const [diagnoses,setDiagnoses] = useState([])
    const [exams, setExams] = useState([])

    const [diagModal, setDiagModal] = useState(false)
    

    const handleOpenModal = () => setDiagModal(true)
    const handleCloseModal = () => setDiagModal(false)

    const createDiagnone = async (newDiagnose) => {
        const newDiagnoseResult = await PatientService.createDiagnosis(newDiagnose)

        if(!newDiagnoseResult.error)
            await getUserInfos(id)
    }

    const handleAddDiagnose =  async (diagnose) => {
        await createDiagnone(diagnose)
    }

    const handleAddMedicationByList = async (newMedications) => {
        await newMedications.forEach(async newMedication=>{
            try{
                await PatientService.createMedicationsById(id, newMedication)
            }catch(err){
                console.log('não adicionou o medicamento')
            }
        })
        await getUserInfos(id)
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
    
        const examsResult  = await PatientService.getExamsById(id)
        if(!examsResult.error) setExams(examsResult.data)

        const diagnosesResult = await PatientService.getDiagnosesById(id)
        if(!diagnosesResult.error) setDiagnoses(diagnosesResult.data)
      }
    

    const getData = useCallback(async ()=>{
       const result = await PatientService.getById(id)
       if(result.error) 
        return null

       setPatient(result.data)
       getUserInfos(result.data.id)
       getOptionsList()
       setPhoto(result.data.pictureUrl)

       setLoading(false)
       
    },[])

    const getInfoListDataDiagnose = () => {
        return diagnoses.map(item=>{
            const diagnosesExams = item.relatedExams.map(x=> x.idExam)
            const listExamData = exams.filter(exam=> diagnosesExams.includes(exam.id))
            return {...item, examList:listExamData}
        })
    }
    

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
                <ModalCreateDiagnoses 
                    open={diagModal} 
                    handleClose={handleCloseModal} 
                    handleCreateDiagnose={handleAddDiagnose} 
                    handleCreateMedications={handleAddMedicationByList}
                    idDoctor={user.id}
                    idPatient={id} 
                    exams={exams}
                    medications={medicationsDefault}
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
                    title='Doenças Hereditárias'
                    insertTitle='Adicionar nova Doença Hereditária'
                    typeInfo={INFO_TYPES.HEREDITARY}
                    list={conditions}
                    hasDescription={false}
                    theme='dark'
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
                    list={medications}
                    hasDescription={true}
                    theme='dark'
                />

                <InfoList 
                    title='Exames'
                    insertTitle='Adicionar novo Exame'
                    typeInfo={INFO_TYPES.EXAM}
                    list={exams}
                    hasDescription={true}
                    theme='white'
                />

                <InfoList 
                    title='Diagnósticos'
                    insertTitle='Adicionar novo diagnóstico'
                    typeInfo={INFO_TYPES.DIAGNOSES}
                    list={getInfoListDataDiagnose()}
                    isInsert
                    hasDescription
                    theme='dark'
                    crudActions={{
                        handleCreate: handleOpenModal,
                    }}
                />
            </ProfileBg>
        </LayoutPage>
    )
}
