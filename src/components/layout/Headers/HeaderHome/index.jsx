import React from "react";
import { TitleLogo, Header, ButtonLogin, IconContent, NavItem} from "./style";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function HomeHeader() {
  return (
    <>
      <Header>
        <TitleLogo>EasyMed</TitleLogo>
        <div className="link-container">
          <Link to={'/faq'}>
            <NavItem>Nosso FAQ</NavItem> 
          </Link>
          <Link to="/signin">
            <ButtonLogin>
              <p className="text-btn">Entrar</p>
              <IconContent>
                <FaUserAlt color="#F7F8FA" size={"1rem"} />
              </IconContent>
            </ButtonLogin>
          </Link>
        </div>
      </Header>
    </>
  );
}
