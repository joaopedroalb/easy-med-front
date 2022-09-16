import React from "react";
import {
  DivFooterHome,
  DivFooterLeft,
  DivFooterRight,
  TextFooterLeft,
} from "./style";
import LogoImage from "../../../assets/images/svgs/logo_easy_med.svg";
import { FiInstagram, FiYoutube, FiTwitter } from "react-icons/Fi";
import { AiOutlineFacebook, AiOutlineWhatsApp } from "react-icons/Ai";

export default function Footer() {
  return (
    <>
      <DivFooterHome>
        <DivFooterLeft>
          <img src={LogoImage} />
          <TextFooterLeft>©2022 - EasyMed.</TextFooterLeft>
          <TextFooterLeft>Todos os direitos reservados.</TextFooterLeft>
        </DivFooterLeft>
        <DivFooterRight>
          <FiInstagram size="48px" />
          <FiYoutube size="48px" />
          <FiTwitter size="48px" />
          <AiOutlineFacebook size="48px" />
          <AiOutlineWhatsApp size="48px" />
        </DivFooterRight>
      </DivFooterHome>
      ;
    </>
  );
}
