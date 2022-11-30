import React from 'react'
import { useState } from 'react'
import Modal from '../../../../../components/common/Modal'
import { INFO_TYPES } from '../../../../../util/consts/types'
import { EXAM_TYPES } from '../../../../../util/enum'
import { ModalCreateForm } from './style'

const INITAL_VALUE = {
  [INFO_TYPES.HEREDITARY]: {
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

  [INFO_TYPES.EXAM]: {
    examType: EXAM_TYPES[0].value,
    date: new Date().toISOString().substring(0, 10),
    location: '',
    description: ''
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

  if(type === INFO_TYPES.HEREDITARY)
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
              <label>Doença</label>
              <select onChange={({target})=>handleChangeValue(target.value, 'idAllergy')}>
              <option selected value={null} disabled>Selecione uma alergia</option>
                {allergies.map(allergy=>{
                  return <option key={allergy.id} value={allergy.id}>{allergy.description}</option>
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

    if(type === INFO_TYPES.EXAM)
      return (
        <Modal
          open={open}
          handleClose={handleClose}
        >
          <ModalCreateForm onClick={(event)=>event.stopPropagation()} onSubmit={handleSubmit}>
            <h1 className='title'>Adicione um novo Exame</h1>
            <div className='row-label'>
            <div className='col-label'>
                <label>Tipo do exame</label>
                <select onChange={({target})=>{handleChangeValue(target.value, 'examType')}}>
                  {
                    EXAM_TYPES.map(item=>{
                      return <option key={item.value} value={item.value}>{item.text}</option>
                    })
                  }
                </select>
              </div>
              <div className='col-label'>
                <label>Data</label>
                <input type='date' value={infoData.date} onChange={({target})=>{handleChangeValue(target.value, 'date')}}/>
              </div>

              <div className='col-label'>
                <label>Local:</label>
                <input value={infoData.location} onChange={({target})=>{handleChangeValue(target.value, 'location')}}/>
              </div>

            </div>

            <div className='row-label'>
              <div className='col-label-3g'>
                <label>Descrição:</label>
                <textarea value={infoData.description} onChange={({target})=>{handleChangeValue(target.value, 'description')}}/>
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
