import React from 'react';
import { useState } from 'react';
import Modal from '../../../../../components/common/Modal';
import { useDisableBodyScroll } from '../../../../../hooks/useDisableBodyScroll';
import CardDiagnose from '../CardDiagnose';
import CreateMedicationRow from '../CreateMedicationRow';

import { ModalCreateForm } from './style';


function ModalCreateDiagnoses({open, handleClose, handleCreateDiagnose, handleCreateMedications, idDoctor, idPatient, exams, medications=[]}) {
    const [diagnose, setDiagnose] = useState({
                                                idPatient: +idPatient,
                                                idDoctor: idDoctor,
                                                description: '',
                                                diagnosisUrl: '',
                                                idExams: []
                                            })

    const [medicationList, setMedicationList] = useState([])

    const handleChangeValue = (value, property) => {
        setDiagnose({...diagnose, [property]:value})
    }

    const handleExamChange = (value, examId) => {
        let examIdList = diagnose.idExams
        if(value)
            examIdList = [...examIdList, examId]
        else
            examIdList = examIdList.filter(x=> x !== examId)

        handleChangeValue(examIdList, 'idExams')
            
    } 

    const handleSubmit = (event) => {
        event.preventDefault()
        if(diagnose.description==='' || diagnose.diagnosisUrl==='')
            return null
        
        handleCreateDiagnose(diagnose)
        handleCreateMedications(medicationList)
        handleCloseModal()
    }

    const handleCloseModal = () => {
      
        setDiagnose({
            idPatient: idPatient,
            idDoctor: idDoctor,
            description: '',
            diagnosisUrl: '',
            idExams: []
        })

        setMedicationList([])

        handleClose()
    }

    const handleAddMedication = (medication) =>{
      setMedicationList(value=>[...value, medication])
    }

    const removeMedicationByIndex = (indexValue) => {
      const newList = medicationList.filter((_,index)=>index !== indexValue)
      setMedicationList(newList)
    }

  useDisableBodyScroll(open)

  return (
    <Modal
        open={open}
        handleClose={handleClose}
    >
        <ModalCreateForm onClick={(event)=>event.stopPropagation()} onSubmit={handleSubmit} className='custom-scrollbar'>
          <h1 className='title'>Adicione um Diagnostico</h1>
          <div className='row-label'>
            <div className='col-label'>
              <label>Descrição</label>
              <textarea value={diagnose.description} onChange={({target})=>handleChangeValue(target.value, 'description')}/>
            </div>
          </div>
          <div className='row-label'>
            <div className='col-label'>
              <label>Links </label>
              <input value={diagnose.diagnosisUrl} onChange={({target})=>handleChangeValue(target.value, 'diagnosisUrl')}/>
            </div>
          </div>

          <h1>Vincular Exames</h1>
          {
            exams && exams.map(exam=>{
                return (
                    <CardDiagnose 
                        key={exam.id}
                        idExam={exam.id}
                        isCrud
                        handleExamChange={handleExamChange}
                        examType={exam.examType}
                        location={exam.location} 
                        summary={exam.summary}
                        date={exam.date}
                    />
                )
            })
          }

          <h1>Adicionar Medicamento</h1>
          <CreateMedicationRow 
            medications={medications}
            handleCreate={handleAddMedication}
          />
          {medicationList && medicationList.map((item,index)=>{
            return (
              <div key={index} className='row-label medication-row'>
                <p>{medications.filter(x=>x.id===item.idMedication)[0]?.name}</p>
                <p>Dosagem: {item.dosage} {item.type}</p>
                <p>Frequencia: {item.frequency}</p>
                <button className='btn-remove' onClick={()=>removeMedicationByIndex(index)} type='button'>Remover</button>
              </div>
            )
          })}
          <div className='row-label btn-container'>
            <button className='cancel-btn'type='button' onClick={handleCloseModal}>Cancelar</button>
            <button className='submit-btn'>Adicionar</button>
          </div>
        </ModalCreateForm>
    </Modal>
  )
}

export default ModalCreateDiagnoses;