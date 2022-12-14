import React from 'react';
import InputMask from 'react-input-mask';
import { InputContainer } from './style';


const MaskInput = ({value, handleChange, type, maskType, name, label, placeholder, handleBlur, isError=false}) => {
  return (
    <InputContainer isError={isError}>
        <label htmlFor={name}>{label}</label>
        <InputMask mask={maskType} value={value} onChange={handleChange} type={type} className='mask-input' name={name} placeholder={placeholder} onBlur={handleBlur} />
    </InputContainer>
  )
}

export default MaskInput;