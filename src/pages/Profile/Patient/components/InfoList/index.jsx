import React, { useEffect } from 'react'
import InfoCard from '../InfoCard'
import {AiOutlinePlusCircle} from 'react-icons/ai'
import { InfoCardContainer } from './style'

export default function InfoList({title, insertTitle, list, isEdit, isDelete, isInsert, crudActions, typeInfo, hasDescription, theme='dark', footer}) {
    const validList = list && list.length > 0

    return (
        <InfoCardContainer theme={theme} >
            <h1 className='title-content'>{title}</h1>
            {
                validList ? (
                    list.map(item=>{
                        return (
                            <InfoCard 
                                title={item.title} 
                                typeInfo={typeInfo} 
                                infoData={item} 
                                key={item.id} 
                                handleDeleteItem={()=>crudActions?.handleDelete(item.id, typeInfo)}
                                handleEditItem={()=>crudActions?.handleUpdate(item)}
                                deleteItem={isDelete}
                                editItem={isEdit}
                                hasDescription={hasDescription}
                            />
                        )
                    })
                ) : (
                    <h2 className='title-content' style={{color:'var(--red)'}}>Não contém {title}</h2>
                )
            }
    
            {
                (isInsert) && (
                    <footer className='insert-row'>
                        <div className='insert-content' onClick={()=>crudActions?.handleCreate(typeInfo)}>
                            <AiOutlinePlusCircle className='insert-icon'/>
                            <p>{insertTitle}</p>
                        </div>
                    </footer>
                )
            }

            {!!footer && (
                <footer className='insert-row-center'>
                    {footer}
                </footer>
            )}
        </InfoCardContainer>
    )
}
