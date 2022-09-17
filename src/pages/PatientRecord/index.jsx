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
import ButtonLg from "../../components/common/ButtonLg";

import BG_URL from "../../assets/images/login_bg.jpg";
import { BUTTON_THEME } from "../../util/consts";

export default function PatientRecord() {
  return (
    <RecordBg>
      <LeftSide>
        <h1 className="title">
          Cadastre-se como <strong>paciente</strong>
        </h1>
        <FormRecordBg>
          <Input
            label="Nome"
            name="user_name"
            placeholder="Digite seu nome completo"
            type="text"
            required
          />
          <Input
            label="CPF"
            name="cpf"
            placeholder="Digite seu CPF"
            type="text"
            required
          />
          <Input
            label="Telefone"
            name="telefone"
            placeholder="Digite seu telefone"
            type="tel"
            required
          />
          <Input
            label="E-mail"
            name="email"
            placeholder="Digite seu E-mail"
            type="mail"
            required
          />
          <DivPasswords>
            <InputPass
              label="Senha"
              name="password_user"
              placeholder="Digite sua senha"
              type="password"
              required
            />
            <InputPass
              label="Senha"
              name="password_user"
              placeholder="Digite sua senha"
              type="password"
              required
            />
          </DivPasswords>
          <Button theme={BUTTON_THEME.darkBlue}>Cadastrar</Button>
          <ExistingAccountMessage>
            Já tem cadastro? <a href="/login">Clique aqui</a> para fazer login
          </ExistingAccountMessage>
        </FormRecordBg>
      </LeftSide>
      <RightSide urlBg={BG_URL}>
        <ButtonLg className="btn-right" theme={BUTTON_THEME.darkBlue}>
          Cadastre-se como Administrador
        </ButtonLg>
        <ButtonLg className="btn-right" theme={BUTTON_THEME.darkBlue}>
          Cadastre-se como Médico
        </ButtonLg>
      </RightSide>
    </RecordBg>
  );
}
