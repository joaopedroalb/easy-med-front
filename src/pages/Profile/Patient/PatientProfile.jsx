import React from 'react';
import { useState, useCallback, useEffect, useContext } from 'react';
import LayoutPage from '../../../components/layout/LayoutPage';
import HeaderProfile from '../../../components/layout/Profile/HeaderProfile';
import { UserContext } from '../../../context/UserContext';
import { PatientService } from '../../../services/patient/PatientService';
import FormsPatient from './components/FormsPatient';
import ModalCreateInfo from './components/ModalCreateInfo';
import { useDisableBodyScroll } from '../../../hooks/useDisableBodyScroll';
import InfoList from './components/InfoList';
import { INFO_TYPES } from '../../../util/consts/types';
import { CommonService } from '../../../services/common/CommonService';
import Loading from '../../../components/common/Loading';


export default function PatientProfile() {
  const {user} = useContext(UserContext)

  const [userData,setUserData] = useState(null)
  const [loading, setLoading] = useState(true)

  const [allergyList, setAllergyList] = useState([])
  const [medicationList, setMedicationList] = useState([])
  const [conditionList, setConditionList] = useState([])
  
  const [medications, setMedications] = useState([])
  const [allergies, setAllergies] = useState([])
  const [conditions, setConditions] = useState([])
  const [exams, setExams] = useState([])
  
  const [infoModal, setInfoModal] = useState({
                                              open:false,
                                              type:''
                                            })

  useDisableBodyScroll(infoModal.open)

  const getOptionsList = async () => {
    const medicationListResult = await CommonService.getMedications()
    if(!medicationListResult.error) setMedicationList(medicationListResult.data)

    const allergyListResult = await CommonService.getAllergies()
    if(!allergyListResult.error) setAllergyList(allergyListResult.data)

    const conditionsListResult = await CommonService.getConditions()
    if(!conditionsListResult.error) setConditionList(conditionsListResult.data)
  }

  const getUserInfos = async () => {
    const medicationResult = await PatientService.getMedicationsById(user.id)
    if(!medicationResult.error) setMedications(medicationResult.data)

    const allergiesResult = await PatientService.getAllergiesById(user.id)
    if(!allergiesResult.error) setAllergies(allergiesResult.data)

    const conditionsResult  = await PatientService.getConditionsById(user.id)
    if(!conditionsResult.error) setConditions(conditionsResult.data)

    const appointmentsResult = await PatientService.getAppointmentsById(user.id)
    if(!appointmentsResult.error) {
        const examsResult  = await PatientService.getExamsByAppointments(appointmentsResult.data)
        if(!examsResult.error) setExams(examsResult.data)
    }     
  }

  const getData = useCallback(async ()=>{
    const result = await PatientService.getById(user.id)
    if(result.error) {
        setUserData(null) 
        setLoading(false)
        return
    }
    setUserData(result.data)

    try{
      getUserInfos()
      getOptionsList()

    }catch(err){

    }finally{
      setLoading(false)
    }

  },[user])

  useEffect(()=>{
    getData()
},[])

const MEDICATION_LIST_CARD = medications.map(med=>{
  const MEDICATION_FILTER = medicationList.filter(x=> x.id === med.medicineId)[0]
  return {
      ...med, 
      name: MEDICATION_FILTER ? MEDICATION_FILTER.name : 'Não Definido',
      id: med.medicineId,
  }
})

const ALLERGIES_LIST_CARD = allergies.map(item=>{
  return {...item, id: item.allergyId}
})

  const openModalByType = (type) => {
    setInfoModal({open:true, type:type})
  }

  const closeModalType = () => setInfoModal({open:false, type:''})

  const handleDeleteInfo = async (id, type) => {
    if(type === INFO_TYPES.CONDITION){
      const result = await PatientService.deleteConditionById(id)
      if(!result.error) await getUserInfos()
      return !result.error
    }

    if(type === INFO_TYPES.ALLERGY){
      const result = await PatientService.deleteAllergiesById(user.id, id)
      if(!result.error) await getUserInfos()
      return !result.error
    }

    if(type === INFO_TYPES.MEDICATION)  {
      const result = await PatientService.deleteMedicationById(user.id, id)
      if(!result.error) await getUserInfos()
      return !result.error
    }

  }
  
  const handleUpdate = async (type, newValue) => {
   if(type === INFO_TYPES.EXAM){
      const {createdAt, id, ...restExam} = newValue
      const result = await PatientService.editExam({idExam:id, ...restExam})
      if(!result.error) await getUserInfos()
      return !result.error
   }
    
  }

  const handleCreate = async (type, data) => {
    if(type === INFO_TYPES.ALLERGY){
      const result = await PatientService.createAllergyById(user.id, data)
      if(!result.error) await getUserInfos()
      return !result.error
    }

  }

  const RenderBody = () => {
  
    if(loading) 
      return <Loading />

    if(userData === null)
      return <div>Error</div>

    return (
      <>
        <HeaderProfile
              name={userData.name}
              hasBack={false}
              photoUrl={userData.profilePicture}
          />

        <FormsPatient userData={userData} changeUserData={setUserData}/>
        <ModalCreateInfo 
          open={infoModal.open}
          type={infoModal.type}
          handleClose={closeModalType}
          handleCreate={handleCreate}
          allergies={allergyList}
          conditions={conditionList}
        />
        <InfoList 
          title='Doenças'
          insertTitle='Adicionar nova Doença'
          typeInfo={INFO_TYPES.CONDITION}
          list={conditions}
          isDelete
          crudActions={{
            handleDelete: handleDeleteInfo,
          }}
          hasDescription
          theme='dark'
        />

        <InfoList 
          title='Alergias'
          insertTitle='Adicionar nova Alergia'
          typeInfo={INFO_TYPES.ALLERGY}
          list={ALLERGIES_LIST_CARD}
          isDelete
          crudActions={{
            handleCreate: openModalByType,
            handleDelete: handleDeleteInfo,
            handleUpdate: handleUpdate
          }}
          hasDescription
          theme='white'
          isInsert
        />

        <InfoList 
          title='Medicamentos'
          insertTitle='Adicionar novo Medicamento'
          typeInfo={INFO_TYPES.MEDICATION}
          list={MEDICATION_LIST_CARD}
          isDelete
          crudActions={{
            handleCreate: openModalByType,
            handleDelete: handleDeleteInfo,
            handleUpdate: handleUpdate
          }}
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
      </>
    )
    
  }

  return (
    <LayoutPage>
        <RenderBody />
    </LayoutPage>
  )
}