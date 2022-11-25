import React, { Component } from 'react'
import backButton from "../../assets/images/go-back-arrow.png";
import { BackButton } from "./style";

export default function DoctorSightPacient() {
  return (
    <>
      {/* HeaderLoggedDoctor */}

      <SectionTitle>
        INFORMAÇÕES DE PERFIL
        <button><img src="" alt="" /></button>
      </SectionTitle>

      <SectionInfo>
        <img src="" alt="" />
        <label htmlFor="">Nome:</label>
        <input type="text" />
        <label htmlFor="">Nome:</label>
        <input type="text" />
        <label htmlFor="">Nome:</label>
        <input type="text" />
        <label htmlFor="">Nome:</label>
        <input type="text" />
        <label htmlFor="">Nome:</label>
        <input type="text" />
        <label htmlFor="">Nome:</label>
        <input type="text" />
      </SectionInfo>

      <SectionInfo2>
        
      </SectionInfo2>
    </>
  )

}

