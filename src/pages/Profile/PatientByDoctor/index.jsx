import React from 'react'
import { useState } from 'react'
import { useCallback } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import LayoutPage from '../../../components/layout/LayoutPage'
import { PatientService } from '../../../services/patient/PatientService'
import { INFO_TYPES } from '../../../util/consts/types'
import { MaskService } from '../../../util/maskService'
import InfoList from '../Patient/components/InfoList'
import { ImageContainer, ProfileBg } from './style'

export default function PatientByDoctor() {
    const [patient, setPatient] = useState(null)

    const [medications, setMedications] = useState([])
    const [allergies, setAllergies] = useState([])
    const [conditions, setConditions] = useState([])
    const [diagnoses,setDiagnoses] = useState([])
    const [exams, setExams] = useState([])

    const {id} = useParams()

    const getUserInfos = async (id) => {

        console.log(id)
        const medicationResult = await PatientService.getMedicationsById(id)
        if(!medicationResult.error) setMedications(medicationResult.data)
    
        const allergiesResult = await PatientService.getAllergiesById(id)
        if(!allergiesResult.error) setAllergies(allergiesResult.data)
    
        const conditionsResult  = await PatientService.getConditionsById(id)
        if(!conditionsResult.error) setConditions(conditionsResult.data)
    
        const examsResult  = await PatientService.getExamsById(id)
        if(!examsResult.error) setExams(examsResult.data)
      }
    

    const getData = useCallback(async ()=>{
       const result = await PatientService.getById(id)
       if(result.error) 
        return null

       setPatient(result.data)
       getUserInfos(result.data.id)

       console.log(result.data)
    },[])
    

    useEffect(()=>{
        getData()
    },[])

    if(!patient)
        return (
            <LayoutPage>
                Usuario não encontrado
            </LayoutPage>
        )
    return (
        <LayoutPage>
            <ProfileBg>
                <div className='info-container'>
                   <ImageContainer>
                        <img src={patient.pictureUrl} />
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
                    list={diagnoses}
                    isEdit
                    hasDescription={false}
                    theme='dark'
                />
            </ProfileBg>
        </LayoutPage>
    )
}
