import styled from "styled-components";

export const Central = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ImgCentral = styled.img`
  margin-top: 30px;
  width: 100%;
  height: 430px;
  object-fit:  contain ;
  display: flex;
`
export const TextWelcome = styled.p`
  margin-top: 60px;
  font-size: 40px;
  font-weight: 700;
  letter-spacing: 0.08em;
  line-height: 54px;
  color: var(--blue-300);
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
export const TextTheme = styled.p`
  margin-top: 60px;
  font-weight: 700;
  font-size: 30px;
`

export const DivTextTheme01 = styled.div`
  width: 590px;
  height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const TextTheme01 = styled.p`
  margin-top: 50px;
  text-align: center;
`

export const DivTextTheme02 = styled.div`
  width: 590px;
  height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const TextTheme02 = styled.p`
  margin-top: 50px;
  text-align: center;
`
export const DivImgsHomeContainer = styled.div`
  margin-top: 130px;
  width: 100%;
  height: 242px;
  background-color: var(--gray-100);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`
export const DivImgs = styled.div`
  width: 335px;
  height: 160px;
  background-color: white;
`
export const TextAttendance = styled.p`
  margin-top: 60px;
  font-weight: 700;
  font-size: 60px;
  color: var(--blue-300);
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
export const DivAttendance = styled.div`
  width: 1080px;
  height: 380px;
  background-color: lightblue;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 64px;
`
export const DivContact = styled.div`
  width: 400px;
  height: 180px;
  background-color: orange;
`
export const TextContact = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 36px;
  color: var(--black-alt);
  margin-bottom: 40px;
`
export const ButtonContact = styled.a`
  padding: 32px 16px;
  background-color: var(--dark-blue-700);
  border-radius: 40px;
  
`

export const DivImgContact = styled.div`
  width: 400px;
  height: 380px;
  background-color: orange;
`

export const DivFooterHome = styled.div`
  width: 100%;
  height: 270px;
  margin-top: 90px;
  background-color: var(--dark-blue-700);
`