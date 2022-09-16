import React from "react";
import HeaderHome from "../../components/common/HeaderHome";
import ImgHome from "../../assets/images/img_home_1.png";
import { BsWhatsapp } from "react-icons/Bs";
import {
  Central,
  ImgCentral,
  TextWelcome,
  TextTheme,
  TextTheme01,
  TextTheme02,
  DivTextTheme01,
  DivTextTheme02,
  DivImgsHomeContainer,
  DivImgs,
  TextAttendance,
  DivAttendance,
  DivContact,
  DivImgContact,
  DivFooterHome,
  TextContact,
  ButtonContact,
} from "./style";

export default function Home() {
  return (
    <>
      <HeaderHome></HeaderHome>
      <Central>
        <ImgCentral
          src={ImgHome}
          alt="Facilitando sua vida e cuidando de você!"
        />

        <TextWelcome>Boas-vindas a EasyMed!</TextWelcome>

        <TextTheme>Assistência médica simplificada para todos.</TextTheme>

        <DivTextTheme01>
          <TextTheme01>
            A EasyMed existe para facilitar registro médico de exames e
            consultas, não importando o plano nem o local onde foram realizadas.
          </TextTheme01>
        </DivTextTheme01>

        <DivTextTheme02>
          <TextTheme02>
            Todos os médicos que atendem por clínicas vinculadas à EasyMed tem
            seus dados registrados, verificados e associados aos diagnósticos de
            cada paciente.
          </TextTheme02>
        </DivTextTheme02>

        <DivImgsHomeContainer>
          <DivImgs></DivImgs>
          <DivImgs></DivImgs>
          <DivImgs></DivImgs>
        </DivImgsHomeContainer>

        <TextAttendance>Simplifique seu atendimento!</TextAttendance>
        <DivAttendance>
          <DivContact>
            <TextContact>
              Entre em contato<br></br>com a gente!
            </TextContact>
            <ButtonContact>
              <BsWhatsapp />
              AGENDE SUA CONSULTA
            </ButtonContact>
          </DivContact>
          <DivImgContact></DivImgContact>
        </DivAttendance>
        <DivFooterHome></DivFooterHome>
      </Central>
    </>
  );
}
