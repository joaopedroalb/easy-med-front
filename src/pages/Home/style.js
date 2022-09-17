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
  justify-content: center;
  align-items: center;
  gap: 120px;
`
export const DivImgContainer = styled.div`
  position: relative;
`

export const ImgContainer = styled.img`
  border: 1px solid var(--white);
  border-radius: 15px;
`
export const TextImgContainer = styled.p`
  position: absolute;
  width: 169px;
  height: 56px;
  left: 17px;
  top: 37px;
  font-weight: 700;
  font-size: 20px;
  line-height: 150%;
  color: #A09AAC;
`
export const TextImgContainerDif = styled.p`
  position: absolute;
  width: 186px;
  height: 115px;
  left: 145px;
  top: 26px;
  font-weight: 700;
  font-size: 20px;
  line-height: 150%;
  color: #A09AAC;
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
  margin: 64px 0 90px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

`
export const DivContact = styled.div`
`
export const TextContact = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 40px;
  color: var(--black-alt);
  margin-bottom: 40px;
  width: 400px
  `
export const ButtonContact = styled.button`
  padding: 16px 32px;
  border: none;
  font-weight: 700;
  outline: none;
  cursor: pointer;
  color: var(--white);
  background-color: var(--dark-blue-700);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`

export const DivImgContact = styled.div`
  width: 400px;
  height: 380px;
`
export const ImgContact = styled.img`
  width: 575px;
  height: 380px;
  object-fit:  cover;
  border-radius: 20px;
`