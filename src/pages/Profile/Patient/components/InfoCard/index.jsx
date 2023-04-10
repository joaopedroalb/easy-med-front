import {useState} from 'react'
import { InfoCardBg, InfoCardRow } from './style'

import {FaAllergies, FaDisease, FaFileMedicalAlt, FaDiagnoses} from 'react-icons/fa'
import {GiMedicines} from 'react-icons/gi'
import {MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp} from 'react-icons/md'
import {RiEditBoxLine} from 'react-icons/ri'
import {FiTrash} from 'react-icons/fi'
import { INFO_TYPES } from '../../../../../util/consts/types'
import { DateService } from '../../../../../util/dateService'
import CardDiagnose from '../../../PatientByDoctor/components/CardDiagnose'


export default function InfoCard({typeInfo, infoData, handleDeleteItem, handleEditItem, editItem, deleteItem , hasDescription}) {

    const [open, setOpen] = useState(false)

    const ICON_CARD = () => {
        switch(typeInfo){
            case INFO_TYPES.CONDITION:
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

        if(typeInfo === INFO_TYPES.CONDITION){
            const { description } = infoData
            return (
                <div className='description-box'>
                    <h2>Sintoma</h2>
                    <p>{description}</p>
                </div>
            )
        }
        
        if(typeInfo === INFO_TYPES.ALLERGY){
            const { symptons } = infoData
            return (
                <div className='description-box'>
                    <h2>Sintoma</h2>
                    <p>{symptons}</p>
                </div>
            )
        }

        if(typeInfo === INFO_TYPES.MEDICATION){
            const { frequency, startedAt } = infoData
            return (
                <div className='description-box'>
                    <p>Frequencia: {frequency}</p>
                    <p>Data de inicio: {DateService.getDateFormated(startedAt)}</p>
                </div>
            )
        }

        if(typeInfo === INFO_TYPES.EXAM){
            const  {examType, location, result}  = infoData
            return (
                <div className='description-box'>
                    <p><strong>Tipo</strong>: {examType}</p>
                    <p><strong>Local</strong>: {location}</p>
                    <p><strong>Resultado</strong>:{`${result}`}</p>
                </div>
            )
        }

        if(typeInfo === INFO_TYPES.DIAGNOSES){
            const {description, diagnosisUrl, relatedExams, examList} = infoData
            return (
                <div className='description-box'>
                    <p><strong>Descrição</strong>: {description}</p>
                    <p><strong>URL</strong>: <a>{diagnosisUrl}</a></p>
                    {examList && examList.lenght > 0 && <p><strong>Exames: </strong></p>}
                    {examList && examList.map(exam=>{
                        const {idExam, examType, location, summary, date} = exam
                        return <CardDiagnose 
                                    key={idExam}
                                    isCrud={false}
                                    idExam={idExam} 
                                    examType={examType} 
                                    location={location} 
                                    summary={summary} 
                                    date={date}
                                />
                    })}
                </div>
            )
        }

        return null
    }

    const TitleText = () => {
        switch(typeInfo){
            case INFO_TYPES.CONDITION:
            case INFO_TYPES.DISEASE:
                return infoData.name

            case INFO_TYPES.ALLERGY:
                return infoData.name

            case INFO_TYPES.MEDICATION: 
                return infoData.name
            
            case INFO_TYPES.EXAM:
                return infoData.examType

            case INFO_TYPES.DIAGNOSES:
                return DateService.getDateFormated(infoData.createdAt) 

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