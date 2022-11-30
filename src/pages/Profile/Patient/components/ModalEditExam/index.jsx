import React from 'react';
import { useState } from 'react';
import Modal from '../../../../../components/common/Modal';
import { DateService } from '../../../../../util/dateService';
import { EXAM_TYPES } from '../../../../../util/enum';
import { ModalCreateForm } from '../ModalCreateInfo/style';


function ModalEditExam({open, handleClose, exam, handleCreate, handleCancel}) {

    const [editExam,setEditExam] = useState(exam)


    const handleSubmit = (event) => {
        event.stopPropagation()
        handleCreate(editExam)
    }

    return (
        <Modal
          open={open}
          handleClose={handleClose}
        >
          {editExam && (
            <ModalCreateForm onClick={(event)=>event.stopPropagation()} onSubmit={handleSubmit}>
                <h1 className='title'>Adicione um novo Exame</h1>
                <div className='row-label'>
                    <div className='col-label'>
                        <label>Tipo do exame</label>
                        <select onChange={({target})=>setEditExam({...editExam, examType:target.value})}>
                        {
                            EXAM_TYPES.map(item=>{
                            return <option key={item.value} value={item.value} selected={item.value===editExam.examType}>{item.text}</option>
                            })
                        }
                        </select>
                    </div>
                    <div className='col-label'>
                        <label>Data</label>
                        <input type='date' defaultValue={DateService.getDateInput(editExam.date)} onChange={({target})=>setEditExam({...editExam, date:target.value})}/>
                    </div>

                    <div className='col-label'>
                        <label>Local:</label>
                        <input value={editExam.location} onChange={({target})=>setEditExam({...editExam, location:target.value})}/>
                    </div>

                    </div>

                    <div className='row-label'>
                    <div className='col-label-3g'>
                        <label>Descrição:</label>
                        <textarea value={editExam.summary} onChange={({target})=>setEditExam({...editExam, summary:target.value})}/>
                    </div>
                    </div>


                    <div className='row-label btn-container'>
                    <button className='cancel-btn'type='button' onClick={handleCancel}>Cancelar</button>
                    <button className='submit-btn'>Adicionar</button>
                </div>
          </ModalCreateForm>
          )}
        </Modal>
      )
}

export default ModalEditExam;