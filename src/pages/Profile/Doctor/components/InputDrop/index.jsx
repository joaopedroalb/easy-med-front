import React from 'react';
import { Container } from './style';

export default function InputDrop({ title, nameInpt, value, changeValue, list, rotate='left', defaultOptionMessage='Selecione uma opção' }) {
  return (
    <Container rotate={rotate}>
      <legend >
        <label htmlFor={nameInpt}>{title}</label>
      </legend>
      <select onChange={({target})=>{changeValue(target.value)}}>
        <option value={0} selected disabled >{defaultOptionMessage}</option>
        {
          list.map(item=>{
            return (
              <option value={item.value} selected={item.value === value} key={item.vaue}>
                {item.title}
              </option>
            )
          })
        }
      </select>
    </Container>
  )
}

