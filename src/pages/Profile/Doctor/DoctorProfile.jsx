import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import Loading from '../../../components/common/Loading';
import LayoutPage from '../../../components/layout/LayoutPage';
import { UserContext } from '../../../context/UserContext';
import { DoctorService } from '../../../services/doctor/DoctorService';
import { INSURANCE_TYPES } from '../../../util/consts/types';
import ImageControl from './components/ImageControl';
import InputDrop from './components/InputDrop';
import InputPhone from './components/InputPhone';
import InputText from './components/InputText';
import InputTextBox from './components/InputTextBox';
import { BtnContainer, DoctorProfileContainer, FormContainer, SelectArea } from './style';

const INSURANCE_LIST = Object.keys(INSURANCE_TYPES).map(key=>INSURANCE_TYPES[key])

function DoctorProfile() {
  const {user} = useContext(UserContext)

  const [doctor, setDoctor] = useState(null)
  const [specialtyList, setSpecialtyList] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const INSURANCE_OPTIONS = INSURANCE_LIST.map(insurance=>{
    return {
      value: insurance,
      title: insurance
    }
  })

  const SPECIALTY_OPTIONS = specialtyList.map(specialty=>{
    return {
      value: specialty.id,
      title: specialty.name
    }
  })

  const getSpecialtyList = async () => {
    const {data, error} = await DoctorService.getSpecialties()

    if(error) 
      return

      setSpecialtyList(data)
  }

  const handleChangeByProperties = (value, prop) => {
    setDoctor({...doctor, [prop]: value})
  }

  const handleSubmit = async () => {
    const textValidate = !!doctor.name && doctor.name.length > 3 && !!doctor.email && doctor.email.length > 3
    const specialtyValidate = doctor.specialtyId !== 0
    const insuranceValidate = INSURANCE_LIST.includes(doctor.insurance)

    if (!textValidate || !specialtyValidate || !insuranceValidate)
      return null 
    
    const {data, error} = await DoctorService.updateById(doctor.id, doctor)
  }

  useEffect(()=>{
    return async () => {
      await getSpecialtyList()
      const {data, error} = await DoctorService.getById(user.id)
      if (!error)
        setDoctor({
          description: data.description,
          email: data.email,
          id: data.id,
          insurance: data.insurance,
          name: data.name,
          phone: data.phone,
          profilePicture: data.profilePicture,
          specialtyId: data.specialtyId
        })
      
      setError(error)
      setLoading(false)
    }
  },[])

  if(loading || !doctor)
    return (
      <LayoutPage>
        <Loading/>
      </LayoutPage>
    )

  if(error)
    return (
      <LayoutPage>
        <h1>Um Erro aconteceu tente mais tarde</h1>
      </LayoutPage>
    )

  return (
    <LayoutPage>
      <DoctorProfileContainer>
        <ImageControl 
          photoUrl={doctor.profilePicture}
          changePhotoUrl={(value)=>handleChangeByProperties(value, 'profilePicture')}
        />
        <FormContainer>
          <InputText 
            title={'Nome'}
            nameInpt={'name'}
            value={doctor.name}
            changeValue={(value)=>handleChangeByProperties(value, 'name')}
            rotate='left'
          />
          <InputText 
            title={'Email'}
            nameInpt={'email'}
            value={doctor.email}
            changeValue={(value)=>handleChangeByProperties(value, 'email')}
            rotate='right'
          />
          <InputTextBox 
            title={'Sobre mim'}
            nameInpt={'description'}
            value={doctor.description}
            changeValue={(value)=>handleChangeByProperties(value, 'description')}
            rotate='right'
          />
          <SelectArea>
            <InputPhone 
              title={'Telefone'}
              nameInpt={'phone'}
              value={doctor.phone}
              changeValue={(value)=>handleChangeByProperties(value, 'phone')}
              rotate='right'
            />
            <InputDrop 
              value={doctor.insurance}
              list={INSURANCE_OPTIONS}
              name={'insurance'}
              title={'Convênio'}
              changeValue={(value)=>handleChangeByProperties(value, 'insurance')}
            />

            <InputDrop 
              value={doctor.specialtyId}
              list={SPECIALTY_OPTIONS}
              name={'specialty'}
              title={'Especialidade'}   
              rotate='right'       
              changeValue={(value)=>handleChangeByProperties(+value, 'specialtyId')}
            />
          </SelectArea>
        </FormContainer>
        <BtnContainer>
          <button  className='btnSave' onClick={handleSubmit}>
            Salvar
          </button>
        </BtnContainer>
      </DoctorProfileContainer>
    </LayoutPage>
  )
}

export default DoctorProfile