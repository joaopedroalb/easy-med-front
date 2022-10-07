import React from 'react';
import { useState } from 'react';
import { PatientService } from '../../../../../services/patient/PatientService';

import { ColumnInputContent, FormContainer, InputRow, InputsContainer, FooterContent, ButtonAction } from './style';

function FormsPatient({userData, changeUserData}) {
    const [isDisable, setIsDisable] = useState(true)
    const [editUser, setEditUser] = useState(userData)

    const handleChangeeditUser = (value, property ) =>{
        setEditUser({...editUser, [property]:value})
    }  

    const sizesValidate = (size, min, max) => size <= max && size >= min

    const validation = () =>{
        if(!sizesValidate(editUser.height, 1, 2.5) || !sizesValidate(editUser.weight,25, 220)) return false
        if(!editUser.email) return false
        return true
    }

    const handleSave = async () =>{
        if(!validation) return null

        const result = await PatientService.updateById(editUser.id, editUser)
        if(!result.error) changeUserData(result.data)
        setIsDisable(true)
    }

    const getDate  = (value) => {
        const date = new Date(value)
        return date.toLocaleDateString('pt-BR')
    }

    return (
        <FormContainer>
            <InputsContainer>
                <ColumnInputContent>
                    <h1 className='title-column'>Informações Gerais</h1>
                    <InputRow>
                        <label>Altura: </label>
                        <input disabled={isDisable} 
                            value={editUser.height} 
                            type='number' 
                            onChange={({target})=>handleChangeeditUser(target.value, 'height')}
                        />
                    </InputRow>
                    <InputRow>
                        <label>Peso: </label>
                        <input disabled={isDisable} 
                            value={editUser.weight} 
                            type='number' 
                            onChange={({target})=>handleChangeeditUser(target.value, 'weight')}
                        />
                    </InputRow>
                    {/* <InputRow>
                        <label>Convênio: </label>
                        <input disabled={isDisable} 
                            value={editUser.agreement} 
                            onChange={({target})=>handleChangeeditUser(target.value, 'agreement')}
                        />
                    </InputRow> */}
                </ColumnInputContent>
                
                <ColumnInputContent>
                    <h1 className='title-column'>Dados Paciente</h1>
                    <InputRow>
                        <label>Admissão: </label>
                        <input disabled
                            defaultValue={getDate(editUser.createdAt)} 
                            type="text" 
                        />
                    </InputRow>
                    <InputRow>
                        <label>Gênero: </label>
                        <input disabled={isDisable}
                            value={editUser.gender} 
                            type='text' 
                            onChange={({target})=>handleChangeeditUser(target.value, 'gender')}
                        />
                    </InputRow>
                </ColumnInputContent>

                <ColumnInputContent>
                    <h1 className='title-column'>Dados do Login</h1>
                    <InputRow>
                        <label>E-mail: </label>
                        <input disabled={isDisable}
                            value={editUser.email} 
                            type='text' 
                            onChange={({target})=>handleChangeeditUser(target.value, 'email')}
                        />
                    </InputRow>
                    {/* <InputRow>
                        <label>Senha: </label>
                        <input disabled={isDisable}
                            value={editUser.password} 
                            type='text' 
                            onChange={({target})=>handleChangeeditUser(target.value, 'password')}
                        />
                    </InputRow> */}
                    <InputRow>
                        <label>Foto: </label>
                        <input disabled={isDisable}
                            value={editUser.pictureUrl} 
                            type='text' 
                            onChange={({target})=>handleChangeeditUser(target.value, 'pictureUrl')}
                        />
                    </InputRow>
                </ColumnInputContent>

            </InputsContainer>

            <FooterContent>
                {
                    isDisable ? (
                        <ButtonAction type='button' onClick={()=>setIsDisable(false)}>Editar</ButtonAction>
                    ):(
                        <ButtonAction type='button' onClick={handleSave}>Salvar</ButtonAction>
                    )
                }
            </FooterContent>
        </FormContainer>
    )
}

export default FormsPatient;