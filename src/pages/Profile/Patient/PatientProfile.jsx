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
import ModalEditExam from './components/ModalEditExam';


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

  const [editExamModal, setEditExamModal] = useState({
                                                        open:false,
                                                        exam:null
                                                      })

  useDisableBodyScroll(infoModal.open || editExamModal.open)

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

  const closeModalEditExam = () => {
    setEditExamModal({open:false, exam:null})
  }

  const closeModalType = () => setInfoModal({open:false, type:''})

  const handleDeleteInfo = async (id, type) => {
    if(type === INFO_TYPES.CONDITION){
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

  const handleUpdteEditExam = (editExam) => {
    setEditExamModal({open:true, exam:editExam})
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
    if(type === INFO_TYPES.EXAM){
      const newExam = {...data, idPatient: user.id}
      const result = await PatientService.createExam(newExam)
      if(!result.error) await getUserInfos()
      return !result.error
    }

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
        <ModalEditExam 
          open={editExamModal.open} 
          handleClose={closeModalEditExam} 
          exam={editExamModal.exam} 
          handleCreate={(value)=>{
            handleUpdate(INFO_TYPES.EXAM,value)
            closeModalEditExam()
          }} 
          handleCancel={closeModalEditExam}
        />
        <InfoList 
          title='Doenças Hereditárias'
          insertTitle='Adicionar nova Doença Hereditária'
          typeInfo={INFO_TYPES.CONDITION}
          list={conditions}
          isDelete
          crudActions={{
            handleCreate: openModalByType,
            handleDelete: handleDeleteInfo,
            handleUpdate: handleUpdate
          }}
          hasDescription
          theme='dark'
        />

        <InfoList 
          title='Alergias'
          insertTitle='Adicionar nova Alergia'
          typeInfo={INFO_TYPES.ALLERGY}
          list={allergies}
          isDelete
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
            handleUpdate: handleUpdteEditExam
          }}
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