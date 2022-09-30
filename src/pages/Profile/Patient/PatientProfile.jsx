import React from 'react';
import { useContext } from 'react';
import LayoutPage from '../../../components/layout/LayoutPage';
import HeaderProfile from '../../../components/layout/Profile/HeaderProfile';
import { UserContext } from '../../../context/UserContext';
import FormsPatient from './components/FormsPatient';

export default function PatientProfile() {
  const {user} = useContext(UserContext)

  return (
    <LayoutPage>
        <HeaderProfile
            title='Informações de Perfil:'
            name={user.name}
            hasBack={false}
        />
        <FormsPatient/>
    </LayoutPage>
  )
}