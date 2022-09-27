import React from "react";
import {
  FormBg,
  LeftSide,
  LoginBg,
  NewAccountMessage,
  RightSide,
} from "./style";
import BG_URL from "../../assets/images/login_bg.jpg";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import { BUTTON_THEME } from "../../util/consts";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const [user,setUser] = useState({name: '', password: ''})
  const {userLogin, mockInfoLogin} = useContext(UserContext)
  const navigate = useNavigate()

  const MOCK_LOGIN = (event) =>{
    event.preventDefault()
    userLogin(1,user.name,user.name,'email@email.com',false)
    mockInfoLogin(`${user.name.replaceAll(' ','')}@gmail.com`,user.password)
    navigate('/profile')
  } 

  return (
    <LoginBg>
      <LeftSide>
        <h1 className="title">
          Easy <strong>M</strong>ed
        </h1>
        <FormBg onSubmit={MOCK_LOGIN}>
          <Input
            label="Nome de usuário"
            name="login_user"
            placeholder="Digite seu nome de usuário"
            type="text"
            handleBlur={({target})=>setUser({...user, name: target.value})}
          />

          <Input
            label="Senha"
            name="password_user"
            placeholder="Digite sua senha"
            type="password"
            handleBlur={({target})=>setUser({...user, password: target.value})}
          />
          <Button theme={BUTTON_THEME.darkBlue}>Entrar</Button>
          <NewAccountMessage>
            Ainda não tem cadastro? <a href="/cadastro-paciente">Clique aqui</a>
          </NewAccountMessage>
        </FormBg>
      </LeftSide>
      <RightSide urlBg={BG_URL}></RightSide>
    </LoginBg>
  );
}
