import React from "react";
import {
  DivFooterHome,
  DivFooterLeft,
  DivFooterRight,
  TextFooterLeft,
} from "./style";
import { FiInstagram, FiYoutube, FiTwitter, FiLinkedin } from "react-icons/fi";
import { AiOutlineFacebook, AiOutlineWhatsApp } from "react-icons/ai";

export default function Footer() {
  return (
    <>
      <DivFooterHome>
        <DivFooterLeft>
          <TextFooterLeft>©2022 - EasyMed.</TextFooterLeft>
          <TextFooterLeft>Todos os direitos reservados.</TextFooterLeft>
        </DivFooterLeft>
        <DivFooterRight>
          <FiInstagram className="div-icons" size="48px" />
          <FiYoutube className="div-icons" size="48px" />
          <FiTwitter className="div-icons" size="48px" />
          <FiLinkedin className="div-icons" size="48px" />
          <AiOutlineFacebook className="div-icons" size="48px" />
          <AiOutlineWhatsApp className="div-icons" size="48px" />
        </DivFooterRight>
      </DivFooterHome>
    </>
  );
}
