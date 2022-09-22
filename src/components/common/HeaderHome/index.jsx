import React from "react";
import { CircleUser, Header, UserDiv, ParagraphLogin } from "./style";
import LogoImage from "../../../assets/images/svgs/logo_easy_med.svg";
import { FaUserAlt } from "react-icons/fa";
export default function HomeHeader() {
  return (
    <>
      <Header>
        <img src={LogoImage} alt="Logo" />
        <UserDiv>
          <ParagraphLogin>Login</ParagraphLogin>
          <CircleUser>
            <FaUserAlt size="1.5em" color="#F7F8FA" />
          </CircleUser>
        </UserDiv>
      </Header>
    </>
  );
}
