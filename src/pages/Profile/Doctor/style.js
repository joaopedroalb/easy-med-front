import styled from "styled-components";

export const Body = styled.div`
    width: 100%;
    height: 100%;
    background-color: var(--white);
`

export const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    padding: 110px;
    justify-content: center;
`
export const Informations = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 60px 40px;
    grid-template-areas: "i d d"
                         "i c p";
`
export const DoctorInfo = styled.div`
    width: 350px;
    height: 759px;
    background: linear-gradient(90deg, #104E92 0%, rgba(46, 206, 222, 0.84) 100%);
    grid-area: i;
    border-radius: 7px;
    border: 1px solid white;
`


export const Diagnostic = styled.div`
    width: 850px;
    height: 349px;
    background-color: var(--absolut-white);
    grid-area: d;
    border-radius: 7px;
    border: 1px solid black;
`
export const Clinics = styled.div`
    width: 405px;
    height: 349px;
    background-color: var(--absolut-white);
    grid-area: c;
    border-radius: 7px;
    border: 1px solid black;
`
export const Patient = styled.div`
    width: 405px;
    height: 349px;
    background-color: var(--absolut-white);
    grid-area: p;
    border-radius: 7px;
    border: 1px solid black;
`
export const BoxLabelDiagnostic = styled.div`
    position: relative;
    right: 20px;
    top: -20px;
    display: flex;
    width: 350px;
    height: 60px;
    color: var(--white);
    font-weight: 700;
    font-size: 27px;
    line-height: 33px;
    align-items: center;
    justify-content: center;
    background-color: var(--blue-500);
    border-radius: 8px;
`
export const BoxLabelClinics = styled.div`
    position: relative;
    right: 20px;
    top: -20px; 
    display: flex;
    width: 350px;
    height: 60px;
    color: var(--white);
    font-weight: 700;
    font-size: 27px;
    line-height: 33px;
    align-items: center;
    justify-content: center;
    background-color: var(--blue-500);
    border-radius: 8px;
`
export const BoxLabelPatient = styled.div`
    position: relative;
    right: 20px;
    top: -20px;  
    display: flex;
    width: 350px;
    height: 60px;
    color: var(--white);
    font-weight: 700;
    font-size: 27px;
    line-height: 33px;
    align-items: center;
    justify-content: center;
    background-color: var(--blue-500);
    border-radius: 8px;
`