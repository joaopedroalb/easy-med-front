import React, { useState, useRef, useEffect } from 'react';
import useOutsideEvent from '../../../hooks/useOutsideEvent';
import { DropdownContainer, OptionsContainer } from './style';

function Dropdown({options, currentValue, handleChange, placeholder = 'Selecione', disabled, className}) {
    const [showOptions, setShowOptions] = useState(false)

    const wrapper = useRef(null)
    useOutsideEvent(wrapper, ()=>setShowOptions(false))

    const handleOpen = () => {
        if(disabled) return
        setShowOptions(true)
    }

    const handleSelect = (event, value) => {
        event.stopPropagation()
        handleChange(value)
        setShowOptions(false)
    }

    const getTitleByValue = (value) => {
        const filterOptions = options.filter(x=> x.value === value)
        return filterOptions.length > 0 ? filterOptions[0].title : placeholder
    }

    return (
        <DropdownContainer className={className} disabled={disabled} onClick={handleOpen} ref={wrapper}>
            <p className='title'>
                {currentValue ? getTitleByValue(currentValue) :placeholder}
            </p>
            {
                !disabled && showOptions && (
                    <OptionsContainer>
                        {
                            options.map(option => {
                                return <p key={option.value} onClick={(event)=>handleSelect(event,option.value)} className='option'>
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