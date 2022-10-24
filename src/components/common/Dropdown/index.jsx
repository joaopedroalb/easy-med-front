import React, { useState } from 'react';
import { DropdownContainer, OptionsContainer } from './style';

function Dropdown({options, currentValue, handleChange, placeholder = 'Selecione', disabled, className}) {
    const [showOptions, setShowOptions] = useState(false)

    console.log(options)

    const handleOpen = () => {
        if(disabled) return
        setShowOptions(value=>!value)
    }

    const handleSelect = (value) => {
        handleChange(value)
        setShowOptions(false)
    }

    const getTitleByValue = (value) => {
        const filterOptions = options.filter(x=> x.value === value)
        return filterOptions.length > 0 ? filterOptions[0].title : placeholder
    }

    return (
        <DropdownContainer className={className} disabled={disabled} onClick={handleOpen}>
            <p className='title'>
                {currentValue ? getTitleByValue(currentValue) :placeholder}
            </p>
            {
                !disabled && showOptions && (
                    <OptionsContainer>
                        {
                            options.map(option => {
                                return <p key={option.value} onClick={()=>handleSelect(option.value)} className='option'>
                                            {option.title}
                                        </p>
                            })
                        }
                    </OptionsContainer>
                )
            }
        </DropdownContainer>
    )
}

export default Dropdown;