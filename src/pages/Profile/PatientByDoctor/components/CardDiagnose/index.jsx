import React, { useState } from 'react';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md';
import { DateService } from '../../../../../util/dateService';

 import { DiagnoseCardBg } from './style';

function CardDiagnose({idExam, isCrud, handleExamChange, examType, location, summary, date }) {

    const [open,setOpen] = useState(false) 
    return (
        <DiagnoseCardBg key={idExam}>
            <div className='exam-card-row'>
                <div className='exam-header'>
                    {isCrud && <input type='checkbox' onChange={({target})=>handleExamChange(target.checked, idExam)}/>}
                    <h1>{examType}</h1>
                </div>
                <div className='icon-container'>
                    {
                    open ? 
                    <MdOutlineKeyboardArrowUp onClick={()=>setOpen(false)} className='switchBtn'/> : 
                    <MdOutlineKeyboardArrowDown onClick={()=>setOpen(true)} className='switchBtn'/>
                    }
                </div>
            </div>
            {
                    open && (
                    <div className='description-box'>
                        <p><strong>Tipo</strong>: {examType}</p>
                        <p><strong>Local</strong>: {location}</p>
                        <p><strong>Resumo</strong>: {summary}</p>
                        <p><strong>Data</strong>: {DateService.getDateFormated(date)}</p>
                    </div>
                    )
            }
        </DiagnoseCardBg>
    )
}

export default CardDiagnose;