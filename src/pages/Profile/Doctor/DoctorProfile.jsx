import React from "react";
import {
  Body,
  Content,
  DoctorInfo,
  Informations,
  Clinics,
  Patient,
  Diagnostic,
  BoxLabelDiagnostic,
  BoxLabelClinics,
  BoxLabelPatient,
  ContentFAQ,
  SectionFAQ,
  QuestionsFAQ,
  QuestionWhite,
  QuestionGray
} from "./style";
import HeaderDoctor from "../../../components/layout/Headers/HeaderDoctor";
import ArrowRight from "../../../assets/images/arrow-right.svg";
import Circle from "../../../assets/images/circle.svg";

export default function DoctorProfile() {
  return (
    <Body>
      <HeaderDoctor />
      <Content>
        {/* <Informations>
          <DoctorInfo></DoctorInfo>
          <Diagnostic>
            <BoxLabelDiagnostic>Diagnósticos Emitidos</BoxLabelDiagnostic>
          </Diagnostic>
          <Clinics>
            <BoxLabelClinics>Clínicas</BoxLabelClinics>
          </Clinics>
          <Patient>
            <BoxLabelPatient>Pacientes</BoxLabelPatient>
          </Patient>
        </Informations> */}
        <ContentFAQ>
          <SectionFAQ>
            <QuestionsFAQ>
              <QuestionWhite>
                <div className="circle"></div>
                <p>Pergunta</p>
                <img className="arrowRight" src={ArrowRight} />
              </QuestionWhite>
              <QuestionGray>
                <div className="circle"></div>
                <p>Pergunta</p>
                <img className="arrowRight" src={ArrowRight} />
              </QuestionGray>
              <QuestionWhite>
                <div className="circle"></div>
                <p>Pergunta</p>
                <img className="arrowRight" src={ArrowRight} />
              </QuestionWhite>
              <QuestionGray>
                <div className="circle"></div>
                <p>Pergunta</p>
                <img className="arrowRight" src={ArrowRight} />
              </QuestionGray>
              <QuestionWhite>
                <div className="circle"></div>
                <p>Pergunta</p>
                <img className="arrowRight" src={ArrowRight} />
              </QuestionWhite>
             
            </QuestionsFAQ>
          </SectionFAQ>
        </ContentFAQ>
      </Content>
    </Body>
  );
}
