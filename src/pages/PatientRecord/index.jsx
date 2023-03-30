import React from "react";
import Input from "../../components/common/Input";
import InputPass from "../../components/common/InputPass";
import {
  RecordBg,
  LeftSide,
  FormRecordBg,
  ExistingAccountMessage,
  RightSide,
  DivPasswords,
} from "./style";

import Button from "../../components/common/Button";
import BG_URL from "../../assets/images/login_bg.jpg";
import { BUTTON_THEME } from "../../util/consts/styleTokens";
import { useState } from "react";
import { PatientService } from '../../services/patient/PatientService'
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Link, useNavigate } from "react-router-dom";
import MaskInput from "../../components/common/MaskInput";
import { MaskService } from "../../util/maskService";

export default function PatientRecord() {

  const {userLogin} = useContext(UserContext)
  const [errors, setErrors] = useState([])

  const [newUser,setNewUser] = useState({
    name:'',
    cpf:'',
    phone:'',
    email:'',
    password:''
  })

  const [confirmPassword,setConfirmPassword] = useState('')
  const navigate = useNavigate()

  const handleChangeUserValue = (value,property) =>{
    setNewUser({...newUser, [property]:value})
  }

  const handleBlurChangeUserValue = (value,property) =>{
    handleValidateByType(value, property)
    setNewUser({...newUser, [property]:value})
  }

  const handleSubmit = async (event) =>{
    event.preventDefault()

    if(errors.length > 0) return
    
    const newUserFormated = { 
      ...newUser,
      cpf: MaskService.CpfReverte(newUser.cpf),
      phone: MaskService.PhoneReverte(newUser.phone)
    }

    const result = await PatientService.create(newUserFormated)

    if(result.error) return

    const {id, name, email, profilePicture} = result.data
    userLogin(id,name,email, false, profilePicture)
    navigate('/profile')
  }

  const removeErrorByType = type => { 
    if(errors.indexOf(type) === -1) return 
    setErrors(values=>values.filter(x=> x !== type))
  }

  const handleValidateByType = (value, type) => { 
    switch(type){
      case 'cpf': 
        const cpfReverte = MaskService.CpfReverte(value)
        if(cpfReverte.length !== 11)
          setErrors(values=>[...values, 'cpf'])
        else 
          removeErrorByType('cpf')
        break

      case 'phone':
        const phoneReverte = MaskService.PhoneReverte(value)
        if( phoneReverte.length !== 11)
          setErrors(values=>[...values, 'phone'])
        else 
          removeErrorByType('phone')
        break 

      case 'email':
        const validateEmail =  /(.+)@(.+){2,}\.(.+){2,}/.test(value)
        if(!validateEmail)  
          setErrors(values=>[...values, 'email'])
        else
          removeErrorByType('email')
        break
      
      case 'name':
        if(value.length < 2)
          setErrors(values=>[...values, 'name'])
        else 
          removeErrorByType('name')
        break
      
      case 'password':
        if(newUser.password !== value)
          setErrors(values=>[...values, 'password'])
        else 
          removeErrorByType('password')
        break

      default: return null
    }

      
  }

  return (
    <RecordBg>
      <LeftSide>
        <h1 className="title">
          Cadastre-se como <strong>paciente</strong>
        </h1>
        <FormRecordBg onSubmit={handleSubmit}>
          <Input
            label="Nome"
            name="user_name"
            handleBlur={({target})=>handleBlurChangeUserValue(target.value, 'name')}
            placeholder="Digite seu nome completo"
            type="text"
            isError={errors.indexOf('name') !== -1}
            required
          />
          <MaskInput
            label="CPF"
            name="cpf"
            handleChange={({target})=>handleChangeUserValue(target.value, 'cpf')}
            placeholder="Digite seu CPF"
            type="text"
            required
            maskType="999.999.999-99"
            handleBlur={({target})=>handleValidateByType(target.value, 'cpf')}
            isError={errors.indexOf('cpf') !== -1}
          />

          <MaskInput
            label="Telefone"
            name="telefone"
            handleChange={({target})=>handleChangeUserValue(target.value, 'phone')}
            placeholder="Digite seu telefone"
            type="phone"
            required
            maskType="(99)99999-9999"
            isError={errors.indexOf('phone') !== -1}
            handleBlur={({target})=>handleValidateByType(target.value, 'phone')}
          />
          <Input
            label="E-mail"
            name="email"
            handleBlur={({target})=>handleBlurChangeUserValue(target.value, 'email')}
            placeholder="Digite seu E-mail"
            type="email"
            isError={errors.indexOf('email') !== -1}
            required
          />
          <DivPasswords>
            <InputPass
              label="Senha"
              name="password_user"
              placeholder="Digite sua senha"
              type="password"
              handleChange={({target})=>handleChangeUserValue(target.value, 'password')}
              value={newUser.password}
              isError={errors.indexOf('password') !== -1}
              required
            />
            <InputPass
              label="Senha"
              name="password_user"
              handleChange={({target})=>setConfirmPassword(target.value)}
              handleBlur={({target})=>handleValidateByType(target.value, 'password')}
              value={confirmPassword}
              placeholder="Digite sua senha"
              isError={errors.indexOf('password') !== -1}
              type="password"
              required
              disabled={newUser.password.length <= 0}
            />
          </DivPasswords>
          <Button theme={BUTTON_THEME.darkBlue} disabled={errors.length>0}>Cadastrar</Button>
          <ExistingAccountMessage>
            Já tem cadastro? <Link to="/signin">Clique aqui</Link> para fazer login
          </ExistingAccountMessage>
        </FormRecordBg>
      </LeftSide>
      <RightSide urlBg={BG_URL}>
      </RightSide>
    </RecordBg>
  );
}
