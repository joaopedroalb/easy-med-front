import React from 'react';
import { Container } from './style';

export default function InputTextBox({ title, nameInpt, value, changeValue, rotate='left' }) {
  return (
    <Container rotate={rotate}>
      <legend >
        <label htmlFor={nameInpt}>{title}</label>
      </legend>
      <textarea id={nameInpt} value={value} onChange={({target})=>{changeValue(target.value)}}/>
    </Container>
  )
}

