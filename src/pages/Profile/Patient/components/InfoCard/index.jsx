import {useState} from 'react'
import { InfoCardBg, InfoCardRow } from './style'

import {FaAllergies, FaDisease, FaFileMedicalAlt, FaDiagnoses} from 'react-icons/fa'
import {GiMedicines} from 'react-icons/gi'
import {MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp} from 'react-icons/md'
import {RiEditBoxLine} from 'react-icons/ri'
import {FiTrash} from 'react-icons/fi'
import { INFO_TYPES } from '../../../../../util/consts/types'
import { DateService } from '../../../../../util/dateService'


export default function InfoCard({typeInfo, infoData, handleDeleteItem, handleEditItem, editItem, deleteItem , hasDescription}) {

    const [open, setOpen] = useState(false)

    const ICON_CARD = () => {
        switch(typeInfo){
            case INFO_TYPES.HEREDITARY:
            case INFO_TYPES.DISEASE:
                return <FaDisease className='icon'/>

            case INFO_TYPES.ALLERGY:
                return <FaAllergies className='icon'/>

            case INFO_TYPES.MEDICATION: 
                return <GiMedicines className='icon'/>
            
            case INFO_TYPES.EXAM:
                return <FaFileMedicalAlt className='icon' />
            
            case INFO_TYPES.DIAGNOSES:
                return <FaDiagnoses className='icon' />

            default:
                return null
        }
    }

    const DescriptionCard = () => {

        if(typeInfo === INFO_TYPES.HEREDITARY){
            const { symptoms } = infoData
            return (
                <div className='description-box'>
                    <h2>Sintoma</h2>
                    <p>{symptoms}</p>
                </div>
            )
        }
        
        if(typeInfo === INFO_TYPES.ALLERGY){
            const { symptoms } = infoData
            return (
                <div className='description-box'>
                    <h2>Sintoma</h2>
                    <p>{symptoms}</p>
                </div>
            )
        }

        if(typeInfo === INFO_TYPES.MEDICATION){
            const { dosage, type, frequency } = infoData
            return (
                <div className='description-box'>
                    <p>Dosagem: {dosage}{type}</p>
                    <p>Frequencia: {frequency}</p>
                </div>
            )
        }

        if(typeInfo === INFO_TYPES.EXAM){
            const  {doctor, examType, location, summary, date}  = infoData
            return (
                <div className='description-box'>
                    {doctor && <p>Doutor: {doctor}</p>}
                    <p><strong>Tipo</strong>: {examType}</p>
                    <p><strong>Local</strong>: {location}</p>
                    <p><strong>Resumo</strong>: {summary}</p>
                    <p><strong>Data</strong>: {DateService.getDateFormated(date)}</p>
                </div>
            )
        }

        if(typeInfo === INFO_TYPES.DIAGNOSES){
            <div>Diagnostico</div>
        }

        return null
    }

    const TitleText = () => {
        switch(typeInfo){
            case INFO_TYPES.HEREDITARY:
            case INFO_TYPES.DISEASE:
                return infoData.name

            case INFO_TYPES.ALLERGY:
                return infoData.description

            case INFO_TYPES.MEDICATION: 
                return infoData.name
            
            case INFO_TYPES.EXAM:
                return infoData.examType

            default:
                return ''
        }
    }

    return(
        <InfoCardBg>
            <InfoCardRow type={typeInfo}>
                <ICON_CARD/>
                <h1 className='title'>{TitleText()}</h1>

                <div className='buttonContainer'>
                    { editItem &&  <RiEditBoxLine className='item-icon__edit' onClick={handleEditItem}/> }
                    { deleteItem && <FiTrash className='item-icon__delete' onClick={handleDeleteItem}/> }
                    {
                        hasDescription && (
                            open ? 
                            <MdOutlineKeyboardArrowUp onClick={()=>setOpen(false)} className='switchBtn'/> : 
                            <MdOutlineKeyboardArrowDown onClick={()=>setOpen(true)} className='switchBtn'/>)
                    }
                </div>
            </InfoCardRow>
            {open && (
                <DescriptionCard/>
            )}
        </InfoCardBg>
    )
}