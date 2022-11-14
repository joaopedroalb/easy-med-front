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

export default function PatientRecord() {

  const {userLogin} = useContext(UserContext)

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

  const handleSubmit = async (event) =>{
    event.preventDefault()
    if(newUser.password !== confirmPassword) return

    const result = await PatientService.create(newUser)

    if(result.error) return

    const {id, name, email, pictureUrl} = result.data
    userLogin(id,name,email, false, pictureUrl)
    navigate('/profile')
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
            handleBlur={({target})=>handleChangeUserValue(target.value, 'name')}
            placeholder="Digite seu nome completo"
            type="text"
            required
          />
          <Input
            label="CPF"
            name="cpf"
            handleBlur={({target})=>handleChangeUserValue(target.value, 'cpf')}
            placeholder="Digite seu CPF"
            type="text"
            required
          />
          <Input
            label="Telefone"
            name="telefone"
            handleBlur={({target})=>handleChangeUserValue(target.value, 'phone')}
            placeholder="Digite seu telefone"
            type="phone"
            required
          />
          <Input
            label="E-mail"
            name="email"
            handleBlur={({target})=>handleChangeUserValue(target.value, 'email')}
            placeholder="Digite seu E-mail"
            type="email"
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
              required
            />
            <InputPass
              label="Senha"
              name="password_user"
              handleChange={({target})=>setConfirmPassword(target.value)}
              value={confirmPassword}
              placeholder="Digite sua senha"
              type="password"
              required
            />
          </DivPasswords>
          <Button theme={BUTTON_THEME.darkBlue}>Cadastrar</Button>
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
