import styled from "styled-components";

export const FormContainer = styled.form`
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   gap: 2rem;
   padding: 2rem 0;
 `

 export const InputsContainer = styled.div`
   width: 100%;
   display: flex;
   align-items: flex-start;
   justify-content: center;
   gap: 10rem;
   padding: 0 5rem;
   flex-wrap: wrap;
 `
 
 export const ColumnInputContent = styled.div`
   max-width: 265px;
   display: flex;
   flex-direction: column;
   gap: 1rem;

   .title-column{
      align-self: center;
      font-weight: 700;
      font-size: 20px;
   }
 `

 export const InputRow = styled.div`
   flex: 1;
   display: flex;
   align-items: center;
   justify-content: space-between;
   gap: 8px;

   input{
      max-width: 70%;
      width: 200px;
      padding: .5rem;
      border: none;
      border-radius: 15px;
      font-weight: bold;

      &:disabled{
        font-weight: normal;
      }
   }
 `

 export const FooterContent = styled.footer`
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 2rem;
 `

 export const ButtonAction = styled.button`
   width: 100px;
   padding: 1rem;
   cursor: pointer;
   background-color: ${props=>props.isRed ? 'var(--red)':'var(--blue-600)'};
   color: var(--white);
   border: none;
   border-radius: 40px;
 `