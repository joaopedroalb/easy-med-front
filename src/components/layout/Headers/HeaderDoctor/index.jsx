import React from "react";
import { TitleLogo, Header, BtnHeader, Nav } from "./style";

export default function HeaderDoctor() {
  return (
    <>
      <Header>
        <TitleLogo>EasyMed</TitleLogo>
        <Nav>
          <BtnHeader>Calendário</BtnHeader>
          <BtnHeader>FAQ</BtnHeader>
        </Nav>
      </Header>
    </>
  );
}
