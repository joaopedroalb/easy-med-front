import React from "react";
import { TitleLogo, Header, BtnHeader } from "./style";

export default function HeaderDoctor() {
  return (
    <>
      <Header>
        <TitleLogo>EasyMed</TitleLogo>
        <div>
          <BtnHeader>Calendário</BtnHeader>
          <BtnHeader>FAQ</BtnHeader>
        </div>
      </Header>
    </>
  );
}
