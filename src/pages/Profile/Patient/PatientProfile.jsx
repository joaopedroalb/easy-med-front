import React from 'react';
import LayoutPage from '../../../components/layout/LayoutPage';
import HeaderProfile from '../../../components/layout/Profile/HeaderProfile';
import FormsPatient from './components/FormsPatient';

const IMAGE_DEFAULT = 'https://cdn.discordapp.com/attachments/469630958811742212/1022924520002158624/unknown.png'

export default function PatientProfile() {
  return (
    <LayoutPage>
        <HeaderProfile
            title='Informações de Perfil:'
            name='Cleiton Jones da Silva'
            hasBack={false}
            photo={IMAGE_DEFAULT}
        />
        <FormsPatient/>
    </LayoutPage>
  )
}