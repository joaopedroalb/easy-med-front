import React, { useEffect } from 'react'
import InfoCard from '../InfoCard'
import {AiOutlinePlusCircle} from 'react-icons/ai'
import { InfoCardContainer } from './style'

export default function InfoList({title, list, isCrud=false, crudActions, typeInfo, hasDescription}) {
    const {handleCreate, handleDelete, handleUpdate} = crudActions

    const validList = list && list.length > 0

    return (
        <InfoCardContainer>
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
                                isCrud={isCrud}
                                hasDescription={hasDescription}
                            />
                        )
                    })
                ) : (
                    <h2>Não contém {title}</h2>
                )
            }
    
            {
                isCrud && (
                    <footer className='insert-row'>
                        <div className='insert-content' onClick={()=>handleCreate(typeInfo)}>
                            <AiOutlinePlusCircle className='insert-icon'/>
                            <p>Adicionar nova {title}</p>
                        </div>
                    </footer>
                )
            }
        </InfoCardContainer>
    )
}
