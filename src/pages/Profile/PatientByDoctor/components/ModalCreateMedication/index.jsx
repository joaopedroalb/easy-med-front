import React, { useState } from 'react';
import Modal from '../../../../../components/common/Modal';

import { FooterContainer, FormBG, ModalBG, RowInput } from './style';
import { useDisableBodyScroll } from '../../../../../hooks/useDisableBodyScroll';
import { DateService } from '../../../../../util/dateService';


const MEDICATION_DEFAULT = {
    medicineId: 0, 
    frequency: '',
    isActive: true, 
    startedAt: new Date()
}
function ModalCreateMedication({open, handleClose, handleCreate, medications}) {
    const [medication, setMedication] = useState(MEDICATION_DEFAULT)

    const VALIDATE_MEDICATION = medication.medicineId > 0 && medication.frequency.length >= 6 

    const handleChangeMedicationByProp = (value, prop) => {
        setMedication({...medication, [prop]: value})
    }

    const handleCloseModal = () => {
        setMedication(MEDICATION_DEFAULT)
        handleClose(handleClose)
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        if(!VALIDATE_MEDICATION) 
            return null

        handleCreate(medication)
        handleCloseModal()
    }

    useDisableBodyScroll(open)
    
    return (
        <Modal
            open={open}
            handleClose={handleCloseModal}
        >
            <ModalBG onClick={(event)=>event.stopPropagation()}>
                <h1> Adicione uma medicação </h1>
                <FormBG>
                    <RowInput>
                        <label>Medicação</label>
                        <select onChange={({target})=>handleChangeMedicationByProp(+target.value, 'medicineId')}>
                            <option selected disabled >Selecione um medicamento</option>
                            {
                                medications.map(med=>{
                                    return(
                                        <option value={med.id} key={med.id}>
                                          {med.name}
                                        </option>
                                    )
                                })
                            }
                        </select>
                    </RowInput>
                    <RowInput>
                        <label>Frequencia</label>
                        <input onChange={({target})=>handleChangeMedicationByProp(target.value, 'frequency')} value={medication.frequency} placeholder='Uma vez por semana'/>
                    </RowInput>
                    <RowInput>
                        <label>Data de inicio</label>
                        <input onChange={({target})=>handleChangeMedicationByProp(target.valueAsDate, 'startedAt')} value={DateService.getDateInput(medication.startedAt)} type='date'/>
                    </RowInput>
                    <FooterContainer>
                        <button onClick={handleSubmit} className='btn-submit' disabled={!VALIDATE_MEDICATION}>Salvar</button>
                        <button onClick={handleCloseModal} className='btn-cancel' type='button'>Cancelar</button>
                    </FooterContainer>
                </FormBG>
            </ModalBG>
        </Modal>
    )
}

export default ModalCreateMedication