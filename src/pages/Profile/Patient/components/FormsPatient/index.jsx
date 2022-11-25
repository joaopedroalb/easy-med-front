import React from 'react';
import { useState } from 'react';
import Dropdown from '../../../../../components/common/Dropdown';
import { PatientService } from '../../../../../services/patient/PatientService';
import { DateService } from '../../../../../util/dateService';

import { ColumnInputContent, FormContainer, InputRow, InputsContainer, FooterContent, ButtonAction } from './style';

const GENDER_OPTIONS = [
    {value:'male', title: 'Masculino'},
    {value:'female', title: 'Feminino'},
    {value:'other', title: 'Outro'},
]

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
                            min={0}
                            onChange={({target})=>handleChangeeditUser(target.value * 1, 'height')}
                        />
                    </InputRow>
                    <InputRow>
                        <label>Peso: </label>
                        <input disabled={isDisable} 
                            value={editUser.weight} 
                            type='number' 
                            min={5}
                            onChange={({target})=>handleChangeeditUser(target.value * 1, 'weight')}
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
                            defaultValue={DateService.getDateFormated(editUser.createdAt)} 
                            type="text" 
                        />
                    </InputRow>
                    <InputRow>
                        <label>Gênero: </label>
                        <Dropdown 
                            options={GENDER_OPTIONS}
                            currentValue={editUser.gender}
                            handleChange={(value)=>{handleChangeeditUser(value,'gender')}}
                            disabled={isDisable}
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