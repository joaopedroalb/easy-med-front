import React from 'react'
import { InputContainer, InputStyled } from './style'

export default function Input({label,name,handleChange,handleBlur,...props}) {
  return (
    <InputContainer>
        <label htmlFor={name}>{label}</label>
        <InputStyled id={name} name={name} onChange={handleChange} onBlur={handleBlur} {...props} />
    </InputContainer>
  )
}
