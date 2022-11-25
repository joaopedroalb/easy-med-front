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

  margin: 5.4rem auto 4.5rem;

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
  margin: 4.5rem auto 10rem;
  padding: 0;

  width: 117.2rem;
  height: 40rem;
  
  display: flex;
  align-items: center;
  gap: 4.6rem;

  border-block-color: #6F6F6F;

 

  .infoProfile {
    display: flex;
    gap: 6.7rem;
  }

  .colA {
    height: 25.4rem;
    width: 25.4rem;

    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .colB {
    height: 25.4rem;
    width: 25.4rem;
    
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`
export const SectionInfo2 = styled.section `
  

`
