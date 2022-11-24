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
} from "./style";
import HeaderDoctor from "../../../components/layout/Headers/HeaderDoctor";

export default function DoctorProfile() {
  return (
    <Body>
      <HeaderDoctor />
      <Content>
        <Informations>
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
        </Informations>
      </Content>
    </Body>
  );
}
