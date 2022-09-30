import React from 'react';
import { useState } from 'react';

import { ColumnInputContent, FormContainer, InputRow, InputsContainer, FooterContent, ButtonAction } from './style';
import { useContext } from 'react';
import { UserContext } from '../../../../../context/UserContext';

function FormsPatient() {
    const [isDisable, setIsDisable] = useState(true)
    const {mocksInfo, setNewMockInfos} = useContext(UserContext)

    const [userData,setUserData] = useState({
        general:mocksInfo.general,
        patient:mocksInfo.patient,
        login:mocksInfo.login
    })

    console.log(mocksInfo.patient.admission)

    const handleChangeUserData = (value, type, property ) =>{
        setUserData({...userData, [type]:{...userData[type],[property]:value} })
    }  

    const sizesValidate = (size, min, max) => size <= max && size >= min

    const validation = () =>{
        if(!sizesValidate(userData.general.height, 1, 2.5) || !sizesValidate(userData.general.weight,25, 220)) return false
        if(!userData.general.agreement || !userData.login.email || !userData.login.password) return false
        return true
    }

    const handleSave = () =>{
        if(!validation) return null

        setNewMockInfos(userData)
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
                            value={userData.general.height} 
                            type='number' 
                            onChange={({target})=>handleChangeUserData(target.value, 'general', 'height')}
                        />
                    </InputRow>
                    <InputRow>
                        <label>Peso: </label>
                        <input disabled={isDisable} 
                            value={userData.general.weight} 
                            type='number' 
                            onChange={({target})=>handleChangeUserData(target.value, 'general', 'weight')}
                        />
                    </InputRow>
                    <InputRow>
                        <label>Convênio: </label>
                        <input disabled={isDisable} 
                            value={userData.general.agreement} 
                            onChange={({target})=>handleChangeUserData(target.value, 'general', 'agreement')}
                    />
                    </InputRow>
                </ColumnInputContent>
                
                <ColumnInputContent>
                    <h1 className='title-column'>Dados Paciente</h1>
                    <InputRow>
                        <label>Admissão: </label>
                        <input disabled={isDisable}
                            value={userData.patient.admission} 
                            type='date' 
                            onChange={({target})=>handleChangeUserData(target.value, 'patient', 'admission')}
                        />
                    </InputRow>
                    <InputRow>
                        <label>Gênero: </label>
                        <input disabled={isDisable}
                            value={userData.patient.genre} 
                            type='text' 
                            onChange={({target})=>handleChangeUserData(target.value, 'patient', 'genre')}
                        />
                    </InputRow>
                </ColumnInputContent>

                <ColumnInputContent>
                    <h1 className='title-column'>Dados do Login</h1>
                    <InputRow>
                        <label>E-mail: </label>
                        <input disabled={isDisable}
                            value={userData.login.email} 
                            type='text' 
                            onChange={({target})=>handleChangeUserData(target.value, 'login', 'email')}
                        />
                    </InputRow>
                    <InputRow>
                        <label>Senha: </label>
                        <input disabled={isDisable}
                            value={userData.login.password} 
                            type='text' 
                            onChange={({target})=>handleChangeUserData(target.value, 'login', 'password')}
                        />
                    </InputRow>
                    <InputRow>
                        <label>Foto: </label>
                        <input disabled={isDisable}
                            value={userData.login.photo} 
                            type='text' 
                            onChange={({target})=>handleChangeUserData(target.value, 'login', 'photo')}
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