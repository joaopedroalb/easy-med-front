import React, { useState } from 'react';
import Modal from '../../../../../components/common/Modal';

import { ColInput, FormBG, ModalBG, RadioBtnContainer, RowInput } from './style';
import { useDisableBodyScroll } from '../../../../../hooks/useDisableBodyScroll';
import { DateService } from '../../../../../util/dateService';

const CONDITION_DEFAULT = {
    name:'', 
    appointmentId:0,
    description: '',
    isInFamily: false
}
function ModalCreateCondition({open, handleClose, handleCreate, appointments}) {
    const [condition, setCondition] = useState(CONDITION_DEFAULT)

    const VALIDATE_CONDITION = condition.appointmentId > 0 && condition.name.length >= 3 && condition.description.length >= 5

    const handleChangeConditionByProp = (value, prop) => {
        setCondition({...condition, [prop]: value})
    }

    const handleCloseModal = () => {
        setCondition(CONDITION_DEFAULT)
        handleClose(handleClose)
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        if(!VALIDATE_CONDITION) 
            return null

        handleCreate(condition)
        handleCloseModal()
    }

    useDisableBodyScroll(open)
    
    return (
        <Modal
            open={open}
            handleClose={handleCloseModal}
        >
            <ModalBG onClick={(event)=>event.stopPropagation()}>
                <h1> Crie uma nova Doença </h1>
                <FormBG>
                    <RowInput>
                        <label>Consulta</label>
                        <select onChange={({target})=>handleChangeConditionByProp(+target.value, 'appointmentId')}>
                            <option selected disabled >Selecione uma consulta</option>
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
                        <label>Nome</label>
                        <input onChange={({target})=>handleChangeConditionByProp(target.value, 'name')} value={condition.name}/>
                    </RowInput>
                    <ColInput>
                        <label>Descricao</label>
                        <textarea rows={5} onChange={({target})=>handleChangeConditionByProp(target.value, 'description')} value={condition.description}/>
                    </ColInput>
                    <RadioBtnContainer>
                        <div className='radio-content'>
                            <label htmlFor='isNotHereditary'>Doença não Hereditaria</label>
                            <input type='radio' name='hereditary' id='isNotHereditary' checked={!condition.isInFamily} onChange={()=>{handleChangeConditionByProp(false,'isInFamily')}}/>
                        </div>
                        <div className='radio-content'>
                            <label htmlFor='isHereditary'>Doença é Hereditaria</label>
                            <input type='radio' name='hereditary' id='isHereditary' checked={condition.isInFamily} onChange={()=>{handleChangeConditionByProp(true,'isInFamily')}} />
                        </div>              
                    </RadioBtnContainer>
                    <RadioBtnContainer>
                            <button onClick={handleSubmit} className='btn-submit' disabled={!VALIDATE_CONDITION}>Salvar</button>
                            <button onClick={handleCloseModal} className='btn-cancel'>Cancelar</button>
                    </RadioBtnContainer>
                </FormBG>
            </ModalBG>
        </Modal>
    )
}

export default ModalCreateCondition