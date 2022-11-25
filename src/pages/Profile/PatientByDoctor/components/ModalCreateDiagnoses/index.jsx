import React from 'react';
import { useState } from 'react';
import Modal from '../../../../../components/common/Modal';
import CardDiagnose from '../CardDiagnose';

import { ModalCreateForm } from './style';


function ModalCreateDiagnoses({open, handleClose, handleCreate, idDoctor, idPatient, exams}) {
    const [diagnose, setDiagnose] = useState({
                                                idPatient: +idPatient,
                                                idDoctor: idDoctor,
                                                description: '',
                                                diagnosisUrl: '',
                                                idExams: []
                                            })

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
        
        handleCreate(diagnose)
        setDiagnose({
            idPatient: idPatient,
            idDoctor: idDoctor,
            description: '',
            diagnosisUrl: '',
            idExams: []
        })
        handleClose()
    }

    const handleCancel = () => {
        setDiagnose({
            idPatient: idPatient,
            idDoctor: idDoctor,
            description: '',
            diagnosisUrl: '',
            idExams: []
        })

        handleClose()
    }

  return (
    <Modal
        open={open}
        handleClose={handleClose}
    >
        <ModalCreateForm onClick={(event)=>event.stopPropagation()} onSubmit={handleSubmit}>
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
          <div className='row-label btn-container'>
            <button className='cancel-btn'type='button' onClick={handleCancel}>Cancelar</button>
            <button className='submit-btn'>Adicionar</button>
          </div>
        </ModalCreateForm>
    </Modal>
  )
}

export default ModalCreateDiagnoses;