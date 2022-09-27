import React from 'react';
import { useState } from 'react';

import { ColumnInputContent, FormContainer, InputRow, InputsContainer, FooterContent, ButtonAction } from './style';
import {MOCK_USER} from '../../../../../util/mocks'

function FormsPatient() {
    const [isDisable, setIsDisable] = useState(true)

    const [userData,setUserData] = useState({
        general:MOCK_USER.general,
        patient:MOCK_USER.patient,
        login:MOCK_USER.login
    })

    const handleChangeUserData = (value, type, property ) =>{
        setUserData({...userData, [type]:{...userData[type],[property]:value} })
    }

    const RenderGeneralInfoData = () =>{
        console.log('render')
        return(
            <ColumnInputContent>
                <h1 className='title-column'>Informações Gerais</h1>
                <InputRow>
                    <label>Altura: </label>
                    <input disabled={isDisable} 
                        value={userData.general.height} 
                        type='number' 
                        onChange={({target})=>handleChangeUserData(target.value, 'general', 'heigth')}
                    />
                </InputRow>
                <InputRow>
                    <label>Peso: </label>
                    <input disabled={isDisable} 
                        value={userData.general.weigth} 
                        type='number' 
                        onChange={({target})=>handleChangeUserData(target.value, 'general', 'weigth')}
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
        )
    }

    const RenderPatientData = () =>{
        return(
            <ColumnInputContent>
                <h1 className='title-column'>Dados Paciente</h1>
                <InputRow>
                    <label>Admissão: </label>
                    <input disabled={isDisable}/>
                </InputRow>
                <InputRow>
                    <label>Gênero: </label>
                    <input disabled={isDisable}/>
                </InputRow>
            </ColumnInputContent>
        )
    }   

    const RenderLoginData = () =>{
        return(
                <ColumnInputContent>
                    <h1 className='title-column'>Dados do Login</h1>
                    <InputRow>
                        <label>E-mail: </label>
                        <input disabled={isDisable}/>
                    </InputRow>
                    <InputRow>
                        <label>Senha: </label>
                        <input disabled={isDisable}/>
                    </InputRow>
                </ColumnInputContent>
        )
    }
     
    return (
        <FormContainer>
            <InputsContainer>
                <RenderGeneralInfoData/>
                <RenderPatientData/>
                <RenderLoginData/>
            </InputsContainer>

            <FooterContent>
                <ButtonAction type='button' onClick={()=>setIsDisable(false)}>Editar</ButtonAction>
            </FooterContent>
        </FormContainer>
    )
}

export default FormsPatient;