import React, { useState } from 'react';
import Modal from '../../../../../components/common/Modal';

import { ColInput, FormBG, ModalBG, RadioBtnContainer, RowInput } from './style';
import { useDisableBodyScroll } from '../../../../../hooks/useDisableBodyScroll';
import { DateService } from '../../../../../util/dateService';
import { EXAM_TYPES } from '../../../../../util/enum';

const EXAM_DEFAULT = {
    appointmentId:0,
    examType: '',
    result: '',
    location: '', 
}
function ModalCreateExam({open, handleClose, handleCreate, appointments}) {
    const [exam, setExam] = useState(EXAM_DEFAULT)

    const VALIDATE_EXAM = exam.appointmentId > 0 && exam.result.length >= 5 && exam.examType !== '' && exam.location.length >= 5

    const handleChangeExamByProp = (value, prop) => {
        setExam({...exam, [prop]: value})
    }

    const handleCloseModal = () => {
        setExam(EXAM_DEFAULT)
        handleClose(handleClose)
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        if(!VALIDATE_EXAM) 
            return null

        handleCreate(exam)
        handleCloseModal()
    }

    useDisableBodyScroll(open)
    
    return (
        <Modal
            open={open}
            handleClose={handleCloseModal}
        >
            <ModalBG onClick={(event)=>event.stopPropagation()}>
                <h1> Adicione um novo exame </h1>
                <FormBG>
                    <RowInput>
                        <label htmlFor='appoint'>Consulta</label>
                        <select onChange={({target})=>handleChangeExamByProp(+target.value, 'appointmentId')} id='appoint'>
                            <option selected={exam.appointmentId===0} disabled >Selecione uma consulta</option>
                            {
                                appointments.map(appointment=>{
                                    return(
                                        <option value={appointment.id} key={appointment.id}>
                                            {DateService.getDateFormated(appointment.date)} - {appointment.location}
                                        </option>
                                    )
                                })
                            }
                        </select>
                    </RowInput>
                    <RowInput>
                        <label htmlFor='examType'>Tipo</label>
                        <select onChange={({target})=>handleChangeExamByProp(target.value, 'examType')} id='examType'>
                            <option selected disabled >Selecione o Tipo do Exame</option>
                            {
                                EXAM_TYPES.map(type=>{
                                    return(
                                        <option value={type.value} key={type.value}>
                                            {type.text}
                                        </option>
                                    )
                                })
                            }
                        </select>
                    </RowInput>
                    <ColInput>
                        <label htmlFor='result'>Resultado do exame</label>
                        <textarea rows={10} onChange={({target})=>handleChangeExamByProp(target.value, 'result')} value={exam.result} id='result'/>
                    </ColInput>
                    <RowInput>
                        <label htmlFor='location'>Local do exame</label>
                        <input onChange={({target})=>handleChangeExamByProp(target.value, 'location')} value={exam.location} id='location'/>
                    </RowInput>
                    <RadioBtnContainer>
                            <button onClick={handleSubmit} className='btn-submit' disabled={!VALIDATE_EXAM}>Salvar</button>
                            <button onClick={handleCloseModal} className='btn-cancel' type='button'>Cancelar</button>
                    </RadioBtnContainer>
                </FormBG>
            </ModalBG>
        </Modal>
    )
}

export default ModalCreateExam