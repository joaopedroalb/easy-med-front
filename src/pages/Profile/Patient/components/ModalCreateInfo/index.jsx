import React from 'react'
import Modal from '../../../../../components/common/Modal'
import { ModalCreateForm } from './style'

export default function ModalCreateInfo({open, handleClose, type}) {

  const handleCancel = () => {
    handleClose()
  }

  if(type === 'DISEASE')
    return (
      <Modal
        open={open}
        handleClose={handleCancel}
      >
        <ModalCreateForm onClick={(event)=>event.stopPropagation()}>
          <h1 className='title'>Adicione uma doença hereditaria</h1>
          <div className='row-label'>
            <div className='col-label'>
              <label>Doença</label>
              <select>
                <option>Doença Aviaria</option>
                <option>Doença sei la</option>
                <option>Cavalo</option>
              </select>
            </div>
            <div div className='col-label'>
              <label>Sintoma</label>
              <textarea/>
            </div>
          </div>
          <div className='row-label btn-container'>
            <button className='cancel-btn'type='button' onClick={handleCancel}>Cancelar</button>
            <button className='submit-btn'>Adicionar</button>
          </div>
        </ModalCreateForm>
    </Modal>
    )

  if(type === 'ALLERGY')
    return (
      <Modal
        open={open}
        handleClose={handleClose}
      >
        <ModalCreateForm onClick={(event)=>event.stopPropagation()}>
          <h1 className='title'>Adicione uma alergia</h1>
          <div className='row-label'>
            <div className='col-label'>
              <label>Doença</label>
              <select>
                <option>Agua</option>
                <option>Amendoim</option>
                <option>Leite</option>
              </select>
            </div>
            <div className='col-label'>
              <label>Efeito da alergia:</label>
              <textarea />
            </div>
          </div>
          <div className='row-label btn-container'>
            <button className='cancel-btn'type='button' onClick={handleCancel}>Cancelar</button>
            <button className='submit-btn'>Adicionar</button>
          </div>
        </ModalCreateForm>
      </Modal>
    )

  if(type === 'MEDICINE')
    return (
      <Modal
        open={open}
        handleClose={handleClose}
      >
        <ModalCreateForm onClick={(event)=>event.stopPropagation()}>
          <h1 className='title'>Adicione um medicamento</h1>

          <div className='row-label'>
            <div className='col-label'>
              <label>Medicamento</label>
              <select>
                <option>Alegra D</option>
                <option>Bumpion</option>
                <option>Ashvalhev</option>
              </select>
            </div>
            <div className='col-label'>
                <label>Frequencia</label>
                <input type='text' placeholder='1 vez por dia'/>
            </div>
          </div>
          
          <div className='row-label'>
            <div className='col-label'>
              <label>Dosagem</label>
              <input type='number' placeholder='10'/>
            </div>

            <div className='col-label'>
              <label>Tipo</label>
              <select>
                <option>mg</option>
                <option>G</option>
                <option>ml</option>
                <option>mcg</option>
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

  return null
}
