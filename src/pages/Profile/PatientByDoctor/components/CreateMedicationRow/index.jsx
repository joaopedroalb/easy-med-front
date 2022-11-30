import React from 'react';
import { useState } from 'react';
import { DateService } from '../../../../../util/dateService';

import { RowMedication } from './style';

function CreateMedicationRow({medications, handleCreate}) {
    const [newMedication, setNewMedication] = useState({
        idMedication: 0,
        dosage: 0,
        type: 'mg',
        frequency: '',
        isActive: true,
        startedAt: DateService.getDateInput(new Date())
    })

    const submitMedication = () => {
        if(newMedication.idMedication===0 || newMedication.dosage===0 || newMedication.frequency==='') return null
        handleCreate(newMedication)
        setNewMedication({
            idMedication: 0,
            dosage: 0,
            type: 'mg',
            frequency: '',
            isActive: true,
            startedAt: DateService.getDateInput(new Date())
        })
    }


    return (
        <RowMedication>
            <div className='row-container'>
                <div className='row-input'>
                    <select onChange={({target})=>setNewMedication({...newMedication, idMedication:+target.value})}>
                        <option value={0} disabled selected>Selecione um medicamento</option>
                        {medications.map(medication=>{
                            return <option key={medication.id} value={medication.id} selected={newMedication.idMedication===medication.id}>{medication.name}</option>
                        })}
                    </select>
                </div>
                <div className='row-input'>
                    <label>Dosagem</label>
                    <input type='number' value={newMedication.dosage} onChange={({target})=>setNewMedication({...newMedication, dosage:+target.value})} />
                    <select onChange={({target})=>setNewMedication({...newMedication, type:target.value})}>
                        <option selected={'mg'===newMedication.type} value={'mg'}>mg</option>
                        <option  selected={'ml'===newMedication.type} value={'ml'}>ml</option>
                </select>
                </div>
                <div className='row-input'>
                    <label>Frequencia</label>
                    <input value={newMedication.frequency} onChange={({target})=>setNewMedication({...newMedication, frequency:target.value})} placeholder='2 Vezes por dia'/>
                </div>
            </div>
            <div className='btn-actions'>
                <button onClick={submitMedication} className='submit-btn' type='button'>Adicionar Medicamento</button>
            </div>
        </RowMedication>
    )
}

export default CreateMedicationRow;