import React, { useEffect } from 'react'
import InfoCard from '../InfoCard'
import {AiOutlinePlusCircle} from 'react-icons/ai'
import { InfoCardContainer } from './style'

export default function InfoList({title, insertTitle, list, isEdit, isDelete, crudActions, typeInfo, hasDescription, theme='dark'}) {
    const {handleCreate, handleDelete, handleUpdate} = crudActions

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
                                handleDeleteItem={()=>handleDelete(item.id, typeInfo)}
                                handleEditItem={()=>handleUpdate(item.id, typeInfo)}
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
                (isDelete || isEdit) && (
                    <footer className='insert-row'>
                        <div className='insert-content' onClick={()=>handleCreate(typeInfo)}>
                            <AiOutlinePlusCircle className='insert-icon'/>
                            <p>{insertTitle}</p>
                        </div>
                    </footer>
                )
            }
        </InfoCardContainer>
    )
}
