import styled from "styled-components"


export const LayoutPageDoctorSightPacientProfile = styled.section `
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;

  overflow: overlay;
  
  background-color: #057FD7;

  width: 100%;
  height: 100%;

  font-size: 62.5%;
  /* 1rem = 10px */
`

export const SectionTitle = styled.section `
  
  width : 117.2rem;
  height: 7.4rem;


  margin: 5.4rem auto 0;


  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 3.6rem;
  line-height: 4.4rem;
  font-weight: 600;

  color: #000000;

  .botao-voltar {
    border: none;
    width: fit-content;
    color: #FFFFFF;

  }

  .botao-voltar img {
    width: 5rem;
    height: 5rem;

  }
`

export const SectionInfo = styled.section `
  margin: 0 auto;
  padding-top: 4.5rem;

  width: 87.6rem;
  height: 26.5rem;
  
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 4.6rem;
 

  .infoProfile {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6.7rem;
  }

  .infoProfile label {
    font-family: 'Montserrat';
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;

    color: #000000;
  }

  .infoProfile input {
    width: 25.4rem;
    height: 4.2rem;

    border-radius: 1.5rem;

    color: #000000;
  }
  .colA {
    height: 25.4rem;
    width: 25.4rem;

    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .colB {
    height: 25.4rem;
    width: 25.4rem;
    
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`
export const SectionInfo2 = styled.section `
  

`
