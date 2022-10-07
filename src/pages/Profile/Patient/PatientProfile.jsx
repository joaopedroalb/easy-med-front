import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import LayoutPage from '../../../components/layout/LayoutPage';
import HeaderProfile from '../../../components/layout/Profile/HeaderProfile';
import { UserContext } from '../../../context/UserContext';
import { PatientService } from '../../../services/patient/PatientService';
import FormsPatient from './components/FormsPatient';

export default function PatientProfile() {
  const {user} = useContext(UserContext)
  const [userData,setUserData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
      const getProfileInfo = async () => {
          const result = await PatientService.getById(user.id)
          if(result.error) {
              setUserData(null) 
              setLoading(false)
              return
          }
          setUserData(result.data)
          setLoading(false)
      }
      getProfileInfo()
      
  },[])

  const RenderBody = () => {
    if(loading) 
      return
        <div>Loading</div>

    if(userData === null)
      return <div>Error</div>
    
    return (
      <>
        <HeaderProfile
              title='Informações de Perfil:'
              name={userData.name}
              hasBack={false}
              photoUrl={userData.pictureUrl}
          />
        <FormsPatient userData={userData} changeUserData={setUserData}/>
      </>
    )
    
  }

  return (
    <LayoutPage>
        <RenderBody />
    </LayoutPage>
  )
}