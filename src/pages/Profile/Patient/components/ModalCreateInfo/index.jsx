import React from 'react'
import { useState } from 'react'
import Modal from '../../../../../components/common/Modal'
import { INFO_TYPES } from '../../../../../util/consts/types'
import { EXAM_TYPES } from '../../../../../util/enum'
import { ModalCreateForm } from './style'

const INITAL_VALUE = {
  [INFO_TYPES.CONDITION]: {
    idCondition: 0,
    isActive: true,
    isInFamily: true,
    symptoms: '',
    startedAt: '2020-01-01'
  },

  [INFO_TYPES.ALLERGY]: {
    idAllergy: 0,
    symptoms: ''
  },
}

export default function ModalCreateInfo({open, handleClose, type, handleCreate, allergies, conditions}) {
  const [infoData, setInfoData] = useState(INITAL_VALUE[type])

  const handleChangeValue = (value, property) => {
    const newValue = {...infoData, [property]: value}
    setInfoData(newValue)
  }

  const handleCancel = () => {
    handleClose()
  }
  
  const handleSubmit = async (event) => {
    event.preventDefault()
    const result = await handleCreate(type, infoData)
    if(result) 
      handleClose()
  }

  if(type === INFO_TYPES.CONDITION)
    return (
      <Modal
        open={open}
        handleClose={handleCancel}
      >
        <ModalCreateForm onClick={(event)=>event.stopPropagation()} onSubmit={handleSubmit}>
          <h1 className='title'>Adicione uma doença hereditaria</h1>
          <div className='row-label'>
            <div className='col-label'>
              <label>Doença</label>
              <select onChange={({target})=>handleChangeValue(target.value, 'idCondition')}>
                <option selected value={null} disabled>Selecione uma doença</option>
                {conditions.map(condition=>{
                  return <option key={condition.id} value={condition.id}>{condition.name}</option>
                })}
              </select>
            </div>
          </div>
          <div className='row-label btn-container'>
            <button className='cancel-btn'type='button' onClick={handleCancel}>Cancelar</button>
            <button className='submit-btn'>Adicionar</button>
          </div>
        </ModalCreateForm>
    </Modal>
    )

  if(type === INFO_TYPES.ALLERGY)
    return (
      <Modal
        open={open}
        handleClose={handleClose}
      >
        <ModalCreateForm onClick={(event)=>event.stopPropagation()} onSubmit={handleSubmit}>
          <h1 className='title'>Adicione uma alergia</h1>
          <div className='row-label'>
            <div className='col-label'>
              <label htmlFor='allergyItem'>Alergia: </label>
              <select onChange={({target})=>handleChangeValue(target.value, 'idAllergy')} id='allergyItem'>
                <option selected value={null} disabled>Selecione uma alergia</option>
                  {allergies.map(allergy=>{
                    return <option key={allergy.id} value={allergy.id}>{allergy.name}</option>
                  })}
              </select>
            </div>
          </div>
          <div className='row-label'>
            <div div className='col-label-2g'>
                <label>Sintoma</label>
                <textarea value={infoData.symptoms} onChange={({target})=>handleChangeValue(target.value, 'symptoms')}/>
            </div>
          </div>
          <div className='row-label btn-container'>
            <button className='cancel-btn'type='button' onClick={handleCancel}>Cancelar</button>
            <button className='submit-btn'>Adicionar</button>
          </div>
        </ModalCreateForm>
      </Modal>
    )

    return null
    
}
