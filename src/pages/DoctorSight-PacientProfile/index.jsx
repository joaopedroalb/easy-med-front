import React, { Component } from 'react'
import backButton from "../../assets/images/go-back-arrow.png";
import pacient_profile from "../../assets/images/pacient_profile.png";
import { Header } from '../../components/layout/Headers/HeaderLogged/style';
import { SectionTitle, SectionInfo, SectionInfo2, LayoutPageDoctorSightPacientProfile } from './style';

export default function DoctorSightPacient() {
  return (
    <LayoutPageDoctorSightPacientProfile>
      {/* HeaderLoggedDoctor */}

      <Header></Header>

      <SectionTitle>
        INFORMAÇÕES DE PERFIL
        <div className='botao-voltar'><img src={backButton} alt="Botão Voltar" /></div>

      </SectionTitle>

      <SectionInfo>
        <div className='imgProfile'>
          <img src={pacient_profile} alt="" />
        </div>

        <div className="infoProfile">
          <div className="colA">
            <label htmlFor="">Nome:</label>
            <input type="text" readOnly/>
            <label htmlFor="">Altura:</label>
            <input type="text" readOnly/>
            <label htmlFor="">Plano de Saúde: </label>
            <input type="text" readOnly/>
          </div>
          <div className="colB">
            <label htmlFor=""> Paciente desde:</label>
            <input type="date" readOnly/>
            <label htmlFor="">Gênero:</label>
            <input type="text" readOnly/>
            <label htmlFor="">Peso:</label>
            <input type="text" readOnly/>
          </div>
        </div>
      </SectionInfo>

      <SectionInfo2>

      </SectionInfo2>
    </LayoutPageDoctorSightPacientProfile>
  )

}

