import React from "react";
import Footer from "../../components/common/Footer";
import ImgHome from "../../assets/images/img_home_1.png";
import ImgAttendance from "../../assets/images/img_atendimento.png";
import BoxImg01 from "../../assets/images/box_img_home_01.png";
import BoxImg02 from "../../assets/images/box_img_home_02.png";
import BoxImg03 from "../../assets/images/box_img_home_03.png";

import { BsWhatsapp } from "react-icons/bs";
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
  TextAttendance,
  DivAttendance,
  DivContact,
  TextContact,
  ButtonContact,
  ImgContact,
  ImgContainer,
  TextImgContainer,
  DivImgContainer,
  TextImgContainerDif,
} from "./style";
import LayoutPage from "../../components/layout/LayoutPage";

export default function Home() {
  return (
    <LayoutPage>
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
          <DivImgContainer>
            <ImgContainer src={BoxImg01} />
            <TextImgContainer>Atendimento de qualidade.</TextImgContainer>
          </DivImgContainer>
          <DivImgContainer>
            <ImgContainer src={BoxImg02} />
            <TextImgContainer>Profissionais qualificados.</TextImgContainer>
          </DivImgContainer>
          <DivImgContainer>
            <ImgContainer src={BoxImg03} />
            <TextImgContainerDif>
              Compromisso e responsabilidade com sua saúde.
            </TextImgContainerDif>
          </DivImgContainer>
        </DivImgsHomeContainer>

        <TextAttendance>Simplifique seu atendimento!</TextAttendance>
        <DivAttendance>
          <DivContact>
            <TextContact>Entre em contato com a gente!</TextContact>
            <ButtonContact>
              <BsWhatsapp size="24" />
              AGENDE SUA CONSULTA
            </ButtonContact>
          </DivContact>
          <ImgContact src={ImgAttendance} alt="Agende sua consulta" />
        </DivAttendance>
      </Central>
      <Footer></Footer>
    </LayoutPage>
  );
}
