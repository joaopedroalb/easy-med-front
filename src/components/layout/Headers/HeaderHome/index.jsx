import React from "react";
import { TitleLogo, Header, ButtonLogin, IconContent } from "./style";
import { FaUserAlt } from "react-icons/fa";
export default function HomeHeader() {
  return (
    <>
      <Header>
        <TitleLogo>EasyMed</TitleLogo>
        <ButtonLogin>
          <p className="text-btn">Entrar</p> 
          <IconContent>
            <FaUserAlt color="#F7F8FA" size={'1rem'}/>
          </IconContent>
        </ButtonLogin>
      </Header>
    </>
  );
}
