import styled from "styled-components";

export const DivFooterHome = styled.div`
  width: 100%;
  height: 270px;
  margin-top: 90px;
  background-color: var(--dark-blue-700);
  display: flex;
`
export const DivFooterLeft = styled.div`
  width: 50%;
  height: 100%;
  padding: 0 115px 0 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`
export const TextFooterLeft = styled.p`
  margin-top: 15px;
  color: var(--white);
`
export const DivFooterRight = styled.div`
  width: 50%;
  height: 100%;
  padding: 0 0 0 115px;
  display: flex;
  gap: 20px;
  align-items: center;
  color: var(--white);
`