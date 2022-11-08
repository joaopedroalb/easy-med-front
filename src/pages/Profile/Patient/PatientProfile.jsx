import React from 'react';
import { useState, useCallback, useEffect, useContext } from 'react';
import InfoCard from '../../../components/common/InfoCard';
import LayoutPage from '../../../components/layout/LayoutPage';
import HeaderProfile from '../../../components/layout/Profile/HeaderProfile';
import { UserContext } from '../../../context/UserContext';
import { PatientService } from '../../../services/patient/PatientService';
import FormsPatient from './components/FormsPatient';
import { InfoCardContainer } from './style'
import {AiOutlinePlusCircle} from 'react-icons/ai'
import ModalCreateInfo from './components/ModalCreateInfo';
import { useDisableBodyScroll } from '../../../hooks/useDisableBodyScroll';

const LOREM_MOCK =  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sagittis nibh, sollicitudin fermentum justo. Ut in molestie ipsum, eget condimentum lorem. Pellentesque bibendum lacus nisi, ac elementum enim mollis in. Donec tincidunt, nulla quis rutrum vehicula, risus justo consectetur mi, vitae blandit sapien urna eu urna. Nunc lobortis, nulla a commodo commodo, orci sem volutpat lacus, mattis ullamcorper justo elit eu ex. Suspendisse ullamcorper, dolor sed elementum commodo, nisl libero vulputate sem, id consectetur nulla nisl eu sem. Integer quis feugiat ante. Nulla facilisi. Aliquam accumsan tortor ac libero dignissim, at ornare est molestie. Curabitur suscipit volutpat quam nec dignissim. Vestibulum sed fermentum massa, in tristique nisi. Sed feugiat nulla ante, id placerat enim egestas sit amet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas aliquet justo dolor, sed rutrum metus fermentum quis. In gravida condimentum porttitor. Cras ac venenatis lorem.

Sed dapibus mollis elementum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc velit sapien, egestas at nunc in, sollicitudin dapibus ligula. Nunc sed suscipit elit. Praesent euismod commodo imperdiet. Donec mollis arcu vel sapien auctor, a bibendum quam tincidunt. Integer nunc dui, feugiat eu metus non, pretium dignissim tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque ornare viverra sapien eu porta. Proin fringilla volutpat ex sit amet lacinia.

Etiam et massa lobortis, interdum mi sed, varius eros. Aliquam nec mi cursus diam posuere vehicula sed et magna. Phasellus luctus odio ut ante facilisis mattis. Donec auctor tempor vulputate. Donec tincidunt diam urna, ac aliquam sapien tristique a. Sed lorem lacus, volutpat vitae sapien id, tempor vulputate magna. Donec congue congue ex.

Phasellus consequat orci a ex molestie porttitor at ac dui. Donec ut iaculis felis. Aenean vel fringilla magna. In vitae augue ornare, dictum dui fringilla, luctus justo. Morbi mollis nulla in venenatis sollicitudin. Curabitur sagittis mauris velit, a pellentesque sem sollicitudin in. Aliquam efficitur tempor urna eu consectetur. Aenean malesuada lectus ac velit pretium, in volutpat sem pellentesque. Vestibulum volutpat massa lectus, id lobortis augue cursus id. Vestibulum iaculis elit nec turpis congue congue.

Integer finibus blandit risus quis fringilla. Fusce congue ac elit vitae finibus. Nullam hendrerit ac dolor sit amet iaculis. Nullam viverra sem quis dui vehicula mollis. Praesent lacinia dolor nec libero dictum pharetra. Integer venenatis mauris ac est imperdiet tempor. Sed at nibh sed diam condimentum congue at quis lorem. Etiam elementum ut orci ac sagittis. Sed tempus nunc non porttitor pulvinar. Mauris lacinia tempus dui eu bibendum. Fusce sit amet odio non ante rutrum dictum.

Vivamus ut mi in quam pharetra volutpat. Duis quis nibh scelerisque, ullamcorper tellus non, aliquam massa. Donec ante arcu, vulputate viverra purus ac, pretium volutpat magna. Proin luctus pretium dui, vel mattis massa molestie eu. Vestibulum ultricies neque in rhoncus rutrum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce venenatis porttitor dolor, nec venenatis lacus blandit at. Quisque vel lacinia felis. Proin pretium, lacus id imperdiet varius, tortor arcu ullamcorper urna, eu tincidunt magna ligula in leo. Integer quis varius metus. Praesent a orci non mi placerat aliquam eget a ex. Vestibulum sodales dolor et lacus malesuada volutpat. Nunc commodo cursus velit, at consequat ligula suscipit a.

Curabitur mattis nunc vel elit mollis, ut lobortis tellus dictum. Duis finibus massa ac ligula pretium, sed tincidunt lorem tincidunt. Vestibulum auctor venenatis leo, sit amet dapibus dolor molestie vel. Aenean eget urna purus. Vestibulum scelerisque, enim eget pulvinar lacinia, dui dui tincidunt mi, quis auctor urna odio eget ligula. Etiam venenatis volutpat volutpat. In non metus fringilla, suscipit orci et, consectetur massa. Mauris egestas id libero ac convallis. Integer luctus maximus tincidunt. Vivamus venenatis tortor ac posuere convallis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

Etiam gravida nulla ut enim congue, eget imperdiet leo tincidunt. Vivamus sed dui in sapien efficitur tincidunt sit amet ac nisi. Etiam eget eleifend diam. Etiam tellus libero, pulvinar sed imperdiet in, iaculis congue nisi. Praesent sed est nec felis venenatis sodales. Nunc blandit sit amet purus aliquam congue. Nunc pretium augue ac commodo malesuada. Sed congue a nisi eget rhoncus. Quisque suscipit quam ac`

const MOCK_ALLERGY = [
  {title: 'Frutos do mar', symptoms: 'Garganta fecha e talvez eu morra ', id:1},
  {title: 'Trabalhar', symptoms: 'Quando eu começo a trabalhar bate um sono, dor de cabeça e tudo de ruim. O melhor é não trabalhar',id:2},
  {title: 'Tomate', symptoms: LOREM_MOCK, id:3}
]

const MOCK_CONDITIONS = [
  {id: 1, title: 'Doença do passaro', symptoms:LOREM_MOCK},
  {id:2, title: 'Doença de Huntington', symptoms:`Nos músculos: anormalidade ao caminhar, aumento da atividade muscular, movimentos involuntários, problemas de coordenação, espasmos musculares ou perda de massa muscular
    Na cognição: amnésia, confusão mental, delírio, falta de concentração, lentidão durante atividades ou dificuldade em pensar e compreender
    No comportamento: comportamento compulsivo, inquietação, irritabilidade ou falta de moderação
    Sintomas psicológicos: alucinação, delírio, depressão ou paranoia
    No humor: ansiedade, apatia ou mudanças de humor
    Também é comum: contorção involuntária, dificuldade em falar, perda de memória, perda de peso ou tremor`
  }
]

const MOCK_MEDICINES = [
  {id:1, title: 'Vimatina C', dosage:0.2, type: "g", frequency:" 1 vez por dia"},
  {id:2, title: 'Vitamina B', dosage:1.5, type: "g", frequency:" 2 vez por dia"},
  {id:3, title: 'Predisim', dosage:1.0, type: "mg", frequency:" 1 vez por semana"}
]

export default function PatientProfile() {
  const {user} = useContext(UserContext)

  const [userData,setUserData] = useState(null)
  const [loading, setLoading] = useState(true)
  
  const [medications, setMedications] = useState(MOCK_MEDICINES)
  const [allergies, setAllergies] = useState(MOCK_ALLERGY)
  const [conditions, setConditions] = useState(MOCK_CONDITIONS)

  const [infoModal, setInfoModal] = useState({
                                              open:false,
                                              type:''
                                            })
  useDisableBodyScroll(infoModal.open)

  const openModalByType = (type) => {
    setInfoModal({open:true, type:type})
  }

  const closeModalType = () => setInfoModal({open:false, type:''})

  const getProfileInfo = useCallback(async ()=>{
    const result = await PatientService.getById(user.id)
    if(result.error) {
        setUserData(null) 
        setLoading(false)
        return
    }
    setUserData(result.data)

    // const medicationResult = await PatientService.getMedicationsById(user.id)
    // if(!medicationResult.error) setMedications(medicationResult.data)

    // const allergiesResult = await PatientService.getAllergiesById(user.id)
    // if(!allergiesResult.error) setAllergies(allergiesResult.data)

    // const conditionsResult  = await PatientService.getConditionsById(user.id)
    // if(!conditionsResult.error) setConditions(conditionsResult.data)

  },[user])

  const handleDeleteInfo = (id, type) => {
    switch(type){
      case 'DISEASE':
        const newConditions = conditions.filter(x=>x.id !== id)
        setConditions(newConditions)
        return 

      case 'ALLERGY':
        const newAllergies = allergies.filter(x=>x.id !== id)
        setAllergies(newAllergies)
        return

      case 'MEDICINE':
        const newMedications = medications.filter(x=>x.id !== id)
        setMedications(newMedications)
        return
    }
  }


  useEffect(()=>{
      getProfileInfo()
      setLoading(false)
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
              name={userData.name}
              hasBack={false}
              photoUrl={userData.pictureUrl}
          />

        <FormsPatient userData={userData} changeUserData={setUserData}/>
        <ModalCreateInfo 
          open={infoModal.open}
          type={infoModal.type}
          handleClose={closeModalType}
        />
        <InfoCardContainer>
          <h1 className='title-content'>Doenças Hereditárias</h1>
          {
            conditions.map(item=>{
              return (
                <InfoCard title={item.title} typeInfo="DISEASE" infoData={{symptoms: item.symptoms}} key={item.ìd} handleDeleteItem={()=>handleDeleteInfo(item.id, "DISEASE")}/>
              )
            })
          }
          <footer className='insert-row'>
            <div className='insert-content'>
              <AiOutlinePlusCircle className='insert-icon'/>
              <p onClick={()=>openModalByType('DISEASE')}>Adicionar nova doença</p>
            </div>
          </footer>
        </InfoCardContainer>

        <InfoCardContainer>
          <h1 className='title-content'>Alergias</h1>
          {
            allergies.map(item=>{
              return (
                <InfoCard title={item.title} typeInfo="ALLERGY" infoData={{symptoms: item.symptoms}} key={item.ìd} handleDeleteItem={()=>handleDeleteInfo(item.id, "ALLERGY")}/>
              )
            })
          }
          <footer className='insert-row'>
            <div className='insert-content'>
              <AiOutlinePlusCircle className='insert-icon'/>
              <p onClick={()=>openModalByType('ALLERGY')}>Adicionar nova Alergia</p>
            </div>
          </footer>
        </InfoCardContainer>

        <InfoCardContainer>
          <h1 className='title-content'>Medicamentos</h1>
          {
            medications.map(item=>{
              return (
                <InfoCard 
                  title={item.title} 
                  typeInfo="MEDICINE"
                  key={item.id}
                  handleDeleteItem={()=>handleDeleteInfo(item.id, "MEDICINE")}
                  infoData={{
                    dosage: item.dosage,
                    type: item.type,
                    frequency: item.frequency,
                  }}
                />
              )
            })
          }
          <footer className='insert-row'>
            <div className='insert-content'>
              <AiOutlinePlusCircle className='insert-icon'/>
              <p onClick={()=>openModalByType('MEDICINE')}>Adicionar novo Medicamento</p>
            </div>
          </footer>
        </InfoCardContainer>
      </>
    )
    
  }

  return (
    <LayoutPage>
        <RenderBody />
    </LayoutPage>
  )
}