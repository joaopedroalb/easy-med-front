import {useState} from 'react'
import { InfoCardBg, InfoCardRow } from './style'

import {FaAllergies, FaDisease} from 'react-icons/fa'
import {GiMedicines} from 'react-icons/gi'
import {MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp} from 'react-icons/md'
import {RiEditBoxLine} from 'react-icons/ri'
import {FiTrash} from 'react-icons/fi'


export default function InfoCard({title, typeInfo, infoData, handleDeleteItem}) {

    const [open, setOpen] = useState(false)

    const ICON_CARD = () => {
        switch(typeInfo){
            case 'DISEASE':
                return <FaDisease className='icon'/>
            case 'ALLERGY':
                return <FaAllergies className='icon'/>
            default:
                return <GiMedicines className='icon'/>
        }
    }

    const DescriptionCard = () => {
        if(typeInfo === 'DISEASE'){
            const { symptoms } = infoData
            return (
                <div className='description-box'>
                    <h2>Sintoma</h2>
                    <p>{symptoms}</p>
                </div>
            )
        }
        
        if(typeInfo === 'ALLERGY'){
            const { symptoms } = infoData
            return (
                <div className='description-box'>
                    <h2>Sintoma</h2>
                    <p>{symptoms}</p>
                </div>
            )
        }

        if(typeInfo === 'MEDICINE'){
            const { dosage, type, frequency } = infoData
            return (
                <div className='description-box'>
                    <p>Dosagem: {dosage}{type}</p>
                    <p>Frequencia: {frequency}</p>
                </div>
            )
        }

        return null
    }

    return(
        <InfoCardBg>
            <InfoCardRow type={typeInfo}>
                <ICON_CARD/>
                <h1 className='title'>{title}</h1>
                <div className='buttonContainer'>
                    <RiEditBoxLine className='item-icon__edit'/>
                    <FiTrash className='item-icon__delete' onClick={handleDeleteItem}/>
                    {
                        open ? <MdOutlineKeyboardArrowUp onClick={()=>setOpen(false)} className='switchBtn'/> : <MdOutlineKeyboardArrowDown onClick={()=>setOpen(true)} className='switchBtn'/>
                    }
                </div>
            </InfoCardRow>
            {open && (
                <DescriptionCard/>
            )}
        </InfoCardBg>
    )
}