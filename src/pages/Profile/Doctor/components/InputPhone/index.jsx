import React from 'react';
import InputMask from 'react-input-mask';
import { Container } from './style';

export default function InputPhone({ title, nameInpt, value, changeValue, rotate='left' }) {
  
  return (
    <Container rotate={rotate}>
      <legend >
        <label htmlFor={nameInpt}>{title}</label>
      </legend>
      <InputMask 
        mask={'(99)99999-9999'} 
        value={value} 
        onChange={({target})=>{changeValue(target.value)}} 
        type={'phone'} 
        className='mask-input' 
        name={nameInpt} 
        id={nameInpt}
        placeholder={'Digite seu telefone'} 
      />
    </Container>
  )
}

