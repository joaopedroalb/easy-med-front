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

export default function Login() {
  return (
    <LoginBg>
      <LeftSide>
        <h1 className="title">
          Easy <strong>M</strong>ed
        </h1>
        <FormBg>
          <Input
            label="Nome de usuário"
            name="login_user"
            placeholder="Digite seu nome de usuário"
            type="text"
          />

          <Input
            label="Senha"
            name="password_user"
            placeholder="Digite sua senha"
            type="password"
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
