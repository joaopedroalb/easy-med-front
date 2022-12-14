import React from 'react'
import { InputContainer, InputStyled } from './style'

export default function Input({isError = false, label,name,handleChange,handleBlur,...props}) {
  return (
    <InputContainer>
        <label htmlFor={name}>{label}</label>
        <InputStyled isError={isError} id={name} name={name} onChange={handleChange} onBlur={handleBlur} {...props} />
    </InputContainer>
  )
}
