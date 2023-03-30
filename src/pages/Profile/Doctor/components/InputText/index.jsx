import React from 'react';
import { Container } from './style';

export default function InputText({ title, nameInpt, value, changeValue, rotate='left', blurEventOnly = false }) {
  
  return (
    <Container rotate={rotate}>
      <legend >
        <label htmlFor={nameInpt}>{title}</label>
      </legend>
      {
        blurEventOnly ? 
        <input id={nameInpt} onBlur={({target})=>{changeValue(target.value)}}/>
        : 
        <input id={nameInpt} value={value} onChange={({target})=>{changeValue(target.value)}}/>
      }
    </Container>
  )
}

