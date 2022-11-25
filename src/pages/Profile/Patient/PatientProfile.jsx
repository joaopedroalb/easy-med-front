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
  const [diagnoses,setDiagnoses] = useState([])

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

    const examsResult  = await PatientService.getExamsById(user.id)
    if(!examsResult.error) setExams(examsResult.data)

    const diagnosesResult = await PatientService.getDiagnosesById(user.id)
    if(!diagnosesResult.error) setDiagnoses(diagnosesResult.data)
  }

  const getInfoListDataDiagnose = () => {
    return diagnoses.map(item=>{
        const diagnosesExams = item.relatedExams.map(x=> x.idExam)
        const listExamData = exams.filter(exam=> diagnosesExams.includes(exam.id))
        return {...item, examList:listExamData}
    })
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

  const openModalByType = (type) => {
    setInfoModal({open:true, type:type})
  }

  const closeModalType = () => setInfoModal({open:false, type:''})

  const handleDeleteInfo = async (id, type) => {
    if(type === INFO_TYPES.HEREDITARY){
      const result = await PatientService.deleteConditionById(id)
      if(!result.error) await getUserInfos()
      return !result.error
    }

    if(type === INFO_TYPES.ALLERGY){
      const result = await PatientService.deleteAllergiesById(id, user.id)
      if(!result.error) await getUserInfos()
      return !result.error
    }

    if(type === INFO_TYPES.EXAM){
      const result = await PatientService.deleteExamById(id)
      if(!result.error) await getUserInfos()
      return !result.error
    }
  }
  
  const handleUpdate = (id,type) => {
   
  }

  const handleCreate = async (type, data) => {
    if(type === INFO_TYPES.EXAM){
      const newExam = {...data, idPatient: user.id}
      const result = await PatientService.createExam(newExam)
      if(!result.error) await getUserInfos()
      return true
    }

    if(type === INFO_TYPES.ALLERGY){
      const result = await PatientService.createAllergyById(user.id, data)
      if(!result.error) await getUserInfos()
      return true
    }

    if(type === INFO_TYPES.HEREDITARY){
      const result = await PatientService.createConditionById(user.id, data)
      if(!result.error) await getUserInfos()
      return true
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
              photoUrl={userData.pictureUrl}
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
          title='Doenças Hereditárias'
          insertTitle='Adicionar nova Doença Hereditária'
          typeInfo={INFO_TYPES.HEREDITARY}
          list={conditions}
          isDelete
          crudActions={{
            handleCreate: openModalByType,
            handleDelete: handleDeleteInfo,
            handleUpdate: handleUpdate
          }}
          hasDescription={false}
          theme='dark'
        />

        <InfoList 
          title='Alergias'
          insertTitle='Adicionar nova Alergia'
          typeInfo={INFO_TYPES.ALLERGY}
          list={allergies}
          isDelete
          isEdit
          crudActions={{
            handleCreate: openModalByType,
            handleDelete: handleDeleteInfo,
            handleUpdate: handleUpdate
          }}
          hasDescription
          theme='white'
        />

        <InfoList 
          title='Medicamentos'
          insertTitle='Adicionar novo Medicamento'
          typeInfo={INFO_TYPES.MEDICATION}
          list={medications}
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
          isEdit
          isDelete
          crudActions={{
            handleCreate: openModalByType,
            handleDelete: handleDeleteInfo,
            handleUpdate: handleUpdate
          }}
          hasDescription={true}
          theme='white'
        />

        <InfoList 
            title='Diagnósticos'
            insertTitle=''
            typeInfo={INFO_TYPES.DIAGNOSES}
            list={getInfoListDataDiagnose()}
            hasDescription
            theme='dark'
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