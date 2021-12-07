import React from "react";
import { Link } from "react-router-dom";
import Loginbutton from "../LoginButton/LoginButton";
import { HeaderContainer, HeaderTitle } from "./header.style";
import logoIlly from "./Logo_IllyCaffe.jpg";

const Header = ({ shop }) => {
  return (
    <HeaderContainer>
      <Link to="/">
        <img width="80px" src={logoIlly} alt="logo illy" />
      </Link>
      <HeaderTitle>CAFFÈ</HeaderTitle>
      <Loginbutton />
    </HeaderContainer>
  );
};

export default Header;
