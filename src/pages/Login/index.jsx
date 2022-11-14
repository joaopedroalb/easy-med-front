import React from "react";
import {
  ErrorMessage,
  FormBg,
  LeftSide,
  LoginBg,
  NewAccountMessage,
  RightSide,
} from "./style";
import BG_URL from "../../assets/images/login_bg.jpg";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import { BUTTON_THEME } from "../../util/consts/styleTokens";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Link, useNavigate } from "react-router-dom";
import { AuthService } from "../../services/auth/AuthService";

export default function Login() {

  const [user,setUser] = useState({email: '', password: ''})
  const [loginError, setLoginError] = useState(false)
  const {userLogin} = useContext(UserContext)
  const navigate = useNavigate()

  const handleLogin = async (event) =>{
    event.preventDefault()
    const result = await AuthService.login(user.email, user.password)
    setLoginError(result.error)
    if(result.error)
      return 

    const {id, name, email} = result.data
    userLogin(id, name, email)
    navigate('/profile')
  }

  return (
    <LoginBg>
      <LeftSide>
        <h1 className="title">
          Easy <strong>M</strong>ed
        </h1>
        <FormBg onSubmit={handleLogin}>
          <Input
            label="Nome de usuário"
            name="email_user"
            placeholder="Digite seu nome de usuário"
            type="email"
            handleChange={({target})=>setUser({...user, email: target.value})}
          />

          <Input
            label="Senha"
            name="password_user"
            placeholder="Digite sua senha"
            type="password"
            handleChange={({target})=>setUser({...user, password: target.value})}
          />
          <Button theme={BUTTON_THEME.darkBlue}>Entrar</Button>
          {
            loginError && <ErrorMessage>Email ou Senha está incorreta</ErrorMessage>
          }
          <NewAccountMessage>
            Ainda não tem cadastro? <Link to="/signup">Clique aqui</Link>
          </NewAccountMessage>
        </FormBg>
      </LeftSide>
      <RightSide urlBg={BG_URL}></RightSide>
    </LoginBg>
  );
}
