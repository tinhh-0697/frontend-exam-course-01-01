import React from "react";
import {
  LogoWrap,
  Logo,
  ShapeLogo,
  LogoText
} from "./styles";

function LogoC() {
  return (
    <LogoWrap>
      <Logo>
        <ShapeLogo />
        <LogoText>Orbita</LogoText>
      </Logo>
    </LogoWrap>
  );
}

export default LogoC;
